import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (email: string, items: any[], total: number) => {
  const itemList = items
    .map(
      (item) =>
        `<li style="margin-bottom: 8px;">${item.name} <strong>x${item.quantity}</strong></li>`
    )
    .join("");

  const htmlContent = `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <div style="text-align: center; background: #d32f2f; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #fff; margin: 0;">Thank You for Your Order!</h1>
      </div>

      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #333;">Hi there,</p>
        <p style="font-size: 16px; color: #333;">We appreciate your purchase! Here are your order details:</p>

        <ul style="list-style: none; padding: 0; font-size: 16px; color: #333;">
          ${itemList}
        </ul>

        <p style="font-size: 18px; font-weight: bold; color: #d32f2f;">Total: $${total.toFixed(
          2
        )}</p>

        <p style="font-size: 14px; color: #777;">If you have any questions, feel free to <a href="mailto:support@prominentau.com" style="color: #d32f2f; text-decoration: none;">contact us</a>.</p>

        <div style="text-align: center; margin-top: 20px;">
          <a href="https://prominentaustralia.netlify.app/" style="display: inline-block; padding: 12px 20px; background: #d32f2f; color: #fff; text-decoration: none; border-radius: 4px; font-size: 16px;">Visit Store</a>
        </div>
      </div>

      <div style="text-align: center; font-size: 12px; color: #777; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px;">
        <p>Prominent Australia &copy; ${new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your Order Confirmation",
      html: htmlContent,
    });
    console.log("✅ Email sent successfully via Resend");
  } catch (error) {
    console.error("❌ Email sending error:", error);
  }
};

export async function POST(req: Request) {
  try {
    const { email, cartItems, total } = await req.json();

    if (!email || !cartItems.length || !total) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save order to database
    await prisma.order.create({
      data: {
        email,
        details: JSON.stringify(cartItems), // Store as JSON string
        total,
        status: "pending",
      },
    });

    // Send email confirmation
    await sendEmail(email, cartItems, total);

    return NextResponse.json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("❌ Order creation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

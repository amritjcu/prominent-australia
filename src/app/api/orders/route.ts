import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import SibApiV3Sdk from "@sendinblue/client";

const sendEmail = async (email: string, items: any[], total: number) => {
  const client = new SibApiV3Sdk.TransactionalEmailsApi();
  client.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    process.env.SENDINBLUE_API_KEY!
  );

  const itemList = items
    .map((item) => `${item.name} x${item.quantity}`)
    .join(", ");

  const sendSmtpEmail = {
    to: [{ email }],
    sender: { email: "store@prominentau.com", name: "Prominent Australia" },
    subject: "Your Order Confirmation",
    htmlContent: `
      <h1>Thank you for your purchase!</h1>
      <p><strong>Items:</strong> ${itemList}</p>
      <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `,
  };

  try {
    await client.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email sending error:", error);
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

    await prisma.order.create({
      data: {
        email,
        details: JSON.stringify(cartItems), // Store as JSON string
        total,
        status: "pending",
      },
    });
    await sendEmail(email, cartItems, total);

    return NextResponse.json({ message: "Order saved successfully" });
  } catch (error) {
    console.error(error);
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

"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import CartList from "@/components/cart";

export default function Cart() {
    return (
        <div>
            <Navbar />
            {/* Hero */}
            <CartList />
            {/* End Contact Us */}
            <Footer />
            <CookieConsent variant="small" />
        </div>
    );
}

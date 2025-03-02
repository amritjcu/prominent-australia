import { Head } from "@inertiajs/react";
import Form from "./form";

export default function Create() {
    return (
        <div className="p-6">
            <Head title="Add Product" />
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <Form submitUrl="/products" method="post" />
        </div>
    );
}

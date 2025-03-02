import { Head } from "@inertiajs/react";
import Form from "./form";
import { Product } from "@/store/product";

interface Props {
    product: Product;
}

export default function Edit({ product }: Props) {
    return (
        <div className="p-6">
            <Head title="Edit Product" />
            <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
            <Form
                product={product}
                submitUrl={`/products/${product.id}`}
                method="put"
            />
        </div>
    );
}

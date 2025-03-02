import { FormEvent, useState } from "react";
import { router } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Product } from "@/store/product";

interface Props {
    product?: Product;
    submitUrl: string;
    method: "post" | "put";
}

export default function Form({ product, submitUrl, method }: Props) {
    const [values, setValues] = useState<Product>({
        id: product?.id || "",
        title: product?.title || "",
        description: product?.description || "",
        price: product?.price || 0,
        thumbnail: product?.thumbnail || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (method === "post") router.post(submitUrl, values);
        else router.put(submitUrl, values);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block mb-1">Title</label>
                <Input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block mb-1">Description</label>
                <Textarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block mb-1">Price</label>
                <Input
                    type="number"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block mb-1">Thumbnail URL</label>
                <Input
                    type="text"
                    name="thumbnail"
                    value={values.thumbnail}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex space-x-2">
                <Button type="submit">Save</Button>
                <Button
                    variant="secondary"
                    type="button"
                    onClick={() => history.back()}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}

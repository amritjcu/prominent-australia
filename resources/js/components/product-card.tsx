"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/store/product";
import { router } from "@inertiajs/react";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // const router = useRouter();
    const handleClick = () => {
        router.visit(`/products/${product.id}`);
    };

    return (
        <Card
            className="cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            onClick={handleClick}
        >
            <div className="relative h-48 w-full">
                <img
                    src={product.thumbnail}
                    className="object-cover"
                    alt={product.title}
                />
            </div>
            <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
                <p className="text-2xl font-bold text-primary">
                    ${product.price}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full">Buy Now</Button>
            </CardFooter>
        </Card>
    );
}

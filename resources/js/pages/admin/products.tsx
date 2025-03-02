import { router, Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Product } from "@/store/product";

interface Props {
    products: Product[];
}

export default function Index({ products }: Props) {
    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            router.delete(`/products/${id}`);
        }
    };

    return (
        <div className="p-6">
            <Head title="Products" />
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <Link href="/products/create">
                    <Button>Add Product</Button>
                </Link>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Thumbnail</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>${product.price}</TableCell>
                            <TableCell>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-12 h-12 object-cover"
                                />
                            </TableCell>
                            <TableCell className="flex space-x-2">
                                <Link href={`/products/${product.id}/edit`}>
                                    <Button variant="secondary">Edit</Button>
                                </Link>
                                <Button
                                    variant="destructive"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

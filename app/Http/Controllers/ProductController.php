<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
  
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

  
    public function create()
    {
        return Inertia::render('Products/Create');
    }

  
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'price'       => 'required|numeric',
            'thumbnail'   => 'required|string',
        ]);

        Product::create($validated);
        return redirect()->route('products.index');
    }

       public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', ['product' => $product]);
    }

   
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'price'       => 'required|numeric',
            'thumbnail'   => 'required|string',
        ]);

        $product->update($validated);
        return redirect()->route('products.index');
    }

    // Delete a product
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}

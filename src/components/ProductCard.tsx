"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart as AddToCartIcon } from "lucide-react";
import { Product, useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = React.useState(1);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating if wrapped in Link
        addToCart(product, quantity);
        setQuantity(1); // Reset quantity after adding
    };

    const increment = (e: React.MouseEvent) => {
        e.preventDefault();
        setQuantity(q => q + 1);
    };

    const decrement = (e: React.MouseEvent) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(q => q - 1);
        }
    };

    return (
        <Card className="p-0 gap-0 overflow-hidden group border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm hover:shadow-md transition-all hover:border-[#137fec]/50 dark:hover:border-[#137fec]/50">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                />
                {product.tag && (
                    <div className={`absolute top-2 right-2 rounded ${product.tag.color} px-2 py-1 text-xs font-bold text-white shadow-sm`}>
                        {product.tag.label}
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    <Link href="#"><span className="absolute inset-0"></span>{product.title}</Link>
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                    {product.description}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                            {product.originalPrice && (
                                <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                            )}
                            <span className="text-lg font-bold text-[#137fec]">${product.price.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 relative z-10">
                        <div className="flex items-center rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                            <button
                                onClick={decrement}
                                className="px-2 py-1 text-slate-600 dark:text-slate-400 hover:text-[#137fec] disabled:opacity-50"
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="px-2 text-sm font-medium text-slate-900 dark:text-white min-w-[1.5rem] text-center">
                                {quantity}
                            </span>
                            <button
                                onClick={increment}
                                className="px-2 py-1 text-slate-600 dark:text-slate-400 hover:text-[#137fec]"
                            >
                                +
                            </button>
                        </div>
                        <Button
                            className="flex-1 bg-[#137fec] hover:bg-[#137fec]/90 text-white gap-2"
                            onClick={handleAddToCart}
                        >
                            <AddToCartIcon className="size-4" />
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

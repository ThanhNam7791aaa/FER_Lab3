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

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating if wrapped in Link
        addToCart(product);
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
                <div className="mt-4 flex flex-1 items-end justify-between">
                    <div className="flex flex-col">
                        {product.originalPrice && (
                            <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="text-lg font-bold text-[#137fec]">${product.price.toFixed(2)}</span>
                    </div>
                    <Button
                        size="icon"
                        className="relative z-10 shrink-0 bg-[#137fec] hover:bg-[#137fec]/90 text-white rounded-md size-9"
                        onClick={handleAddToCart}
                    >
                        <AddToCartIcon className="size-5" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}

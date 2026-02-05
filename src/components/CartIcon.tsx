"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartIcon() {
    const { totalItems } = useCart();

    return (
        <Link href="/cart" className="relative flex items-center justify-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <ShoppingBag className="size-6 text-slate-700 dark:text-slate-200" />
            {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#137fec] text-[10px] font-bold text-white ring-2 ring-white dark:ring-[#0f172a]">
                    {totalItems}
                </span>
            )}
        </Link>
    );
}

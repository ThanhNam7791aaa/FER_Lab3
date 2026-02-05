"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/components/CartItem";
import { CartSummary } from "@/components/CartSummary";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
    const { cart, totalItems } = useCart();

    return (
        <div className="flex min-h-screen flex-col bg-[#f6f7f8] dark:bg-[#0f172a]">
            {/* Header */}
            <Header />

            <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Shopping Cart</h1>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                            {totalItems} {totalItems === 1 ? 'item' : 'items'}
                        </span>
                    </div>

                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1e293b] p-12 text-center shadow-sm">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                                <ShoppingBag className="h-10 w-10 text-slate-400" />
                            </div>
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Your cart is empty</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
                                Looks like you haven't added anything to your cart yet.
                            </p>
                            <Button asChild className="bg-[#137fec] hover:bg-[#137fec]/90 text-white">
                                <Link href="/">
                                    Start Shopping
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                            <div className="lg:col-span-8">
                                <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1e293b] shadow-sm">
                                    <div className="p-6 space-y-4">
                                        {cart.map((item) => (
                                            <CartItem key={item.id} item={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:mt-0 lg:col-span-4 sticky top-20">
                                <CartSummary />
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

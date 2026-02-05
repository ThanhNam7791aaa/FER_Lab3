"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export function CartSummary() {
    const { subtotal } = useCart();
    const shipping = 0; // Free shipping for now
    const tax = subtotal * 0.1; // Example tax calculation
    const total = subtotal + shipping + tax;

    return (
        <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10">
            <h2 className="text-lg font-medium text-slate-900 dark:text-white">Order Summary</h2>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Subtotal</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                    <dt className="text-base font-bold text-slate-900 dark:text-white">Order Total</dt>
                    <dd className="text-base font-bold text-[#137fec]">${total.toFixed(2)}</dd>
                </div>
            </div>

            <div className="mt-6">
                <Button className="w-full bg-[#137fec] hover:bg-[#137fec]/90 text-white font-semibold flex items-center justify-center gap-2">
                    Checkout <ArrowRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="mt-4 flex justify-center text-center text-sm text-slate-500 dark:text-slate-400">
                <p>
                    or{' '}
                    <a href="/" className="font-medium text-[#137fec] hover:text-[#137fec]/80">
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </p>
            </div>
        </div>
    );
}

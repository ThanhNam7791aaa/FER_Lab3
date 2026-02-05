"use client";

import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

interface CartItemProps {
    item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-slate-200 dark:border-slate-800 last:border-0">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-slate-200 dark:border-slate-700">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between self-stretch">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h3 className="text-base font-medium text-slate-900 dark:text-white">
                            {item.title}
                        </h3>
                        {item.tag && (
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                        )}
                    </div>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium text-slate-900 dark:text-white">
                            {item.quantity}
                        </span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
}

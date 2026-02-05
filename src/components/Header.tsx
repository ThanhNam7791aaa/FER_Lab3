"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartIcon } from "@/components/CartIcon";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded bg-[#137fec] text-white">
                            <ShoppingBag className="size-5" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">ShopFlow</span>
                    </Link>
                </div>

                {/* Search Bar (Hidden on mobile, visible on md+) */}
                <div className="hidden md:flex max-w-md flex-1 items-center px-8">
                    <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="size-5 text-slate-400" />
                        </div>
                        <Input
                            placeholder="Search products..."
                            className="pl-10 pr-3 bg-slate-50 dark:bg-slate-900 ring-offset-0 focus-visible:ring-[#137fec] focus-visible:border-[#137fec]"
                        />
                    </div>
                </div>

                {/* Navigation & Actions */}
                <div className="flex items-center gap-4">
                    <nav className="hidden lg:flex gap-6 mr-4">
                        <Link href="/" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#137fec] transition-colors">Home</Link>
                        <Link href="#" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#137fec] transition-colors">Shop</Link>
                        <Link href="#" className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#137fec] transition-colors">Deals</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <CartIcon />
                        <Button variant="ghost" className="hidden sm:flex text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="hidden sm:flex bg-[#137fec] hover:bg-[#137fec]/90 text-white" asChild>
                            <Link href="/register">Register</Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

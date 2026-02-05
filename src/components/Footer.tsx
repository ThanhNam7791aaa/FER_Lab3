"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Products</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">Best Sellers</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">Sale</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Support</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">Returns</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Company</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec] transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Newsletter</h3>
                        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Subscribe for the latest deals.</p>
                        <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="bg-slate-100 dark:bg-slate-800 border-0 focus-visible:ring-[#137fec] focus-visible:border-[#137fec]"
                            />
                            <Button type="submit" className="bg-[#137fec] hover:bg-[#137fec]/90 text-white font-semibold">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
                    <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 ShopFlow Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

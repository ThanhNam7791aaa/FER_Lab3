"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/context/CartContext";

// Product Data
const products: Product[] = [
    {
        id: 1,
        title: "Wireless Noise-Canceling Headphones",
        description: "High fidelity audio with 20h battery life and comfort fit.",
        price: 299.00,
        originalPrice: 375.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnEgvMFnPxGjRXkdDuDORSA-aED2eeQBHF5nqBz08tRHjUqlEorOgOrvK8Ac9q4PbW8eNKAAbv0xE0WNUaBEIr32wevMstJO3jooIIPisWPsf7QSChmftL14_cl4gMwAopXNZmfIdc7XsOo63Gx_sQIPxvFoUBp7ZmjYSgs0R8U5cN3zfrBTD9XiQsfim3KXhKBCejHIFUEEy5M_Yg3hV9pLPiXqGluHkZ0Bn8AJay6vBipUqc1ynNyAxliRiGDxAMOS5N5drTHYc",
        tag: { label: "-20%", color: "bg-red-500" }
    },
    {
        id: 2,
        title: "Smart Watch Series 7",
        description: "Track your fitness and stay connected on the go.",
        price: 399.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiVdb2-g7shdBIpUaT77SdThiPU3sBzxo0z3htfUzxrdpurHf8OLxH_LCFbRDQkSFv-afAidZ7tUgszTwXx6iLo3Y37-G9DOlmP4Pg2GUq0AfmgW8UQFdh8IGMdp7OxuUoTcBl4XTAQmUA4Xu-hKlnIfTFjeWSmI6XAC7LKETGiflUEz7fSQUCZbCsR-9fP4Iu5O7viN5VNWR-AXV89jX-9VBXqC-Pc8eU4HwrvYhAcKLRqkII9GvWuL4nB2p6lHEgyf2oN3oggLk"
    },
    {
        id: 3,
        title: "Urban Runner Sneakers",
        description: "Lightweight design with breathable mesh and superior grip.",
        price: 129.50,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDGBXPU3snVQWfU_xSGB71_nMwK2o8BilQ-W7fqMFhmxovoG74JmyR1yhq7oTxnyCvrWq10vR_jrq6w2Suk0O6-NFB4LDByitQORnPLMa-wHhheO5i8ypEIcjriQeYXFBWMGO6OyNomOuJk3sgoNT2BW5BbTRsn0X5R12jlS53502n_YZDFj7RRHJ5uD6GeQsd1-V2ZDQnPVceA-1ZV_DzzzeEr0gE2sTno1WEk--7qmuyKW_yFTCzvW0nP8PVObymbSy7_PwALsk"
    },
    {
        id: 4,
        title: "Retro Instant Camera",
        description: "Capture memories instantly with vintage style.",
        price: 89.99,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEgfombBZ8hWGNTNFRnRFUbs5GKeUo5GibjEMFWDFflM85FcKJ9NHtRTEz88B1mwNPJuBrL1wsHA2prAPVl9R2WLJElatWBbsZ381sOzzT2ORyJsBfCMdqxlNp_VpjdzYEGTkXjOx5xi2MdoMWHowpFdKcENXlI3GJ8Gc1co8E7aCbMGmXNzX7xkmPWb1xydEobVHMZ_LrCn-aGmRkQVQna_rkpnHCRdjnPuvjfqOeFzZg6DijAubPUdfceUAwXj9NddpquKc0CII",
        tag: { label: "Hot", color: "bg-orange-500" }
    },
    {
        id: 5,
        title: "Minimalist Desk Lamp",
        description: "Adjustable LED brightness with a sleek wooden base.",
        price: 45.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA69gGLoISwiS5gB2R5xY4JrxsKZ18-dLwYcOO6LtV315NEh9wr3_Zvz94yh3yJhFKAKZQ3Q8SJ-jSxyVQV3FWAcsFg9t8qDeEEVat24NGk_i19Wn1LngyLBfpdWKbvbsFAmdnACedvkYkYPXGVryhXhWkj-tkezxWfu7aPdGEzp4NzEODFLGOtRopRG7pEUZixqEf-2WykoOjmcmTTwykEwl6-dqAVCPfrqm3jm0-rhS_m87g9hyCHHR7iGRUpaq0FLGbws7BuT9A"
    },
    {
        id: 6,
        title: "Premium Grooming Kit",
        description: "Complete set for the modern gentleman's daily routine.",
        price: 55.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCddaJEecNHn_kp74rXPSX73eggIaNX9XrY4VIoxdRfxv6WZ-r_ENpHUGnwIHSKVXhiSjAUCoey1MJcZJczhd2e8qfBKHs8Zci8nxRZkoOjkUWFBtwSlFXaSdSEMjsRXhpLOLnQuFtBcQIoa9-DCClNmlrGHY-koHm1lhpMLj_3J3j3muCMoz5LM39-e1Gkdcw16WERgaWBjMMJsw7YQku2x2OHWYTtWGzkekmgy-upt4eiaowpcB1iFyVZKN1jkKUkWgsS5ZBTKYQ"
    },
    {
        id: 7,
        title: "Mechanical Keyboard",
        description: "RGB backlit keys with blue switches for tactile feedback.",
        price: 110.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4WHKuEcMfR426okDO04PoTgMS8QjRspuGeqsn1MvchtqSwWE-fmhN7nN3qYq9DidPgr0ciPwZ0EcRwkUQIzSXPLgWJu8JutXnlnON3mm4pThErH-g3cqHuJHKmE-BhNUQ1LNBuZiTbelEaM_7vxPiFFZYDkKlCBSZ-qnnn7DDR_xt2CNcMWudMC0C6FZ0v5HoJlAexrlIyph_oV9K0NOAyaSK0sCxFh8nY8E0xudWY2JG2Js1uYl8Ok1N1z2-PHPmAeZJe_RxLSM"
    },
    {
        id: 8,
        title: "Travel Backpack",
        description: "Durable, water-resistant pack for all your adventures.",
        price: 75.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCreAbt6QGC9Sa6X-4Rw4c3qzGdgPU1PT2BVWu2gFO7qupp5lF3J4nrH6F1l08FsH_nPTHR5nNoq-4qg6LVJWXDlE8KMpFROcpWOI5TdG3tGhoEs5F6RJ2wg2i2fyJopg0VzzQsoZ7DbZ37fsmAeD0uFJMLqXWiBqzRnlZpCBLXy1uxzJuPzAeaep5K2Mh-WaqzPoxf7F0TnEv3Qs8EAWq4BnzucsfUHc99vPlhD0Xqu_DOjJ3tgLWZiv9JYsmn5Qho43j7rdG6XNI"
    }
];

export default function Home() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f7f8] dark:bg-[#0f172a] text-slate-900 dark:text-white font-sans selection:bg-[#137fec] selection:text-white">
            {/* Top Navigation Bar */}
            <Header />

            {/* Main Content */}
            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    {/* Hero Section */}
                    <div className="relative overflow-hidden rounded-xl bg-[#1e293b] shadow-xl ring-1 ring-white/10 mb-12">
                        <div className="absolute inset-0 z-0">
                            {/* Abstract dark gradient background for hero */}
                            <div className="h-full w-full bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-transparent z-10 absolute inset-0"></div>
                            {/* Use div for background image to allow cover/center easily */}
                            <div
                                className="h-full w-full bg-cover bg-center absolute inset-0 opacity-60"
                                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQW5aOlih_cvKc4jsl95Ew6KtIpKPGBp647xoTAwA-rmtULT0c_2beowGJanmCCOh5w0ZMY6grkarRKAA15nunWFIEkE5yiDlopBl4CihAtdt1qPP1M3D_1nccplxff2hz3D22cdJM07SqjEeWXfTziimtBO60E50cY8EfOO0Z81icShCs5rzUuEQFNjdmT1ja6mNZ_GltHzTbQBMSB_pAGlThAwznAJ5fkOhJviysU8mz9Cd7oWLOoLLaJQpiJkRyCDaocppTWik')` }}
                            />
                        </div>

                        <div className="relative z-20 mx-auto max-w-2xl lg:mx-0 lg:max-w-xl p-8 sm:p-16 flex flex-col items-start gap-6">
                            <div className="inline-flex items-center rounded-full bg-[#137fec]/10 px-3 py-1 text-sm font-semibold text-[#137fec] ring-1 ring-inset ring-[#137fec]/20">
                                New Arrivals
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Summer Collection 2024
                            </h1>
                            <p className="text-lg leading-8 text-slate-300">
                                Discover the latest trends in fashion and electronics. Up to 50% off on select items for a limited time.
                            </p>
                            <div className="mt-4 flex items-center gap-x-6">
                                <Button size="lg" className="bg-[#137fec] hover:bg-[#137fec]/90 text-white font-semibold">
                                    Shop Now
                                </Button>
                                <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-[#137fec] transition-colors flex items-center gap-1">
                                    Learn more <ArrowRight className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Catalog Section Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Trending Products</h2>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Handpicked selection just for you.</p>
                        </div>
                        {/* Chips / Filters */}
                        <div className="flex flex-wrap gap-2">
                            <Button variant="ghost" className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 h-8">
                                All
                            </Button>
                            <Button variant="ghost" className="rounded-full bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 h-8">
                                Electronics
                            </Button>
                            <Button variant="ghost" className="rounded-full bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 h-8">
                                Fashion
                            </Button>
                            <Button variant="ghost" className="rounded-full bg-slate-100 dark:bg-[#1e293b] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 h-8">
                                Home
                            </Button>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" className="gap-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1e293b] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                            Load More Products
                            <ChevronDown className="size-4" />
                        </Button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}


"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Lock, AlertCircle, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

// Schema for form validation
const formSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form submitted:", data);
        // Handle login logic here
    };

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#f6f7f8] dark:bg-[#101922] font-sans text-[#111418] dark:text-white antialiased">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#283039] px-10 py-3 bg-white dark:bg-[#111418]">

                <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded bg-[#137fec] text-white">
                        <ShoppingBag className="size-5" />
                    </div>
                    <Link href="/" className="text-lg font-bold tracking-tight text-[#111418] dark:text-white">
                        ShopFlow
                    </Link>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="flex gap-2">
                        <Button variant="ghost" className="h-10 px-4 text-[#111418] dark:text-white font-bold hover:bg-black/5 dark:hover:bg-white/5">
                            Contact Support
                        </Button>
                        <Button className="h-10 px-4 bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold shadow-sm" asChild>
                            <Link href="/register">Register</Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center p-4 bg-cover bg-center relative">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFTSzqBgNR9CcbBbkCQYmdKum4dWvUgyAhA7BSu71aadAQnZQnHOc32aFtlM-xo785IXMy-otdlNtjx1BksueGiXdgbqXQJ9tp1SGosKH4rvVqVA8B9jjMt_BNO-hiwUUmPpeE5dZE05u-OHSbylgoL0krUcLti_9tCWQbQAf5bqB2dgn4DxGm2KW8CRFYkQE2hp39nuXQPrkdTn0KVlQ7tkWLa9XpLiqcvtwA3_cixnwlCq-60V0ihXu8c2kVIMLfeXfxqKBULBM')` }}
                />
                <div className="absolute inset-0 bg-[#f6f7f8]/90 dark:bg-[#101922]/90 backdrop-blur-sm z-0"></div>

                <div className="relative w-full max-w-[480px] flex flex-col gap-4 z-10">
                    {/* Login Card */}
                    <div className="flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#1c2127] shadow-xl p-8">
                        {/* Card Header */}
                        <div className="flex flex-col gap-2 mb-8 text-center">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#111418] dark:text-white">
                                Welcome Back
                            </h1>
                            <p className="text-[#637588] dark:text-[#9dabb9] text-base font-normal">
                                Enter your credentials to access your account
                            </p>
                        </div>

                        {/* Form */}
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="flex flex-col gap-2 space-y-0">
                                            <Label htmlFor="email" className="text-[#111418] dark:text-white text-sm font-medium leading-normal">
                                                Email
                                            </Label>
                                            <div className="relative">
                                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 text-[20px] ${fieldState.error ? "text-[#ef4444]" : "text-[#637588] dark:text-[#9dabb9]"}`} />
                                                <FormControl>
                                                    <Input
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        type="email"
                                                        className={`pl-11 pr-4 h-12 bg-white dark:bg-[#111418] border-[#e5e7eb] dark:border-[#3b4754] text-[#111418] dark:text-white shadow-sm focus-visible:ring-[#137fec] focus-visible:border-[#137fec] placeholder:text-[#9dabb9] ${fieldState.error ? "border-[#ef4444] focus-visible:ring-[#ef4444]" : ""}`}
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            {fieldState.error && (
                                                <p className="text-[#ef4444] text-xs font-medium flex items-center gap-1 mt-1">
                                                    <AlertCircle className="size-[14px]" />
                                                    {fieldState.error.message}
                                                </p>
                                            )}
                                        </FormItem>
                                    )}
                                />

                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="flex flex-col gap-2 space-y-0">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="password" className="text-[#111418] dark:text-white text-sm font-medium leading-normal">
                                                    Password
                                                </Label>
                                                <Link href="#" className="text-sm font-medium text-[#137fec] hover:text-[#137fec]/80 hover:underline">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                            <div className="relative">
                                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#637588] dark:text-[#9dabb9] text-[20px]" />
                                                <FormControl>
                                                    <Input
                                                        id="password"
                                                        placeholder="Enter your password"
                                                        type="password"
                                                        className="pl-11 pr-4 h-12 bg-white dark:bg-[#111418] border-[#e5e7eb] dark:border-[#3b4754] text-[#111418] dark:text-white shadow-sm focus-visible:ring-[#137fec] focus-visible:border-[#137fec] placeholder:text-[#9dabb9]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            {fieldState.error && (
                                                <p className="text-[#ef4444] text-xs font-medium flex items-center gap-1 mt-1">
                                                    {fieldState.error.message}
                                                </p>
                                            )}
                                        </FormItem>
                                    )}
                                />

                                {/* Submit Button */}
                                <Button type="submit" className="mt-2 w-full h-12 bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold text-base shadow-md">
                                    Sign In
                                </Button>
                            </form>
                        </Form>

                        {/* Divider */}
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-[#e5e7eb] dark:border-[#3b4754]"></div>
                            <span className="flex-shrink mx-4 text-xs text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider font-semibold">
                                Or continue with
                            </span>
                            <div className="flex-grow border-t border-[#e5e7eb] dark:border-[#3b4754]"></div>
                        </div>

                        {/* Social Logins */}
                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-10 gap-2 border-[#e5e7eb] dark:border-[#3b4754] bg-white dark:bg-[#111418] hover:bg-[#f3f4f6] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                </svg>
                                Google
                            </Button>
                            <Button variant="outline" className="h-10 gap-2 border-[#e5e7eb] dark:border-[#3b4754] bg-white dark:bg-[#111418] hover:bg-[#f3f4f6] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm">
                                <svg className="w-5 h-5 text-[#111418] dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                                </svg>
                                GitHub
                            </Button>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 text-center">
                            <p className="text-[#637588] dark:text-[#9dabb9] text-sm">
                                Don't have an account?{" "}
                                <Link href="/register" className="font-bold text-[#137fec] hover:text-[#137fec]/80 transition-colors">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Helper text outside card */}
                    <div className="text-center">
                        <p className="text-xs text-[#637588] dark:text-[#9dabb9]">
                            Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}


"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShoppingBag, Eye, EyeOff, AlertCircle } from "lucide-react";

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
const formSchema = z
    .object({
        fullName: z.string().min(2, "Full Name must be at least 2 characters"),
        email: z.string().min(1, "Email is required").email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(1, "Confirm Password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type FormValues = z.infer<typeof formSchema>;

export default function RegisterPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form submitted:", data);
        // Handle registration logic here
    };

    return (
        <div className="bg-[#f6f7f8] dark:bg-[#101922] font-sans text-[#111418] dark:text-white min-h-screen flex flex-col antialiased selection:bg-[#137fec]/30 selection:text-[#137fec]">
            {/* Navbar / Header (Minimal for Auth Page) */}
            <header className="w-full flex items-center justify-between px-6 py-4 lg:px-10 lg:py-6 fixed top-0 left-0 z-10">

                <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded bg-[#137fec] text-white">
                        <ShoppingBag className="size-5" />
                    </div>
                    <Link href="/" className="text-lg font-bold tracking-tight text-[#111418] dark:text-white">
                        ShopFlow
                    </Link>
                </div>
            </header>

            {/* Main Content: Centered Registration Card */}
            <main className="flex-1 flex items-center justify-center p-4 pt-20">
                <div className="w-full max-w-[440px] bg-white dark:bg-[#1c2127] rounded-xl shadow-2xl border border-[#dce0e5] dark:border-[#283039] overflow-hidden">
                    {/* Card Header */}
                    <div className="px-8 pt-8 pb-4 text-center">
                        <h1 className="text-2xl font-bold tracking-tight mb-2">
                            Create an account
                        </h1>
                        <p className="text-[#637588] dark:text-[#9dabb9] text-sm leading-relaxed">
                            Enter your email below to create your account and start shopping.
                        </p>
                    </div>

                    {/* Card Body: Form */}
                    <div className="p-8 pt-2">

                        {/* Social Auth Buttons */}
                        <div className="grid grid-cols-2 gap-3 mb-2">
                            <Button variant="outline" className="h-10 gap-2 border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#111418] hover:bg-[#f3f4f6] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                </svg>
                                Google
                            </Button>
                            <Button variant="outline" className="h-10 gap-2 border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#111418] hover:bg-[#f3f4f6] dark:hover:bg-[#283039] text-[#111418] dark:text-white font-bold text-sm">
                                <svg className="w-5 h-5 text-[#111418] dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                                </svg>
                                GitHub
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-[#dce0e5] dark:border-[#283039]"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-[#1c2127] px-2 text-[#637588] dark:text-[#9dabb9]">
                                    Or continue with email
                                </span>
                            </div>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2">
                                {/* Full Name Field */}
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="space-y-2">
                                            <Label htmlFor="fullName" className="text-sm font-medium leading-none text-[#111418] dark:text-white">
                                                Full Name
                                            </Label>
                                            <FormControl>
                                                <Input
                                                    id="fullName"
                                                    placeholder="John Doe"
                                                    className="h-11 rounded-lg border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder:text-[#9dabb9] focus-visible:ring-[#137fec]/50 focus-visible:border-[#137fec] transition-all"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500 text-xs" />
                                        </FormItem>
                                    )}
                                />

                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium leading-none text-[#111418] dark:text-white">
                                                Email
                                            </Label>
                                            <FormControl>
                                                <Input
                                                    id="email"
                                                    placeholder="m@example.com"
                                                    type="email"
                                                    className="h-11 rounded-lg border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder:text-[#9dabb9] focus-visible:ring-[#137fec]/50 focus-visible:border-[#137fec] transition-all"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500 text-xs" />
                                        </FormItem>
                                    )}
                                />

                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="space-y-2">
                                            <Label htmlFor="password" className="text-sm font-medium leading-none text-[#111418] dark:text-white">
                                                Password
                                            </Label>
                                            <div className="relative">
                                                <FormControl>
                                                    <Input
                                                        id="password"
                                                        type={showPassword ? "text" : "password"}
                                                        className="h-11 pr-10 rounded-lg border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder:text-[#9dabb9] focus-visible:ring-[#137fec]/50 focus-visible:border-[#137fec] transition-all"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9dabb9] hover:text-[#111418] dark:hover:text-white transition-colors cursor-pointer"
                                                >
                                                    {showPassword ? (
                                                        <Eye className="size-5" />
                                                    ) : (
                                                        <EyeOff className="size-5" />
                                                    )}
                                                </button>
                                            </div>
                                            <FormMessage className="text-red-500 text-xs" />
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password Field */}
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field, fieldState }) => (
                                        <FormItem className="space-y-2">
                                            <Label htmlFor="confirmPassword" className="text-sm font-medium leading-none text-[#111418] dark:text-white">
                                                Confirm Password
                                            </Label>
                                            <div className="relative">
                                                <FormControl>
                                                    <Input
                                                        id="confirmPassword"
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        className={`h-11 pr-10 rounded-lg bg-white dark:bg-[#101922] text-[#111418] dark:text-white placeholder:text-[#9dabb9] transition-all ${fieldState.error
                                                            ? "border-red-500 focus-visible:ring-red-500/30 focus-visible:border-red-500"
                                                            : "border-[#dce0e5] dark:border-[#3b4754] focus-visible:ring-[#137fec]/50 focus-visible:border-[#137fec]"
                                                            }`}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9dabb9] hover:text-[#111418] dark:hover:text-white transition-colors cursor-pointer"
                                                >
                                                    {showConfirmPassword ? (
                                                        <Eye className="size-5" />
                                                    ) : (
                                                        <EyeOff className="size-5" />
                                                    )}
                                                </button>
                                            </div>

                                            {fieldState.error && (
                                                <p className="text-red-500 text-[13px] font-medium flex items-center gap-1 mt-1 animate-pulse">
                                                    <AlertCircle className="size-4" />
                                                    {fieldState.error.message}
                                                </p>
                                            )}
                                        </FormItem>
                                    )}
                                />

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="mt-4 w-full h-11 px-8 rounded-lg bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold text-sm shadow-sm transition-all"
                                >
                                    Sign Up
                                </Button>
                            </form>
                        </Form>

                        {/* Footer Link */}
                        <div className="mt-6 text-center text-sm">
                            <p className="text-[#637588] dark:text-[#9dabb9]">
                                Already have an account?{" "}
                                <Link href="/login" className="font-bold text-[#137fec] hover:underline hover:text-[#137fec]/80 transition-colors ml-1">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Terms Footer */}
                    <div className="bg-[#f6f7f8] dark:bg-[#161b22] px-8 py-4 text-center border-t border-[#dce0e5] dark:border-[#283039]">
                        <p className="text-xs text-[#637588] dark:text-[#9dabb9]">
                            By clicking continue, you agree to our{" "}
                            <Link href="#" className="underline hover:text-[#111418] dark:hover:text-white">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="underline hover:text-[#111418] dark:hover:text-white">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

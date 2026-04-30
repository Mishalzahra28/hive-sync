"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect,useState } from "react";

import { cn } from "@/lib/utils";

import { AppleGlassNav } from "./AppleGlassNav";

const NAV_LINKS = [
    { name: "Product", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Company", href: "#" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center py-6 px-4",
                scrolled ? "py-4" : "py-6"
            )}
        >
            {/* Background Blob Effects for the Nav Area */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
                <div className={cn(
                    "absolute w-64 h-24 bg-blue-400/20 blur-[60px] rounded-full transition-opacity duration-500",
                    scrolled ? "opacity-100" : "opacity-0"
                )} />
            </div>

            <div className="relative flex items-center gap-8">
                {/* Logo Area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:flex items-center"
                >
                    <Image
                        src="/logo.png"
                        alt="Hive Sync"
                        width={100}
                        height={30}
                        className="h-8 w-auto object-contain"
                    />
                </motion.div>

                {/* The Apple Glass Nav Component */}
                <div className="relative">
                    {/* Background Glows (Matching the Preview Blobs) */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300/30 rounded-full blur-xl animate-pulse" />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-cyan-300/30 rounded-full blur-xl animate-pulse delay-1000" />

                    <AppleGlassNav items={NAV_LINKS} />
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:flex items-center"
                >
                    <button className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
                        Get Started
                    </button>
                </motion.div>
            </div>
        </header>
    );
};

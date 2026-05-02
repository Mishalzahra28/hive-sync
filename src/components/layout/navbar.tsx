"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Logo from "@/components/common/logo";

import { cn } from "@/lib/utils";

import { paths } from "@/constants/paths";

import { AppleGlassNav } from "./AppleGlassNav";

const NAV_LINKS = [
    { name: "Services", href: paths.services },
    { name: "Process", href: paths.process },
    { name: "Work", href: paths.caseStudies },
    { name: "Pricing", href: paths.pricing },
    { name: "Careers", href: paths.careers }
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4",
                scrolled ? "py-4" : "py-6"
            )}
        >
            {/* Global Glass Background (Visible on Mobile or when Scrolled) */}
            <div className={cn(
                "absolute inset-0 transition-all duration-500 border-b",
                scrolled || isMobileMenuOpen
                    ? "bg-[#020617]/80 backdrop-blur-xl border-white/10 opacity-100"
                    : "bg-transparent border-transparent opacity-0",
                "lg:hidden" // Only apply this full-width glass to mobile
            )} />

            {/* Background Blob Effects */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
                <div className={cn(
                    "absolute w-64 h-24 bg-blue-400/20 blur-[60px] rounded-full transition-opacity duration-500",
                    scrolled ? "opacity-100" : "opacity-0"
                )} />
            </div>

            <div className="relative w-full max-w-7xl flex items-center justify-between lg:justify-center gap-8">
                {/* Logo Area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center"
                >
                    <Logo />
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:block relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300/30 rounded-full blur-xl animate-pulse" />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-cyan-300/30 rounded-full blur-xl animate-pulse delay-1000" />
                    <AppleGlassNav items={NAV_LINKS} />
                </div>

                {/* Desktop CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:flex items-center"
                >
                    {/* Star Glow Navbar Button */}
                    <button className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <span className="absolute inset-0 rounded-full overflow-hidden">
                            <span className="inset-0 absolute pointer-events-none select-none">
                                <span
                                    className="block -translate-x-1/2 -translate-y-1/3 size-12 blur-xl"
                                    style={{ background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)' }}
                                ></span>
                            </span>
                        </span>

                        <span
                            className="inset-0 absolute pointer-events-none select-none"
                            style={{ animation: '10s ease-in-out 0s infinite alternate none running border-glow-translate' }}
                        >
                            <span
                                className="block z-0 h-full w-8 blur-xl -translate-x-1/2 rounded-full"
                                style={{
                                    animation: '10s ease-in-out 0s infinite alternate none running border-glow-scale',
                                    background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)'
                                }}
                            ></span>
                        </span>

                        <span
                            className="flex items-center justify-center gap-1.5 relative z-[1] dark:bg-[#020617]/90 bg-white/90 rounded-full py-2 px-6 w-full backdrop-blur-xl"
                        >

                            <span className="bg-gradient-to-b dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs font-bold text-transparent transition-all">
                                Get Started
                            </span>
                        </span>
                    </button>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden relative size-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white transition-all active:scale-95"
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <X className="size-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                            >
                                <Menu className="size-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[calc(100%+12px)] left-4 right-4 p-6 rounded-[32px] bg-[#0F172A]/80 backdrop-blur-3xl border border-white/10 shadow-2xl lg:hidden overflow-hidden"
                    >
                        {/* Decorative Background Blob for Mobile Menu */}
                        <div className="absolute -top-10 -right-10 size-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                        <nav className="relative z-10 flex flex-col gap-2">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-6 py-4 rounded-2xl text-lg font-bold text-white/60 hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: NAV_LINKS.length * 0.1 }}
                                className="mt-4 w-full"
                            >
                                {/* Star Glow Mobile Button */}
                                <button className="group relative w-full dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden transition-all active:scale-[0.98]">
                                    <span className="absolute inset-0 rounded-full overflow-hidden">
                                        <span className="inset-0 absolute pointer-events-none select-none">
                                            <span
                                                className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
                                                style={{ background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)' }}
                                            ></span>
                                        </span>
                                    </span>

                                    <span
                                        className="inset-0 absolute pointer-events-none select-none"
                                        style={{ animation: '10s ease-in-out 0s infinite alternate none running border-glow-translate' }}
                                    >
                                        <span
                                            className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
                                            style={{
                                                animation: '10s ease-in-out 0s infinite alternate none running border-glow-scale',
                                                background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)'
                                            }}
                                        ></span>
                                    </span>

                                    <span
                                        className="flex items-center justify-center gap-2 relative z-[1] dark:bg-[#020617]/90 bg-white/90 rounded-full py-5 px-10 w-full backdrop-blur-xl"
                                    >
                                        <span
                                            className="relative group-hover:scale-110 transition-transform duration-700"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="opacity-80 dark:opacity-100"
                                                style={{ animation: '14s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s infinite alternate none running star-rotate' }}
                                            >
                                                <path
                                                    d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3768 20.4499 18.3768 20.4499 18.3768 20.4499Z"
                                                    fill="url(#mobile_star_gradient)"
                                                />
                                                <defs>
                                                    <linearGradient id="mobile_star_gradient" x1="-0.5" y1="9" x2="15.5" y2="-1.5" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#3B82F6"></stop>
                                                        <stop offset="0.575" stopColor="#6366F1"></stop>
                                                        <stop offset="1" stopColor="#8B5CF6"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className="bg-gradient-to-b dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-sm font-bold text-transparent">
                                            Get Started
                                        </span>
                                    </span>
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

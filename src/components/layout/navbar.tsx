"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Logo from "@/components/common/logo";
import { paths } from "@/constants/paths";
import { cn } from "@/lib/utils";

import { AppleGlassNav } from "./AppleGlassNav";

const NAV_LINKS = [
    { name: "Services", href: paths.services },
    { name: "Process", href: paths.process },
    { name: "Work", href: paths.caseStudies },
    { name: "Pricing", href: paths.pricing },
    { name: "Careers", href: paths.careers },
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4",
                scrolled ? "py-3" : "py-5",
            )}
        >
            {/* Glass background appears on scroll (desktop + mobile) and when mobile menu opens */}
            <div
                className={cn(
                    "absolute inset-0 transition-all duration-300 border-b",
                    scrolled || isMobileMenuOpen
                        ? "bg-background/80 backdrop-blur-xl border-border opacity-100"
                        : "bg-transparent border-transparent opacity-0",
                )}
            />

            <div className="relative w-full max-w-7xl flex items-center justify-between gap-8">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center"
                >
                    <Logo />
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <AppleGlassNav items={NAV_LINKS} />
                </div>

                {/* Desktop CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:flex items-center"
                >
                    <Link
                        href={paths.getStarted}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all active:scale-95 shadow-md"
                    >
                        Get Started
                    </Link>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    className="lg:hidden relative size-11 flex items-center justify-center rounded-2xl bg-foreground/5 border border-border text-foreground transition-all active:scale-95"
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
                        className="absolute top-[calc(100%+12px)] left-4 right-4 p-6 rounded-3xl bg-background border border-border shadow-2xl lg:hidden"
                    >
                        <nav className="flex flex-col gap-1">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-3 rounded-xl text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: NAV_LINKS.length * 0.05 }}
                                className="mt-3"
                            >
                                <Link
                                    href={paths.getStarted}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all active:scale-[0.98] shadow-md"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

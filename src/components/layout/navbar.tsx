"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

import Logo from "@/components/common/logo";

import { cn } from "@/lib/utils";

import { paths } from "@/constants/paths";

import { AppleGlassNav } from "./AppleGlassNav";

const NAV_LINKS = [
    { name: "Services", href: paths.services },
    { name: "Process", href: paths.process },
    { name: "Work", href: paths.caseStudies },
    { name: "Pricing", href: paths.pricing },
    { name: "Careers", href: paths.careers },
    { name: "Contact", href: paths.contact },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className={cn(
                "absolute top-0 left-0 right-0 z-50 flex justify-center px-4 py-5",
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 transition-all duration-300 border-b",
                    isMobileMenuOpen
                        ? "bg-background/80 backdrop-blur-xl border-border opacity-100"
                        : "bg-transparent border-transparent opacity-0",
                )}
            />

            <div className="relative w-full max-w-[1500px] flex items-center justify-between gap-8">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center"
                >
                    <Logo />
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                    <AppleGlassNav items={NAV_LINKS} />
                </div>

                {/* Desktop CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:flex items-center gap-3"
                >
                    <Link
                        href={paths.book}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-border bg-transparent text-foreground font-bold text-sm hover:bg-muted/50 hover:border-foreground/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                    >
                        Book a call
                    </Link>
                    <Link
                        href={paths.getStarted}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gradient text-primary-foreground font-bold text-sm shadow-md hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Get Started</span>
                    </Link>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
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
                        id="mobile-menu"
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
                                className="mt-3 flex flex-col gap-3"
                            >
                                <Link
                                    href={paths.book}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-full border border-border bg-transparent text-foreground font-bold text-sm hover:bg-muted/50 hover:border-foreground/20 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
                                >
                                    Book a call
                                </Link>
                                <Link
                                    href={paths.getStarted}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-brand-gradient text-primary-foreground font-bold text-sm shadow-md hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 relative overflow-hidden group"
                                >
                                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10">Get Started</span>
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

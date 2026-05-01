"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavItem = {
    name: string;
    href: string;
};

interface NavProps {
    items: NavItem[];
    className?: string;
}

function isActiveHref(pathname: string, href: string) {
    if (!href || href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}

// ============================================================================
// 3. THE "APPLE" NAV (Glassmorphism / Dynamic Island)
// Style: Frosted Glass, Deep Blur, Pill Shape, Smooth Transitions.
// Used by: Apple, Framer, High-end Consumer Apps.
// ============================================================================
export const AppleGlassNav = ({ items, className }: NavProps) => {
    const pathname = usePathname();

    return (
        <nav className={cn("flex p-1.5 gap-2 bg-[#0F172A]/40 backdrop-blur-xl border border-[#1E293B] rounded-full shadow-lg ring-1 ring-[#020617]/50", className)}>
            {items.map((item) => {
                const active = isActiveHref(pathname, item.href);
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                            active ? "text-[#F1F5F9]" : "text-[#94A3B8] hover:text-[#F1F5F9]"
                        )}
                    >
                        {active && (
                            <motion.div
                                layoutId="glass-active"
                                className="absolute inset-0 bg-[#3B82F6] shadow-sm rounded-full backdrop-blur-md"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
};
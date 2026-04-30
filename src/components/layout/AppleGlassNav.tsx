"use client";
import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type NavItem = {
    name: string;
    href: string;
};

interface NavProps {
    items: NavItem[];
    className?: string;
    activeTab?: string; // Controlled state for demo, usually via router
}

// ============================================================================
// 3. THE "APPLE" NAV (Glassmorphism / Dynamic Island)
// Style: Frosted Glass, Deep Blur, Pill Shape, Smooth Transitions.
// Used by: Apple, Framer, High-end Consumer Apps.
// ============================================================================
export const AppleGlassNav = ({ items, className }: NavProps) => {
    const [active, setActive] = useState(items[0].name);

    return (
        <nav className={cn("flex p-1.5 gap-2 bg-[#0F172A]/40 backdrop-blur-xl border border-[#1E293B] rounded-full shadow-lg ring-1 ring-[#020617]/50", className)}>
            {items.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); setActive(item.name); }}
                    className={cn(
                        "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                        active === item.name ? "text-[#F1F5F9]" : "text-[#94A3B8] hover:text-[#F1F5F9]"
                    )}
                >
                    {active === item.name && (
                        <motion.div
                            layoutId="glass-active"
                            className="absolute inset-0 bg-[#3B82F6] shadow-sm rounded-full backdrop-blur-md"
                            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{item.name}</span>
                </a>
            ))}
        </nav>
    );
};
"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative border-t border-[rgba(255,255,255,0.05)] pt-16 pb-8 px-6" style={{ backgroundColor: "#050505" }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                        <span className="w-2 h-2 rounded-full bg-[var(--color-neon)]" />
                        THE INTENTIONAL FEW
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 font-mono">
                        Rebuild. Grow. Live.
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-[var(--color-neon)] transition-colors">Twitter</a>
                    <a href="#" className="hover:text-[var(--color-neon)] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[var(--color-neon)] transition-colors">YouTube</a>
                </div>

            </div>

            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[rgba(255,255,255,0.03)] flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-xs font-mono tracking-wider" suppressHydrationWarning>
                    © {new Date().getFullYear()} INTENTIONAL FEW
                </p>

                <p className="text-gray-600 text-xs font-mono tracking-wider flex items-center gap-2">
                    DESIGNED WITH INTENT
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                </p>
            </div>
        </footer>
    );
}

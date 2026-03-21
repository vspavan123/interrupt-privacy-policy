"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    // Animation variants for mask reveal (Nitro style)
    const revealContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const revealItem = {
        hidden: { y: "150%" },
        show: {
            y: "0%",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden" style={{ backgroundColor: "#050505" }}>
            {/* Top Header / Nav placeholder in Nitro style */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center"
            >
                <span className="text-white font-medium tracking-wide">.intentional</span>
                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#about" className="hover:text-white transition-colors">about</a>
                    <a href="#projects" className="hover:text-white transition-colors">vision</a>
                    <a href="#cta" className="text-[var(--color-neon)] hover:opacity-80 transition-opacity">join us</a>
                </div>
            </motion.nav>

            {/* Grid lines (Nitro aesthetic) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex justify-between px-[10%]">
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[1px] h-full bg-white" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-center gap-2 mb-12 sm:mb-16 border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2 w-max"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-neon)", boxShadow: "0 0 10px var(--color-neon)" }} />
                    <span className="text-xs uppercase tracking-widest text-gray-400">Building for the few</span>
                </motion.div>

                {/* Mask Reveal Typography */}
                <motion.h1
                    variants={revealContainer}
                    initial="hidden"
                    animate="show"
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-tight leading-[0.95]"
                    style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                    {/* Each line is masked */}
                    <div className="overflow-hidden pb-2">
                        <motion.div variants={revealItem} className="text-gray-400">Rebuilding</motion.div>
                    </div>
                    <div className="overflow-hidden pb-2">
                        <motion.div variants={revealItem} className="text-white">from the</motion.div>
                    </div>
                    <div className="overflow-hidden pb-4">
                        <motion.div variants={revealItem} className="text-white">inside out.</motion.div>
                    </div>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="max-w-xl mt-12 sm:mt-16"
                >
                    <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed">
                        Life happens to most people. The Intentional Few reconstruct the rest.
                        We focus on meaning, growth, and building something worth becoming.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

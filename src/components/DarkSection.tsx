"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Tilt Card Component (Nitro style)
function TiltCard({ title, subtitle, number }: { title: string; subtitle: string; number: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the tilt
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    // Rotate mapped to mouse position (-10 to 10 degrees)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Normalized coordinates (-0.5 to 0.5) from center
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative group cursor-pointer h-80 rounded-2xl p-6 flex flex-col justify-between"
        >
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-2xl border border-[rgba(255,255,255,0.05)] transition-colors group-hover:border-[rgba(255,255,255,0.15)] z-0" />

            {/* Subtle glow behind card on hover */}
            <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 z-0" />

            <div className="relative z-10 flex justify-between items-start" style={{ transform: "translateZ(30px)" }}>
                <span className="text-gray-600 font-mono text-xs">{number}</span>
                <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[var(--color-neon)] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-[var(--color-neon)] transition-colors">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>

            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-gray-400 text-sm">{subtitle}</p>
            </div>
        </motion.div>
    );
}

export default function DarkSection() {
    return (
        <section className="relative py-32 px-6" style={{ backgroundColor: "#050505" }}>
            {/* Grid structure lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex justify-between px-[10%]">
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[1px] h-full bg-white" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                            The process of<br />rebuilding.
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-xs text-sm">
                        It is rarely clean, rarely linear, but always necessary. Break down to build up.
                    </p>
                </motion.div>

                {/* 3-Column Grid of Tilt Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <TiltCard number="01" title="Embrace Chaos" subtitle="Let the old structures burn to make room for the new." />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TiltCard number="02" title="Find the Signal" subtitle="Filter out the noise and locate your true north." />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <TiltCard number="03" title="Build Intent" subtitle="Lay down the mental bricks of who you are becoming." />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

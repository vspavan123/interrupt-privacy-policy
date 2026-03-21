"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TransitionSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    // Nitro-style scroll reveal: scale from 0.8 to 1, opacity 0 to 1
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={ref} className="relative py-32 px-6" style={{ backgroundColor: "#050505" }}>
            <motion.div
                style={{ scale, opacity }}
                className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
            >
                {/* Subtle 1px glow border around the section wrapper */}
                <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-3xl pointer-events-none" />

                <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-md px-8 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
                    <p
                        className="text-xs uppercase tracking-[0.3em] mb-6"
                        style={{ color: "var(--color-neon)" }}
                    >
                        The Pivot
                    </p>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-8" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                        Life isn't a straight line.
                        <br />
                        <span className="text-gray-500">It asks you to become more.</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-xl font-light">
                        To choose the harder path. To step out of the comfort zone and build something truly worth becoming.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

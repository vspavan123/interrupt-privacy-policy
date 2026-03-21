"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";

const benefits = [
    { text: "Insights that actually make you think" },
    { text: "Productivity hacks for the real world" },
    { text: "Spirituality without the woo-woo" },
    { text: "Fun weekend activities worth trying" },
    { text: "A healthy dose of sarcasm" },
];

function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLButtonElement>(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Springs for smooth return and magnetic pull
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Calculate distance from center of button
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Magnetic pull strength (closer to center = stronger pull)
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Move button 20% of the distance toward the cursor
        x.set(distanceX * 0.2);
        y.set(distanceY * 0.2);
    };

    const handleMouseLeave = () => {
        // Snap back to center
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ x: mouseXSpring, y: mouseYSpring }}
            className="relative px-8 py-4 rounded-xl font-medium text-black text-sm uppercase tracking-widest overflow-hidden group cursor-pointer"
        >
            {/* Background layer */}
            <div className="absolute inset-0 bg-[var(--color-neon)] group-hover:bg-white transition-colors duration-300 z-0" />

            {/* Text layer */}
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}

export default function CTASection() {
    return (
        <section id="cta" className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[80vh]" style={{ backgroundColor: "#050505" }}>

            {/* Premium subtle glow mask */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[800px] h-[800px] bg-[var(--color-neon)] opacity-[0.02] blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start justify-between">

                {/* Left column: Text & Benefits */}
                <div className="w-full lg:w-1/2">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs tracking-[0.4em] uppercase mb-4"
                        style={{ color: "var(--color-neon)" }}
                    >
                        The Newsletter
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight"
                        style={{ fontFamily: "var(--font-display), sans-serif" }}
                    >
                        JOIN<br />THE INTENTIONAL<br />FEW
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-4"
                    >
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-4 text-gray-400 text-sm">
                                {/* Phosphor-style minimal checkmark SVG */}
                                <div className="w-5 h-5 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-neon)]">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span>{benefit.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right column: Form */}
                <div className="w-full lg:w-1/2 max-w-md pt-4 lg:pt-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)] backdrop-blur-xl relative"
                    >
                        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white opacity-[0.02]" />

                        <h3 className="text-xl font-medium text-white mb-2">Subscribe</h3>
                        <p className="text-sm text-gray-500 mb-8">Free forever. Unsubscribe anytime.</p>

                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-4 text-white text-sm outline-none transition-all placeholder:text-gray-600 focus:border-[var(--color-neon)] focus:bg-[rgba(255,255,255,0.05)]"
                                />
                            </div>

                            <div className="mt-4 flex justify-end">
                                <MagneticButton>
                                    Access Now
                                </MagneticButton>
                            </div>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

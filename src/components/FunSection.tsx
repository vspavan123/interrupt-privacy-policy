"use client";

import { motion } from "framer-motion";

const funActivities = [
    { title: "Chase sunrises, not deadlines", icon: "🌅" },
    { title: "Learn that instrument you keep talking about", icon: "🎸" },
    { title: "Take the scenic route, always", icon: "🏔️" },
    { title: "Create something just because", icon: "🎨" },
    { title: "Get lost on purpose — find yourself", icon: "🌊" },
    { title: "Say yes to random Friday plans", icon: "🍕" },
];

export default function FunSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <section className="relative py-32 px-6" style={{ backgroundColor: "#050505" }}>
            {/* Ambient background glow for transition */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--color-neon)] opacity-[0.015] blur-[150px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left side text */}
                <div className="w-full lg:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-12 h-[1px] bg-[var(--color-neon)] mb-8" />
                        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                            The purpose of
                            <br />
                            <span className="text-gray-500">the grind.</span>
                        </h2>
                        <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                            We thrive to improve, to build, to become stronger. But we never forget the reason why. It's not about making life harder—it's about making it deeply meaningful.
                            <br /><br />
                            Die with memories, not just dreams.
                        </p>
                    </motion.div>
                </div>

                {/* Right side staggered grid */}
                <div className="w-full lg:w-7/12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {funActivities.map((activity, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.04)" }}
                                className="p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.01)] backdrop-blur-sm transition-all flex items-start gap-4 cursor-default"
                            >
                                <div className="text-xl mt-0.5 opacity-80">{activity.icon}</div>
                                <p className="text-sm font-medium text-gray-300 tracking-wide leading-relaxed">
                                    {activity.title}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

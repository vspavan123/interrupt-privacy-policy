"use client";

export default function NarutoEyes() {
    return (
        <div className="relative flex items-center justify-center gap-8 md:gap-16">
            {/* Fire background glow */}
            <div
                className="absolute w-[400px] h-[300px] md:w-[600px] md:h-[400px] rounded-full animate-pulse-glow"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(232,100,26,0.15) 0%, rgba(204,41,54,0.08) 40%, transparent 70%)",
                }}
            />

            {/* Left eye */}
            <div className="relative animate-eye-glow">
                <Eye direction="left" />
            </div>

            {/* Right eye */}
            <div className="relative animate-eye-glow" style={{ animationDelay: "0.5s" }}>
                <Eye direction="right" />
            </div>
        </div>
    );
}

function Eye({ direction }: { direction: "left" | "right" }) {
    const mirrorX = direction === "right" ? -1 : 1;

    return (
        <div className="relative">
            {/* Outer fire ring */}
            <div
                className="absolute -inset-4 md:-inset-6 rounded-full animate-flame-dance"
                style={{
                    background:
                        "conic-gradient(from 0deg, rgba(232,100,26,0.4), rgba(204,41,54,0.3), rgba(255,140,66,0.4), rgba(232,100,26,0.3), rgba(204,41,54,0.4))",
                    filter: "blur(8px)",
                    animationDelay: direction === "right" ? "0.3s" : "0s",
                }}
            />

            {/* SVG Eye */}
            <svg
                width="100"
                height="60"
                viewBox="0 0 100 60"
                className="relative z-10 w-20 h-12 md:w-28 md:h-16"
                style={{ transform: `scaleX(${mirrorX})` }}
            >
                {/* Eye shape */}
                <defs>
                    <clipPath id={`eye-clip-${direction}`}>
                        <ellipse cx="50" cy="30" rx="42" ry="22" />
                    </clipPath>
                    <radialGradient id={`iris-gradient-${direction}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#cc2936" />
                        <stop offset="40%" stopColor="#991f28" />
                        <stop offset="70%" stopColor="#cc2936" />
                        <stop offset="100%" stopColor="#660f15" />
                    </radialGradient>
                    <radialGradient id={`pupil-gradient-${direction}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#1a0505" />
                        <stop offset="100%" stopColor="#0a0000" />
                    </radialGradient>
                </defs>

                {/* Eye white / sclera */}
                <ellipse
                    cx="50"
                    cy="30"
                    rx="42"
                    ry="22"
                    fill="#1a0808"
                    stroke="#cc2936"
                    strokeWidth="1.5"
                    opacity="0.9"
                />

                {/* Iris */}
                <circle
                    cx="50"
                    cy="30"
                    r="18"
                    fill={`url(#iris-gradient-${direction})`}
                    clipPath={`url(#eye-clip-${direction})`}
                />

                {/* Iris ring */}
                <circle
                    cx="50"
                    cy="30"
                    r="17"
                    fill="none"
                    stroke="#e8641a"
                    strokeWidth="1"
                    opacity="0.6"
                    clipPath={`url(#eye-clip-${direction})`}
                />

                {/* Sharingan tomoe (rotating) */}
                <g
                    className="animate-sharingan-spin"
                    style={{ transformOrigin: "50px 30px" }}
                    clipPath={`url(#eye-clip-${direction})`}
                >
                    {[0, 120, 240].map((angle) => (
                        <g key={angle} transform={`rotate(${angle} 50 30)`}>
                            <circle cx="50" cy="16" r="3" fill="#0a0000" />
                            <path
                                d="M 50 16 Q 56 22 50 30"
                                fill="none"
                                stroke="#0a0000"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </g>
                    ))}
                </g>

                {/* Pupil */}
                <circle
                    cx="50"
                    cy="30"
                    r="6"
                    fill={`url(#pupil-gradient-${direction})`}
                    clipPath={`url(#eye-clip-${direction})`}
                />

                {/* Light reflection */}
                <circle cx="44" cy="24" r="2.5" fill="rgba(255,255,255,0.3)" />
                <circle cx="56" cy="26" r="1.2" fill="rgba(255,255,255,0.15)" />

                {/* Top and bottom lids - subtle shading */}
                <ellipse cx="50" cy="8" rx="45" ry="12" fill="#111111" />
                <ellipse cx="50" cy="52" rx="45" ry="12" fill="#111111" />
            </svg>

            {/* Fire particles around each eye — precomputed positions */}
            <div className="absolute -inset-6 pointer-events-none">
                {[
                    { bg: "#e8641a", top: "15%", left: "95%" },
                    { bg: "#ff8c42", top: "49%", left: "89%" },
                    { bg: "#e8641a", top: "50%", left: "50%" },
                    { bg: "#ff8c42", top: "15%", left: "11%" },
                    { bg: "#e8641a", top: "-15%", left: "17%" },
                    { bg: "#ff8c42", top: "-19%", left: "50%" },
                ].map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full animate-fire-flicker"
                        style={{
                            background: p.bg,
                            top: p.top,
                            left: p.left,
                            animationDelay: `${i * 0.15}s`,
                            opacity: 0.7,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

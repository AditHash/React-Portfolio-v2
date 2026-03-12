import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   SpotlightCard
   Wraps any card content with a cursor-following radial glow.
   Usage: <SpotlightCard className="h-full">...</SpotlightCard>
───────────────────────────────────────────────────────── */
export const SpotlightCard = ({ children, className = "" }) => {
    const divRef = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative ${className}`}
        >
            {/* Spotlight overlay */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[inherit] z-10 transition-opacity duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary)/0.12), transparent 70%)`,
                }}
            />
            {children}
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   AnimatedCounter
   Counts up from 0 to `to` when the element scrolls into view.
   Usage: <AnimatedCounter to={7} suffix="+" />
───────────────────────────────────────────────────────── */
export const AnimatedCounter = ({ to, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    useEffect(() => {
        if (!isInView || !ref.current) return;
        const controls = animate(0, to, {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = Math.round(v) + suffix;
            },
        });
        return () => controls.stop();
    }, [isInView, to, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

/* ─────────────────────────────────────────────────────────
   WordReveal
   Animates each word with a blur + slide-up stagger.
   Usage: <WordReveal text="Featured Projects" className="..." />
───────────────────────────────────────────────────────── */
export const WordReveal = ({ text, className = "" }) => {
    const words = text.split(" ");
    return (
        <span className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                        delay: i * 0.09,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

/* ─────────────────────────────────────────────────────────
   FadeUp
   Simple reusable fade-up wrapper for any element.
   Usage: <FadeUp delay={0.2}><p>...</p></FadeUp>
───────────────────────────────────────────────────────── */
export const FadeUp = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

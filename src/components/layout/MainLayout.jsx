import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { CommandMenu } from "@/components/command-menu";
import DarkVeil from "@/components/ui/DarkVeil";
import { useTheme } from "@/components/theme-provider";

const MainLayout = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const location = useLocation();
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 dark:from-cyan-400 dark:to-teal-600 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Background layer */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {isDark ? (
                    <div className="absolute inset-0 opacity-60">
                        <DarkVeil speed={0.4} hueShift={0} noiseIntensity={0.02} warpAmount={0.1} />
                    </div>
                ) : (
                    <>
                        <div className="absolute -top-32 -left-32 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl" />
                        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
                        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-sky-500/6 rounded-full blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] opacity-50" />
                    </>
                )}
            </div>

            <Navbar />
            <main className="flex-1 pt-16 z-10 relative">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </main>
            <Footer />
            <CommandMenu />
        </div>
    );
};

export default MainLayout;

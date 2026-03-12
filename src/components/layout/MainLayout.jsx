import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from './Navbar';
import Footer from './Footer';
import { CommandMenu } from "@/components/command-menu";

const MainLayout = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 dark:from-red-500 dark:to-rose-600 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Background layer */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute -top-32 -left-32 w-72 h-72 bg-sky-400/10 dark:bg-red-600/8 rounded-full blur-3xl" />
                <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-500/8 dark:bg-rose-600/6 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-sky-500/6 dark:bg-red-700/5 rounded-full blur-3xl" />

                {/* Dot pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] opacity-50" />
            </div>

            <Navbar />
            <main className="flex-1 pt-16 z-10 relative">
                {children}
            </main>
            <Footer />
            <CommandMenu />
        </div>
    );
};

export default MainLayout;

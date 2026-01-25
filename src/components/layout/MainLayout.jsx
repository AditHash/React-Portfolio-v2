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
    restDelta: 0.001
  });

  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Dot Pattern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-50"></div>
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

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Gamepad2, Menu, X } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import INFO from "@/data/user";

const Navbar = () => {
    const location = useLocation();
    const active = location.pathname;
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];

    const socialIcons = {
        github: <Github className="h-4 w-4" />,
        linkedin: <Linkedin className="h-4 w-4" />,
        twitter: <Twitter className="h-4 w-4" />,
        instagram: <Instagram className="h-4 w-4" />,
        steam: <Gamepad2 className="h-4 w-4" />,
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container flex h-16 max-w-screen-xl mx-auto items-center justify-between px-4 md:px-8">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
                    <Avatar className="h-9 w-9 border-2 border-primary/20 ring-2 ring-primary/10 group-hover:ring-primary/40 transition-all duration-300">
                        <AvatarImage src="/logo.jpg" alt="Logo" />
                        <AvatarFallback className="text-xs font-bold bg-gradient-to-br from-sky-500 to-blue-600 dark:from-red-500 dark:to-rose-600 text-white">AD</AvatarFallback>
                    </Avatar>
                    <span className="hidden font-bold sm:inline-block text-foreground group-hover:text-primary transition-colors duration-200">
                        {INFO.main.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                                active === item.path
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                            )}
                        >
                            {item.label}
                            {active === item.path && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-1">
                    <ModeToggle />

                    <div className="hidden md:flex gap-0.5">
                        {Object.entries(INFO.socials).map(([key, url]) => {
                            if (!url) return null;
                            const Icon = socialIcons[key];
                            if (!Icon) return null;
                            return (
                                <Button key={key} variant="ghost" size="icon" className="h-8 w-8 hover:text-primary transition-colors" asChild>
                                    <a href={url} target="_blank" rel="noreferrer">
                                        {Icon}
                                        <span className="sr-only">{key}</span>
                                    </a>
                                </Button>
                            );
                        })}
                    </div>

                    {/* Mobile hamburger */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden h-9 w-9 hover:text-primary"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {mobileOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <X className="h-5 w-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <Menu className="h-5 w-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="container max-w-screen-xl mx-auto px-4 py-4 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                        "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200",
                                        active === item.path
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="flex items-center gap-1 pt-3 px-4 border-t border-border/40 mt-2">
                                {Object.entries(INFO.socials).map(([key, url]) => {
                                    if (!url) return null;
                                    const Icon = socialIcons[key];
                                    if (!Icon) return null;
                                    return (
                                        <Button key={key} variant="ghost" size="icon" className="h-9 w-9 hover:text-primary" asChild>
                                            <a href={url} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
                                                {Icon}
                                                <span className="sr-only">{key}</span>
                                            </a>
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

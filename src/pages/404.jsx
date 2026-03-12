import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

import INFO from "@/data/user";

const Notfound = () => {
    useEffect(() => {
        document.title = `404 | ${INFO.main.title}`;
    }, []);

    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-6"
                >
                    {/* Big 404 */}
                    <div className="text-[8rem] md:text-[12rem] font-black leading-none bg-gradient-to-r from-sky-500/25 to-blue-600/25 dark:from-red-500/25 dark:to-rose-500/25 bg-clip-text text-transparent select-none">
                        404
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Page Not Found</h1>
                        <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>

                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-600 dark:to-rose-600 hover:opacity-90 text-white border-0 shadow-lg shadow-primary/20 gap-3 transition-all duration-300"
                        asChild
                    >
                        <Link to="/">
                            <img
                                src="/back-button.png"
                                alt="Back"
                                className="h-5 w-5 object-contain invert"
                            />
                            Go Back Home
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </MainLayout>
    );
};

export default Notfound;

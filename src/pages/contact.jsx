import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowRight, Gamepad2 } from "lucide-react";

import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import { SpotlightCard } from "@/components/ui/animated";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "contact");

    const contactMethods = [
        {
            icon: <Mail className="h-5 w-5" />,
            title: "Email",
            description: "Drop me a line anytime",
            value: INFO.main.email,
            link: `mailto:${INFO.main.email}`,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            title: "LinkedIn",
            description: "Connect professionally",
            value: "Aditya Dey",
            link: INFO.socials.linkedin,
            color: "text-blue-600",
            bg: "bg-blue-600/10",
        },
        {
            icon: <Github className="h-5 w-5" />,
            title: "GitHub",
            description: "Check out my code",
            value: "AditHash",
            link: INFO.socials.github,
            color: "text-foreground",
            bg: "bg-foreground/8",
        },
        {
            icon: <img src="/twitter.png" alt="Twitter" className="h-5 w-5 object-contain dark:invert" />,
            title: "Twitter / X",
            description: "Follow my updates",
            value: "@AdityaDey...",
            link: INFO.socials.twitter,
            color: "text-sky-500",
            bg: "bg-sky-500/10",
        },
    ];

    return (
        <MainLayout>
            <SEOHead
                title={currentSEO.title}
                description={currentSEO.description}
                keywords={currentSEO.keywords}
                path="/contact"
            />

            <div className="container max-w-screen-lg mx-auto px-4 md:px-8 py-12 md:py-20 space-y-14">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <Badge
                        variant="outline"
                        className="px-4 py-1.5 text-sm gap-2 border-green-500/40 text-green-600 dark:text-green-400 bg-green-500/8"
                    >
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        Currently available
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-500 dark:to-rose-500 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi — I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <SpotlightCard className="rounded-xl h-full">
                            <a href={method.link} target="_blank" rel="noreferrer" className="block h-full">
                                <Card className="h-full hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer bg-card border-border/60">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-3">
                                        <div className={`p-3 rounded-2xl ${method.bg} ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                                            {method.icon}
                                        </div>
                                        <div>
                                            <CardTitle className="text-base font-semibold">{method.title}</CardTitle>
                                            <CardDescription className="text-sm">{method.description}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center text-primary font-medium text-sm group-hover:underline underline-offset-4">
                                            {method.value}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

                {/* Also active on */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center space-y-4"
                >
                    <p className="text-muted-foreground text-sm">Also active on</p>
                    <div className="flex justify-center gap-3">
                        <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all" asChild>
                            <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                                <Instagram className="h-5 w-5 text-pink-500" />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all" asChild>
                            <a href={INFO.socials.steam} target="_blank" rel="noreferrer">
                                <Gamepad2 className="h-5 w-5 text-indigo-500" />
                            </a>
                        </Button>
                    </div>
                </motion.div>

            </div>
        </MainLayout>
    );
};

export default Contact;

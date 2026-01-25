import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowRight, Gamepad2 } from 'lucide-react';

import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "contact");

    const contactMethods = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            description: "Drop me a line anytime",
            value: INFO.main.email,
            link: `mailto:${INFO.main.email}`,
            color: "text-blue-500",
        },
        {
            icon: <Linkedin className="h-6 w-6" />,
            title: "LinkedIn",
            description: "Connect professionally",
            value: "Aditya Dey",
            link: INFO.socials.linkedin,
            color: "text-blue-700",
        },
        {
            icon: <Github className="h-6 w-6" />,
            title: "GitHub",
            description: "Check out my code",
            value: "AditHash",
            link: INFO.socials.github,
            color: "text-gray-900 dark:text-gray-100",
        },
        {
            icon: <Twitter className="h-6 w-6" />,
            title: "Twitter",
            description: "Follow my updates",
            value: "@AdityaDey...",
            link: INFO.socials.twitter,
            color: "text-sky-500",
        },
    ];

    return (
        <MainLayout>
            <Helmet>
                <title>{`Contact | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="container max-w-screen-lg px-4 md:px-8 py-12 md:py-20 space-y-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <a href={method.link} target="_blank" rel="noreferrer" className="block h-full">
                                <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer bg-card/50">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                        <div className={`p-3 rounded-full bg-secondary group-hover:bg-background transition-colors ${method.color}`}>
                                            {method.icon}
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">{method.title}</CardTitle>
                                            <CardDescription>{method.description}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center text-primary font-medium group-hover:underline underline-offset-4">
                                            {method.value} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center pt-8"
                >
                     <p className="text-muted-foreground mb-6">Also active on other platforms</p>
                     <div className="flex justify-center gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                                <Instagram className="h-5 w-5 text-pink-600" />
                            </a>
                        </Button>
                         <Button variant="outline" size="icon" asChild>
                            <a href={INFO.socials.steam} target="_blank" rel="noreferrer">
                                <Gamepad2 className="h-5 w-5 text-indigo-600" />
                            </a>
                        </Button>
                     </div>
                </motion.div>
            </div>
        </MainLayout>
    );
};

export default Contact;
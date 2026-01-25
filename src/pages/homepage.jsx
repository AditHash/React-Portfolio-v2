import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Github, ExternalLink, Code2, Cpu, Wrench } from 'lucide-react';

import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "home");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Stagger effect for children
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <MainLayout>
            <Helmet>
                <title>{INFO.main.title}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="container max-w-screen-2xl px-4 md:px-8 py-12 space-y-24">
                
                {/* HERO SECTION */}
                <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 min-h-[60vh] justify-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col space-y-6 lg:w-3/5"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                                Hi, I’m Aditya Dey
                                <span className="text-primary block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 pb-2">
                                    Backend & Systems Developer
                                </span>
                            </h2>
                            <div className="text-xl md:text-2xl font-medium text-muted-foreground flex items-center gap-2">
                                <span className="text-foreground">
                                    <Typewriter
                                        options={{
                                            strings: INFO.hero.typewriterStrings,
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            deleteSpeed: 30,
                                        }}
                                    />
                                </span>
                            </div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                             {INFO.homepage.description}
                        </p>

                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-4 pt-4"
                        >
                            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <a href="mailto:adey9217@gmail.com">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> View GitHub
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="lg:w-2/5 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
                            <Avatar className="w-full h-full border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <AvatarImage src="homepage.jpg" alt="Aditya Dey" className="object-cover" />
                                <AvatarFallback className="text-6xl">AD</AvatarFallback>
                            </Avatar>
                        </div>
                    </motion.div>
                </section>

                <Separator />

                {/* ABOUT PREVIEW */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="flex flex-col items-center text-center space-y-4">
                        <Badge variant="outline" className="px-4 py-1">About Me</Badge>
                        <h2 className="text-3xl font-bold tracking-tight">Passionate about Systems & Logic</h2>
                        <p className="text-muted-foreground max-w-[800px] text-lg">
                            {INFO.about.description.split("\n\n")[0]}
                        </p>
                    </div>
                </motion.section>

                {/* SKILLS SECTION */}
                <section className="space-y-12">
                     <div className="flex flex-col items-center text-center space-y-4">
                        <Badge variant="secondary" className="px-4 py-1">Tech Stack</Badge>
                        <h2 className="text-3xl font-bold tracking-tight">Tools of the Trade</h2>
                    </div>
                    
                    <motion.div 
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, margin: "-100px" }}
                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {Object.entries(INFO.skills).map(([key, category], index) => (
                             <motion.div key={key} variants={itemVariants}>
                                <Card className="border-muted/50 bg-card/50 hover:border-primary/50 transition-colors h-full">
                                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            {category.icon}
                                        </div>
                                        <CardTitle className="text-lg">{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map(skill => (
                                                <Badge key={skill.name} variant="secondary" className="font-normal flex items-center gap-1.5 px-3 py-1 text-sm hover:scale-105 transition-transform cursor-default">
                                                    {skill.icon}
                                                    {skill.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                             </motion.div>
                        ))}
                    </motion.div>
                </section>

                <Separator />

                {/* PROJECTS SECTION */}
                <section className="space-y-12">
                     <div className="flex flex-col items-center text-center space-y-4">
                        <Badge variant="secondary" className="px-4 py-1">Portfolio</Badge>
                        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-[700px]">
                            A selection of projects that showcase my technical depth and problem-solving abilities.
                        </p>
                    </div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {INFO.projects.map((project, index) => (
                            <motion.div variants={itemVariants} key={index}>
                                <Card className="h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-muted/60 bg-card/50 group">
                                    <CardHeader>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                        <CardDescription className="text-base font-medium text-foreground/80">{project.tagline}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 space-y-4">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags && project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                {project.linkText}
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <Separator />

                 {/* PROCESS SECTION */}
                 <section className="space-y-12">
                     <div className="flex flex-col items-center text-center space-y-4">
                        <Badge variant="outline" className="px-4 py-1">Workflow</Badge>
                        <h2 className="text-3xl font-bold tracking-tight">How I Work</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {INFO.process.map((step, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="flex flex-col items-center text-center space-y-3 relative group"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* CTA SECTION */}
                <section className="py-12">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center space-y-6"
                    >
                        <h2 className="text-3xl font-bold">Want to work together?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            I’m open to backend, systems, and tooling work. Let’s build something great.
                        </p>
                        <div className="flex justify-center gap-4">
                             <Button size="lg" asChild className="hover:scale-105 transition-transform">
                                <a href="mailto:adey9217@gmail.com">Contact Me</a>
                            </Button>
                        </div>
                    </motion.div>
                </section>
            </div>
        </MainLayout>
    );
};

export default Homepage;

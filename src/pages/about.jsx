import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MainLayout from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "about");
    
    return (
        <MainLayout>
            <Helmet>
                <title>{`About | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="container max-w-screen-2xl px-4 md:px-8 py-12 space-y-16">
                
                {/* BIO SECTION */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            I’m <span className="text-primary">{INFO.main.name}</span>.
                            <br />
                            <span className="text-2xl md:text-3xl text-muted-foreground block mt-2">from Kolkata, India.</span>
                        </h1>
                        
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {INFO.about.description}
                        </div>

                        {INFO.socials.instagram && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-2"
                            >
                                <Button variant="link" className="p-0 h-auto text-lg text-primary hover:text-primary/80" asChild>
                                    <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                                        Follow my photography on Instagram →
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div 
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.5, delay: 0.2 }}
                         className="relative"
                    >
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
                             <Carousel
                                showArrows={true}
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                                interval={3000}
                                className="w-full"
                            >
                                <div className="h-[400px] lg:h-[500px]">
                                     <img src="about1.jpg" alt="about1" className="object-cover h-full w-full" />
                                </div>
                                <div className="h-[400px] lg:h-[500px]">
                                     <img src="homepage.jpg" alt="homepage" className="object-cover h-full w-full" />
                                </div>
                                <div className="h-[400px] lg:h-[500px]">
                                     <img src="about2.jpg" alt="about2" className="object-cover h-full w-full" />
                                </div>
                                <div className="h-[400px] lg:h-[500px]">
                                     <img src="about3.jpg" alt="about3" className="object-cover h-full w-full" />
                                </div>
                            </Carousel>
                        </div>
                    </motion.div>
                </section>

                <Separator />

                {/* EXPERIENCE SECTION */}
                <section className="space-y-8">
                     <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                     <div className="relative border-l border-border ml-4 space-y-12">
                        {INFO.experience.map((exp, index) => (
                            <div key={index} className="ml-8 relative">
                                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-background border-2 border-primary ring-4 ring-background" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <Badge variant="outline">{exp.period}</Badge>
                                </div>
                                <h4 className="text-lg text-primary font-medium mb-3">{exp.company}</h4>
                                <p className="text-muted-foreground max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* SKILLS OVERVIEW */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight">Technical Proficiency</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.values(INFO.skills).map((cat, index) => (
                            <Card key={index} className="bg-muted/30">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        {cat.icon} {cat.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.items.map(item => (
                                            <Badge key={item.name} variant="secondary" className="bg-background hover:bg-background/80 flex items-center gap-1.5 px-3 py-1">
                                                {item.icon}
                                                {item.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default About;
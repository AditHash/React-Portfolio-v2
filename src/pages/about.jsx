import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MapPin, Briefcase, Code2, Camera, Download } from "lucide-react";

import MainLayout from "@/components/layout/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import SEOHead from "@/components/seo-head";
import { SpotlightCard, AnimatedCounter } from "@/components/ui/animated";

import INFO from "@/data/user";
import SEO from "@/data/seo";

const carouselImages = [
    { src: "image1.jpg",  alt: "Photo 1" },
    { src: "image2.jpg",  alt: "Photo 2" },
    { src: "image3.png",  alt: "Photo 3" },
    { src: "image4.png",  alt: "Photo 4" },
    { src: "image5.png",  alt: "Photo 5" },
    { src: "image6.png",  alt: "Photo 6" },
    { src: "image7.png",  alt: "Photo 7" },
    { src: "image8.png",  alt: "Photo 8" },
];

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "about");

    const stats = [
        { icon: <Briefcase className="h-5 w-5" />, to: 2,  suffix: "+", label: "Yrs Experience" },
        { icon: <Code2     className="h-5 w-5" />, to: 20, suffix: "+", label: "Projects Built"  },
        { icon: <MapPin    className="h-5 w-5" />, to: null, static: "KOL", label: "Kolkata, India"  },
    ];

    return (
        <MainLayout>
            <SEOHead
                title={currentSEO.title}
                description={currentSEO.description}
                keywords={currentSEO.keywords}
                path="/about"
            />

            <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-12 space-y-20">

                {/* ── BIO ─────────────────────────────────────────── */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="space-y-3">
                            <Badge variant="outline" className="px-4 py-1 border-primary/40 text-primary">About Me</Badge>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                                I'm{" "}
                                <span className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-500 dark:to-rose-500 bg-clip-text text-transparent">
                                    {INFO.main.name}
                                </span>
                                <span className="text-muted-foreground text-2xl md:text-3xl font-medium block mt-2">
                                    from Kolkata, India.
                                </span>
                            </h1>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div className="text-primary mb-1.5 group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-black bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-500 dark:to-rose-500 bg-clip-text text-transparent">
                                        {stat.to !== null
                                            ? <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                                            : stat.static}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Bio paragraphs */}
                        <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                            {INFO.about.description.split("\n\n").map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Button
                                className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-600 dark:to-rose-600 hover:opacity-90 text-white border-0 shadow-lg shadow-primary/20 gap-2 transition-all duration-300"
                                asChild
                            >
                                <a href={INFO.main.cv} target="_blank" rel="noreferrer">
                                    <Download className="h-4 w-4" /> Download CV
                                </a>
                            </Button>
                            {INFO.socials.instagram && (
                                <Button variant="outline" className="gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" asChild>
                                    <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                                        <Camera className="h-4 w-4" /> Photography →
                                    </a>
                                </Button>
                            )}
                        </div>
                    </motion.div>

                    {/* Photo carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/60 ring-1 ring-primary/10 bg-muted/30">
                            <Carousel
                                showArrows
                                autoPlay
                                infiniteLoop
                                showThumbs={false}
                                showStatus={false}
                                interval={3500}
                                transitionTime={600}
                            >
                                {carouselImages.map((img, i) => (
                                    <div key={i} className="flex items-center justify-center p-2 bg-muted/20">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-auto max-h-[600px] object-contain"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </motion.div>
                </section>

                <Separator className="opacity-40" />

                {/* ── EXPERIENCE ──────────────────────────────────── */}
                <section className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/40 text-primary">Experience</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work History</h2>
                    </motion.div>

                    <div className="relative ml-4 space-y-8">
                        {/* Animated vertical line */}
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 origin-top"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                        {INFO.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="ml-8 relative"
                            >
                                {/* Timeline dot */}
                                <span className="absolute -left-[41px] top-5 h-4 w-4 rounded-full bg-primary/20 border-2 border-primary ring-4 ring-background" />

                                <Card className="border-border/60 bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                            <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                                            <Badge variant="secondary" className="w-fit text-xs shrink-0">{exp.period}</Badge>
                                        </div>
                                        <p className="text-primary font-semibold text-base">{exp.company}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Separator className="opacity-40" />

                {/* ── SKILLS ──────────────────────────────────────── */}
                <section className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/40 text-primary">Skills</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Proficiency</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {Object.values(INFO.skills).map((cat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <SpotlightCard className="rounded-xl h-full">
                                <Card className="bg-card border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 h-full group">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
                                            <span className="group-hover:scale-110 transition-transform duration-300">
                                                {cat.icon}
                                            </span>
                                            {cat.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items.map((item) => (
                                                <Badge
                                                    key={item.name}
                                                    variant="secondary"
                                                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                                >
                                                    {item.icon}
                                                    {item.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </MainLayout>
    );
};

export default About;

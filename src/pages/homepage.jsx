import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Github, Download, Briefcase, ExternalLink, ChevronDown } from "lucide-react";

import MainLayout from "@/components/layout/MainLayout";
import {
    Card, CardContent, CardFooter, CardHeader,
    CardTitle, CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SEOHead from "@/components/seo-head";
import { SpotlightCard, AnimatedCounter, WordReveal } from "@/components/ui/animated";

import INFO from "@/data/user";
import SEO from "@/data/seo";

/* Gradient palette — one per project (loops if > 7) */
const cardGradients = [
    "from-red-500 via-orange-500 to-amber-500",
    "from-purple-600 via-violet-500 to-indigo-600",
    "from-sky-500 via-blue-500 to-blue-700",
    "from-emerald-500 via-teal-500 to-cyan-600",
    "from-orange-500 via-amber-500 to-yellow-500",
    "from-fuchsia-500 via-pink-500 to-rose-500",
    "from-green-500 via-emerald-500 to-teal-600",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } },
};

const heroImages = [
    "image1.jpg", "image2.jpg", "image3.png", "image4.png",
    "image5.png", "image6.png", "image7.png", "image8.png",
];

const Homepage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const currentSEO = SEO.find((item) => item.page === "home");
    const [featuredProject, ...restProjects] = INFO.projects;
    const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];

    return (
        <MainLayout>
            <SEOHead
                title={currentSEO.title}
                description={currentSEO.description}
                keywords={currentSEO.keywords}
                path="/"
            />

            <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-12 space-y-28">

                {/* ── HERO ─────────────────────────────────────────── */}
                <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[80vh]">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col space-y-6 lg:w-3/5"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                        >
                            <Badge
                                variant="outline"
                                className="px-4 py-1.5 text-sm w-fit gap-2 border-green-500/40 text-green-600 dark:text-green-400 bg-green-500/8 dark:bg-green-500/10"
                            >
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                Available for opportunities
                            </Badge>
                        </motion.div>

                        <div className="space-y-3">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                                Hi, I'm{" "}
                                <span className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-500 dark:to-rose-500 bg-clip-text text-transparent">
                                    Aditya Dey
                                </span>
                            </h1>
                            <div className="text-xl md:text-2xl font-medium text-muted-foreground min-h-[2rem]">
                                <Typewriter
                                    options={{
                                        strings: INFO.hero.typewriterStrings,
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        deleteSpeed: 30,
                                    }}
                                />
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                            {INFO.homepage.description.split("\n\n")[0]}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-6 md:gap-8 pt-1">
                            {[
                                { to: 2,  suffix: "+", label: "Yrs Experience" },
                                { to: 20, suffix: "+", label: "Projects Built"  },
                                { to: 5,  suffix: "",  label: "Tech Areas"      },
                            ].map((stat, i) => (
                                <React.Fragment key={stat.label}>
                                    {i > 0 && <div className="h-8 w-px bg-border" />}
                                    <div>
                                        <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-500 dark:to-rose-500 bg-clip-text text-transparent">
                                            <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-3 pt-1"
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-600 dark:to-rose-600 hover:opacity-90 text-white border-0 shadow-lg shadow-primary/20 gap-2 transition-all duration-300"
                                asChild
                            >
                                <a href={`mailto:${INFO.main.email}`}>
                                    Get in Touch <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                asChild
                            >
                                <a href={INFO.main.cv} target="_blank" rel="noreferrer">
                                    <Download className="h-4 w-4" /> Download CV
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                className="gap-2 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                                asChild
                            >
                                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                                    <Github className="h-4 w-4" /> GitHub
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-2/5 flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
                        >
                            <motion.div
                                animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-8 bg-gradient-to-tr from-sky-400 to-blue-600 dark:from-red-500 dark:to-rose-600 rounded-3xl blur-3xl"
                            />
                            <div className="absolute -inset-[3px] bg-gradient-to-tr from-sky-400 to-blue-600 dark:from-red-500 dark:to-rose-600 rounded-3xl opacity-70 blur-[2px]" />
                            <Avatar className="w-full h-full rounded-3xl relative z-10 border border-white/10">
                                <AvatarImage src={randomImage} alt="Aditya Dey" className="object-cover" />
                                <AvatarFallback className="text-6xl rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 dark:from-red-600 dark:to-rose-600 text-white font-black">
                                    AD
                                </AvatarFallback>
                            </Avatar>
                        </motion.div>
                    </motion.div>
                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-muted-foreground/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                            <ChevronDown className="h-5 w-5" />
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── SKILLS ───────────────────────────────────────── */}
                <section className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3 text-center"
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/40 text-primary">Tech Stack</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            <WordReveal text="Tools of the Trade" />
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Technologies I use to build fast, reliable, and scalable systems.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {Object.entries(INFO.skills).map(([key, category]) => (
                            <motion.div key={key} variants={itemVariants}>
                                <SpotlightCard className="rounded-xl h-full">
                                <Card className="h-full border-border/60 bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                                    <CardHeader className="flex flex-row items-center gap-3 pb-3">
                                        <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                                            {category.icon}
                                        </div>
                                        <CardTitle className="text-base font-semibold">{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((skill) => (
                                                <Badge
                                                    key={skill.name}
                                                    variant="secondary"
                                                    className="font-normal flex items-center gap-1.5 px-2.5 py-1 text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                                >
                                                    {skill.icon}
                                                    {skill.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <Separator className="opacity-40" />

                {/* ── PROJECTS ─────────────────────────────────────── */}
                <section className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3 text-center"
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/40 text-primary">Portfolio</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            <WordReveal text="Featured Projects" />
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Production-grade systems spanning event-driven backends, cloud tooling, and voice AI.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {/* ── Featured project (full width) ── */}
                        <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3">
                            <Card className="overflow-hidden border-border/60 bg-card hover:shadow-2xl hover:shadow-primary/8 transition-all duration-300 group">
                                <div className="grid grid-cols-1 lg:grid-cols-5">
                                    {/* Banner */}
                                    <div className={`lg:col-span-2 bg-gradient-to-br ${cardGradients[0]} relative overflow-hidden min-h-[180px] lg:min-h-[280px]`}>
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.18),transparent_70%)]" />
                                        {/* Big initial letter */}
                                        <div className="absolute bottom-4 left-6 text-9xl font-black text-white/15 select-none leading-none">
                                            {featuredProject.title.charAt(0)}
                                        </div>
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm w-fit gap-1.5">
                                                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                                Featured
                                            </Badge>
                                            {featuredProject.type === "personal" ? (
                                                <Badge className="bg-black/25 text-white border-white/15 backdrop-blur-sm w-fit">Personal</Badge>
                                            ) : (
                                                <Badge className="bg-black/25 text-white border-white/15 backdrop-blur-sm w-fit gap-1">
                                                    <Briefcase className="h-3 w-3" /> Work
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-between gap-5">
                                        <div className="space-y-3">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-200">
                                                    {featuredProject.title}
                                                </h3>
                                                <p className="text-base text-muted-foreground font-medium mt-1">
                                                    {featuredProject.tagline}
                                                </p>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {featuredProject.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {featuredProject.tags?.map((tag) => (
                                                    <Badge key={tag} variant="outline" className="text-xs border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="w-fit gap-2 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                                            asChild
                                        >
                                            <a href={featuredProject.link} target="_blank" rel="noreferrer">
                                                <Github className="h-4 w-4" />
                                                {featuredProject.linkText}
                                                <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-60" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* ── Remaining projects ── */}
                        {restProjects.map((project, index) => (
                            <motion.div variants={itemVariants} key={index}>
                                <SpotlightCard className="rounded-xl h-full">
                                <Card className="h-full flex flex-col overflow-hidden border-border/60 bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300 group">

                                    {/* Gradient banner */}
                                    <div className={`h-32 bg-gradient-to-br ${cardGradients[(index + 1) % cardGradients.length]} relative overflow-hidden shrink-0`}>
                                        <div className="absolute inset-0 bg-black/15" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(255,255,255,0.15),transparent_65%)]" />
                                        <div className="absolute bottom-2 left-3 text-6xl font-black text-white/15 select-none leading-none">
                                            {project.title.charAt(0)}
                                        </div>
                                        <div className="absolute top-2.5 right-2.5 flex gap-1.5">
                                            <Badge className="bg-black/25 text-white border-white/15 text-xs backdrop-blur-sm">
                                                {project.tags?.[0] ?? "Project"}
                                            </Badge>
                                            {project.type === "work" && (
                                                <Badge className="bg-black/25 text-white border-white/15 text-xs backdrop-blur-sm gap-1">
                                                    <Briefcase className="h-2.5 w-2.5" /> Work
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-xs font-medium text-foreground/65">
                                            {project.tagline}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex-1 space-y-3">
                                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags?.slice(0, 4).map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5 border-border/60">
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {(project.tags?.length ?? 0) > 4 && (
                                                <Badge variant="outline" className="text-xs px-2 py-0.5 border-border/60 text-muted-foreground">
                                                    +{project.tags.length - 4}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="pt-0">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full justify-between text-muted-foreground hover:text-primary group/btn transition-colors"
                                            asChild
                                        >
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                {project.linkText}
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Work projects note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-sm text-muted-foreground">
                            Work projects are also available on{" "}
                            <a
                                href="https://github.com/AdityaWorkmates"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline underline-offset-4 font-medium"
                            >
                                AdityaWorkmates
                            </a>
                        </p>
                    </motion.div>
                </section>

                <Separator className="opacity-40" />

                {/* ── PROCESS ──────────────────────────────────────── */}
                <section className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3 text-center"
                    >
                        <Badge variant="outline" className="px-4 py-1 border-primary/40 text-primary">Workflow</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            <WordReveal text="How I Work" />
                        </h2>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute top-6 left-0 right-0 hidden lg:flex items-center justify-center pointer-events-none">
                            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {INFO.process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.12 }}
                                    className="flex flex-col items-center text-center space-y-4 group"
                                >
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center text-lg font-black text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/10">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────────── */}
                <section className="pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/8 via-blue-500/6 to-sky-400/8 dark:from-red-500/8 dark:via-rose-500/6 dark:to-red-400/8 border border-primary/20 p-8 md:p-16 text-center space-y-6"
                    >
                        <div className="absolute -top-20 -right-20 w-56 h-56 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative space-y-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                Open to Work
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-black">Let's Build Something Great</h2>
                            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                                I'm open to backend, cloud, and AI/ML engineering roles. Have a project in mind? Let's talk.
                            </p>
                        </div>

                        <div className="relative flex flex-wrap justify-center gap-3">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-red-600 dark:to-rose-600 hover:opacity-90 text-white border-0 shadow-lg shadow-primary/20 gap-2 transition-all duration-300"
                                asChild
                            >
                                <a href={`mailto:${INFO.main.email}`}>
                                    Get in Touch <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                asChild
                            >
                                <a href={INFO.main.cv} target="_blank" rel="noreferrer">
                                    <Download className="h-4 w-4" /> Download CV
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </section>

            </div>
        </MainLayout>
    );
};

export default Homepage;

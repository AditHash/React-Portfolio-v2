import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import INFO from "@/data/user";

const Footer = () => {
    return (
        <footer className="border-t border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left: built-by + social brand logos */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                        Built by{" "}
                        <a
                            href={INFO.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4"
                        >
                            {INFO.main.name}
                        </a>
                        {" "}— source on{" "}
                        <a
                            href={INFO.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>

                    {/* Social brand logo strip */}
                    <div className="flex items-center gap-2">
                        {INFO.socials.twitter && (
                            <a
                                href={INFO.socials.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="opacity-40 hover:opacity-80 transition-opacity"
                                title="Twitter / X"
                            >
                                <img src="/twitter.png" alt="Twitter" className="h-4 w-4 object-contain dark:invert" />
                            </a>
                        )}
                        <span
                            className="opacity-20"
                            title="Not active on Facebook"
                        >
                            <img src="/facebook.png" alt="Facebook" className="h-4 w-4 object-contain" />
                        </span>
                    </div>
                </div>

                {/* Right: CV download + copyright */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-muted-foreground hover:text-primary text-xs"
                        asChild
                    >
                        <a href={INFO.main.cv} target="_blank" rel="noreferrer">
                            <Download className="h-3.5 w-3.5" /> Resume
                        </a>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {INFO.main.name}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

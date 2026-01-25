import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Gamepad2 } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import INFO from "@/data/user";

const Navbar = () => {
  const location = useLocation();
  const active = location.pathname;

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center space-x-2">
                <Avatar className="h-8 w-8 border border-border">
                    <AvatarImage src="/logo.jpg" alt="Logo" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className="hidden font-bold sm:inline-block">
                    {INFO.main.name}
                </span>
            </Link>
        </div>

        <div className="flex items-center justify-center gap-6">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        active === item.path ? "text-foreground" : "text-muted-foreground"
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </div>

        <div className="flex items-center gap-2">
            <ModeToggle />
            <div className="hidden md:flex gap-1">
                {Object.entries(INFO.socials).map(([key, url]) => {
                     if (!url) return null;
                     const Icon = socialIcons[key];
                     if (!Icon) return null;

                     return (
                        <Button key={key} variant="ghost" size="icon" asChild>
                            <a href={url} target="_blank" rel="noreferrer">
                                {Icon}
                                <span className="sr-only">{key}</span>
                            </a>
                        </Button>
                     )
                })}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";
import INFO from "@/data/user";

const Footer = () => {
	return (
		<footer className="py-6 md:px-8 md:py-0 border-t border-border/40 bg-background">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-2xl">
				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					Built by{" "}
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						{INFO.main.name}
					</a>
					. The source code is available on{" "}
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						GitHub
					</a>
					.
				</p>
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} {INFO.main.name}. All rights reserved.
                </p>
			</div>
		</footer>
	);
};

export default Footer;

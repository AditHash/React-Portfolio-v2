import React, { useEffect } from "react";
import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

import INFO from "@/data/user";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<MainLayout>
			<div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
				<Frown className="h-24 w-24 text-muted-foreground" />
				<h1 className="text-4xl font-bold tracking-tight">Oops! Page Not Found</h1>
				<p className="text-lg text-muted-foreground max-w-md">
					We can't seem to find the page you're looking for.
					<br />
					The requested URL was not found on this server.
				</p>
				<Button asChild size="lg">
					<Link to="/">Go back home</Link>
				</Button>
			</div>
		</MainLayout>
	);
};

export default Notfound;
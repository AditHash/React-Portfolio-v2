import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="flex justify-center items-center">
				<nav className="fixed top-6 z-50 flex justify-center items-center w-full">
					<div className="w-[380px] h-10 bg-white shadow-md rounded-full flex items-center px-4">
						<ul className="flex justify-between items-center w-full list-none m-0 p-0 px-2">
							<li
								className={cn(
									"text-sm font-bold text-brand-primary hover:text-brand-link transition-colors duration-300",
									active === "home" && "text-brand-link"
								)}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={cn(
									"text-sm font-bold text-brand-primary hover:text-brand-link transition-colors duration-300",
									active === "about" && "text-brand-link"
								)}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={cn(
									"text-sm font-bold text-brand-primary hover:text-brand-link transition-colors duration-300",
									active === "contact" && "text-brand-link"
								)}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;

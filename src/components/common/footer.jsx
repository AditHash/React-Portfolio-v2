import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="bg-background pt-10 pb-5">
				<div className="flex flex-col items-center justify-center">
					<ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0">
						<li className="text-sm text-gray-600 hover:text-brand-link transition-colors duration-300 font-bold uppercase">
							<Link to="/">Home</Link>
						</li>
						<li className="text-sm text-gray-600 hover:text-brand-link transition-colors duration-300 font-bold uppercase">
							<Link to="/about">About</Link>
						</li>
						
						<li className="text-sm text-gray-600 hover:text-brand-link transition-colors duration-300 font-bold uppercase">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="mt-4 flex justify-center">
					<div className="text-xs text-gray-400">
                        {/* Footer credits text if any */}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

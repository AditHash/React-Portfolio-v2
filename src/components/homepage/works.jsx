import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Cloud Engineer</div>
							<div className="work-subtitle">
								Workmates Core2Cloud &middot; Full-time
							</div>
							<div className="work-duration">
								Dec 2023 - Present &middot; 1 yr 6 mos
							</div>
							
						</div>

						<div className="work">
							<div className="work-title">Machine Learning Intern</div>
							<div className="work-subtitle">
								Prodigy InfoTech &middot; Internship
							</div>
							<div className="work-duration">
								Sep 2023 - Oct 2023 &middot; 2 mos
							</div>
							
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

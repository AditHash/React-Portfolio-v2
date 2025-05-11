import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const skillsData = [
	{ name: "React.js", icon: "FaReact", color: "#61DBFB", category: "frontend" },
	{ name: "Bootstrap", icon: "FaBootstrap", color: "#7952B3", category: "frontend" },
	{ name: "HTML", icon: "FaHtml5", color: "#E34F26", category: "frontend" },
	{ name: "CSS", icon: "FaCss3Alt", color: "#264DE4", category: "frontend" },
	{ name: "Node.js", icon: "FaNodeJs", color: "#68A063", category: "backend" },
	{ name: "Nest.js", icon: "SiNestjs", color: "#E0234E", category: "backend" },
	{ name: "Python", icon: "FaPython", color: "#3776AB", category: "languages" },
	{ name: "C++", icon: "SiCplusplus", color: "#00599C", category: "languages" },
	{ name: "MySQL", icon: "SiMysql", color: "#4479A1", category: "databases" },
	{ name: "PostgreSQL", icon: "SiPostgresql", color: "#336791", category: "databases" },
	{ name: "MongoDB", icon: "SiMongodb", color: "#47A248", category: "databases" },
	{ name: "Redis", icon: "SiRedis", color: "#DC382D", category: "databases" },
	{ name: "AWS", icon: "FaAws", color: "#FF9900", category: "devops" },
	{ name: "Docker", icon: "FaDocker", color: "#2496ED", category: "devops" },
	{ name: "Docker Compose", icon: "FaDocker", color: "#2496ED", category: "devops" },
	{ name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00", category: "ai-ml" },
	{ name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C", category: "ai-ml" },
	{ name: "Keras", icon: "SiKeras", color: "#D00000", category: "ai-ml" },
	{ name: "Scikit-Learn", icon: "SiScikitlearn", color: "#F7931E", category: "ai-ml" },
	{ name: "OpenCV", icon: "SiOpencv", color: "#5C3EE8", category: "ai-ml" },
	{ name: "Pandas", icon: "SiPandas", color: "#150458", category: "ai-ml" },
	{ name: "NumPy", icon: "SiNumpy", color: "#013243", category: "ai-ml" },
	{ name: "LangChain", icon: "SiLangchain", color: "#2B6CB0", category: "ai-ml" },
	{ name: "Flask", icon: "SiFlask", color: "#000000", category: "backend" },
	{ name: "FastAPI", icon: "SiFastapi", color: "#009688", category: "backend" },
	{ name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E", category: "languages" },
	{ name: "TypeScript", icon: "SiTypescript", color: "#3178C6", category: "languages" },
	{ name: "Git", icon: "FaGit", color: "#F05032", category: "devops" },
	{ name: "GitHub", icon: "FaGithub", color: "#181717", category: "devops" },
	{ name: "Jupyter", icon: "SiJupyter", color: "#F37626", category: "ai-ml" },
	{ name: "Linux", icon: "FaLinux", color: "#FCC624", category: "devops" },
	{ name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5", category: "devops" },
	{ name: "Jenkins", icon: "SiJenkins", color: "#D24939", category: "devops" },
	{ name: "Apache Airflow", icon: "SiApacheairflow", color: "#017CEE", category: "ai-ml" },
	{ name: "MLflow", icon: "SiMlflow", color: "#0194E2", category: "ai-ml" },

];

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredSkills = selectedCategory === "all"
		? skillsData
		: skillsData.filter(skill => skill.category === selectedCategory);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									<span className="text-black">I’m </span>
									<span className="name-highlight">Aditya Dey</span>
									<span className="text-black">. I am from </span>
									<span className="location-highlight">Kolkata, India</span>
									<span className="text-black">.</span>
								</div>

								{/* Paragraph for description */}
								<div className="subtitle about-subtitle">
									<p>
										I am a backend developer primarily working with <span style={{ color: "green" }}>Python</span> and <span style={{ color: "green" }}>Node.js</span>, with a strong focus on building scalable, efficient, and maintainable systems. Over the years, I’ve gained hands-on experience in designing RESTful APIs, managing databases, and integrating cloud services to support dynamic, data-driven applications.
									</p>
									<p>
										My deep interest in Artificial Intelligence and <span style={{ color: "green" }}>Machine Learning</span> has led me to work on diverse projects involving supervised and unsupervised learning, deep neural networks, natural language processing, and most recently, <span style={{ color: "green" }}>Generative AI</span>. I enjoy exploring the intersection of backend development and intelligent systems—where automation meets creativity and problem-solving becomes both technical and strategic.
									</p>
									<p>
										Outside of coding, I'm deeply into photography. Feel free to check out my Instagram or browse through my personal gallery to see the world through my lens.
									</p>
									<p>
										When I'm not working or creating, you can probably find me grinding headshots in <span style={{ color: "green" }}>BGMI</span> or <span style={{ color: "green" }}>CODM</span>, raiding bases in <span style={{ color: "green" }}>Clash of Clans</span>, doing missions in <span style={{ color: "green" }}>GTA</span>, busting demons in <span style={{ color: "green" }}>DOOM</span>, leaping off towers in <span style={{ color: "green" }}>Assassin’s Creed</span>, running and gunning in <span style={{ color: "green" }}>Call of Duty</span>, or EV training in <span style={{ color: "green" }}>Pokémon</span>.
									</p>
									<p>
										I Love listening to phonk music and watching anime. I am a big fan of <span style={{ color: "green" }}>Attack on Titan</span> and <span style={{ color: "green" }}>Vinland Saga</span>.
									</p>
								</div>

								{/* Add spacing between About and Experience */}
								<div style={{ marginTop: "40px" }}></div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<Carousel
											showArrows={true}
											autoPlay={true}
											infiniteLoop={true}
											showThumbs={false}
											showStatus={false}
											interval={3000} // Set auto-scroll interval to 3 seconds
										>
											<img src="about1.jpg" alt="about1" className="about-image" />
											<img src="homepage.jpg" alt="about3" className="about-image" />
											<img src="about2.jpg" alt="about2" className="about-image" />
											<img src="about3.jpg" alt="about3" className="about-image" />
										</Carousel>
									</div>
								</div>
							</div>
						</div>

						{/* Paragraph for Experience section */}
						<div className="experience-container">
							<div className="title experience-title">
								Experience
							</div>
							<div className="experience-list" style={{ textAlign: "left" }}>
								{INFO.experience.map((exp, index) => (
									<div key={index} className="experience-item">
										<div className="experience-header">
											<div className="experience-role">
												<strong>{exp.role}</strong>
											</div>
											<div className="experience-period">
												<small>{exp.period}</small>
											</div>
										</div>
										<div className="experience-company">
											<em>{exp.company}</em>
										</div>
										<div className="experience-description">
											{exp.description}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Add spacing between Experience and Skills */}
						<div style={{ marginTop: "40px" }}></div>

						 {/* Paragraph for Skills section */}
						<div className="skills-section">
							<div className="title skills-title">
								Skills
							</div>

							{/* Beautified Classification Header */}
							<div className="skills-filter">
								{["all", "frontend", "backend", "databases", "devops", "ai-ml", "languages"].map((category) => (
									<button
										key={category}
										className={`filter-button ${selectedCategory === category ? "active" : ""}`}
										onClick={() => setSelectedCategory(category)}
									>
										{category.charAt(0).toUpperCase() + category.slice(1)}
									</button>
								))}
							</div>

							<div className="skills-grid">
								{filteredSkills.map((skill, index) => {
									const IconComponent =
										FaIcons[skill.icon] || SiIcons[skill.icon];
									return (
										<div
											key={index}
											className="skill-card"
											style={{ borderColor: skill.color }}
										>
											<div
												className="skill-icon"
												style={{ color: skill.color }}
											>
												{IconComponent && <IconComponent />}
											</div>
											<div className="skill-name">{skill.name}</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

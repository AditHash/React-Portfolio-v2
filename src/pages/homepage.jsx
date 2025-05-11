import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faInstagram,
	faSteam,
} from "@fortawesome/free-brands-svg-icons";

import Typewriter from "typewriter-effect";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
// import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import { FaAws, FaMicrosoft } from "react-icons/fa"; // Import React Icons

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		console.log("Homepage component mounted");
		window.scrollTo(0, 0);
		return () => console.log("Homepage component unmounted");
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);
			console.log("Scroll position:", scroll);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		console.log("Scroll event listener added");

		return () => {
			window.removeEventListener("scroll", handleScroll);
			console.log("Scroll event listener removed");
		};
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								{/* HERO SECTION WITH TYPEWRITER */}
								<h2 className="hero-title">
									<span>{INFO.homepage.greeting.replace("Aditya Dey", "")}</span>
									<br />
									<span className="hero-name">Aditya Dey</span>
									<br />
									<span>{INFO.homepage.intro} </span>
									<br />
									<span className="hero-role">
										<Typewriter
											options={{
												strings: INFO.hero.typewriterStrings,
												autoStart: true,
												loop: true,
												delay: 30,
												deleteSpeed: 8,
											}}
										/>
									</span>
								</h2>
								<p className="hero-text">
									{INFO.homepage.description.split("\n\n").map((paragraph, index) => (
										<span key={index}>
											{paragraph}
											<br />
											<br />
										</span>
									))}
								</p>
							</div>
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
									style={{ color: "#1DA1F2", fontSize: "2rem" }} // Increased size
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
									style={{ color: "#333", fontSize: "2rem" }} // Increased size
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
									style={{ color: "#E4405F", fontSize: "2rem" }} // Increased size
								/>
							</a>
							<a
								href={INFO.socials.steam}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faSteam}
									className="homepage-social-icon"
									style={{ color: "#171A21", fontSize: "2rem" }} // Increased size
								/>
							</a>
						</div>
						<br></br>
						<span style={{ fontSize: "1.5rem", color: "orange", fontWeight: "bold" }}>
							Certifications
						</span>
						<div className="homepage-certifications">
							<div className="homepage-certification-item">
								<FaAws className="certification-icon" />
								<h3>AWS Cloud Practitioner</h3>
								<p>Certification for foundational AWS knowledge.</p>
							</div>
							<div className="homepage-certification-item">
								<FaAws className="certification-icon" />
								<h3>AWS AI Practitioner</h3>
								<p>Certification for foundational AI and ML services on AWS.</p>
							</div>
							<div className="homepage-certification-item">
								<FaAws className="certification-icon" />
								<h3>AWS ML Engineer Associate</h3>
								<p>Certification for machine learning expertise on AWS.</p>
							</div>
							<div className="homepage-certification-item">
								<FaAws className="certification-icon" />
								<h3>AWS Developer Associate</h3>
								<p>Certification for AWS development skills.</p>
							</div>
							<div className="homepage-certification-item">
								<FaMicrosoft className="certification-icon" />
								<h3>Microsoft certified Azure fundamentals</h3>
								<p>Certification for Azure fundamentals.</p>
							</div>
							<div className="homepage-certification-item">
								<FaMicrosoft className="certification-icon" />
								<h3>Microsoft certified Power Platform fundamentals</h3>
								<p>Certification for Power Platform fundamentals.</p>
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;

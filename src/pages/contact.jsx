import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate(); // Initialize useNavigate

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Connect!
						</div>
						<div className="subtitle contact-subtitle">
							Feel free to reach out to me on any of the platforms below!
						</div>

						<div className="contact-details-wrapper">
							<div className="contact-card">
								<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
									<FaTwitter className="contact-icon" style={{ color: "#1DA1F2", fontSize: "48px" }} />
								</a>
							</div>
							<div className="contact-card">
								<a href={INFO.socials.github} target="_blank" rel="noreferrer">
									<FaGithub className="contact-icon" style={{ color: "#333", fontSize: "48px" }} />
								</a>
							</div>
							<div className="contact-card">
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
									<FaLinkedin className="contact-icon" style={{ color: "#0077B5", fontSize: "48px" }} />
								</a>
							</div>
							<div className="contact-card">
								<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
									<FaInstagram className="contact-icon" style={{ color: "#E4405F", fontSize: "48px" }} />
								</a>
							</div>
						</div>
						<div className="home-button-container">
							<button className="home-button" onClick={() => navigate("/")}>
								Return to Home
							</button>
						</div>
					</div>

					{/* <div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div> */}

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;

import React from "react";
import { Code2, Server, Database, Cloud, Terminal } from "lucide-react";
import {
    SiPython, SiFlask, SiFastapi, SiCplusplus, SiRust, SiJavascript,
    SiMysql, SiPostgresql, SiMongodb, SiRedis,
    SiDocker, SiNginx, SiGithubactions,
    SiScikitlearn, SiPytorch
} from "react-icons/si";
import { FaAws, FaLinux, FaGit } from "react-icons/fa";

// SiLangchain might be missing in some versions, using Terminal as fallback if needed or try import
// If SiLangchain is not found, I will just use Terminal icon for it in the object below.

const INFO = {
	main: {
		title: "Aditya's Portfolio",
		name: "Aditya Dey",
		email: "adey9217@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		twitter: "https://x.com/AdityaDey442997?t=MrvsP8XY3XefzLOT07q4kg&s=09",
		github: "https://github.com/AditHash",
		linkedin: "https://www.linkedin.com/in/aditya-dey-b533681b8/",
		instagram: "https://www.instagram.com/aditya.spx?igsh=MTEzbzdoeXBvMnE0Zg==",
		steam: "https://steamcommunity.com/id/adityadragon/",
	},

	homepage: {
		greeting: "Hi, I am Aditya Dey",
		intro: "— a backend and systems-focused developer specializing in Python & C++.",
		description:
		  "I build scalable APIs, smart backend services, and developer tools that help teams ship faster. My focus is on designing intelligent solutions that blend code with creativity, reducing friction in distributed systems, and pushing performance boundaries.\n\n" +
          "Explore my work below or get in touch to collaborate.",
	},

	about: {
		title: "I’m Aditya Dey. I am from Kolkata, India.",
		description:
		  "I’m a software developer passionate about building elegant backend systems and reliable APIs. I enjoy solving problems with clean, maintainable code, reducing complexity in distributed services, and improving performance where it matters. After gaining experience with Flask, FastAPI, Docker, and AWS, I now focus primarily on Python and C++ for both productivity and performance.\n\n" +
          "I learn with purpose — every project teaches me something new and helps me grow as an engineer.\n\n" +
          "Outside of work, I occasionally explore photography and unwind with casual gaming when time permits.",
	},

	experience: [
		{
			role: "Associate Cloud Engineer",
			company: "Workmates Core2Cloud",
			period: "Dec 2023 - Present",
			description: "Designing and deploying scalable cloud-native solutions, integrating MLOps practices, and ensuring robust infrastructure for AI-driven applications."
		},
		{
			role: "ML Engineer Intern",
			company: "Prodigy Infotech",
			period: "Aug 2023 - Oct 2023",
			description: "Developed and deployed machine learning models for NLP and recommendation systems, contributing to enhanced user experiences."
		},
	],

	hero: {
		name: "Aditya Dey",
		typewriterStrings: [
			"Backend Developer",
			"Systems Engineer",
			"AI/ML Enthusiast",
			"Python Specialist",
			"Cloud Architect",
		],
	},

    skills: {
        backend: {
            title: "Backend Development",
            icon: <Server className="h-5 w-5" />,
            items: [
                { name: "Python", icon: <SiPython className="text-blue-500" /> },
                { name: "Flask", icon: <SiFlask className="text-foreground" /> },
                { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
                { name: "REST APIs", icon: <Cloud className="text-sky-500" /> }
            ]
        },
        systems: {
            title: "Systems & Languages",
            icon: <Code2 className="h-5 w-5" />,
            items: [
                { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
                { name: "Python", icon: <SiPython className="text-blue-500" /> },
                { name: "Rust", icon: <SiRust className="text-orange-500" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }
            ]
        },
        database: {
            title: "Databases",
            icon: <Database className="h-5 w-5" />,
            items: [
                { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "Redis", icon: <SiRedis className="text-red-500" /> }
            ]
        },
        devops: {
            title: "DevOps & Cloud",
            icon: <Cloud className="h-5 w-5" />,
            items: [
                { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
                { name: "AWS", icon: <FaAws className="text-orange-500" /> },
                { name: "Linux", icon: <FaLinux className="text-foreground" /> },
                { name: "Git", icon: <FaGit className="text-red-500" /> },
                { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
                { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-600" /> }
            ]
        },
        ai: {
             title: "AI & ML",
             icon: <Terminal className="h-5 w-5" />,
             items: [
                { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-500" /> },
                { name: "LangChain", icon: <Terminal className="text-green-500" /> }, // Fallback to Terminal if SiLangchain missing
                { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
                { name: "RAG systems", icon: <Terminal className="text-purple-500" /> }
             ]
        }
    },

    process: [
        {
            title: "Understand",
            description: "I start by deeply understanding the goal and the problem space."
        },
        {
            title: "Prototype",
            description: "I build quick prototypes to test assumptions and get early feedback."
        },
        {
            title: "Iterate",
            description: "I refine the solution based on real-world usage and performance metrics."
        },
        {
            title: "Deliver",
            description: "I ship clean, documented, and tested code that is ready for production."
        }
    ],

	projects: [
		{
			title: "Sentiment Analysis Tool",
			tagline: "High-accuracy text classification using Transformers.",
			image: "/nasa.jpg",
			description:
				"Built a sentiment analysis tool leveraging the DistilBERT transformer model. I handled data preprocessing, model fine-tuning, and deployment to a scalable inference API.",
			linkText: "View on GitHub",
			link: "https://github.com/AditHash/Sentiment-Analysis-using-distilbert",
            tags: ["Python", "Transformers", "NLP"]
		},
		{
			title: "Movies Recommender",
			tagline: "Personalized movie suggestions engine.",
			image: "/nasa.jpg",
			description:
				"Developed a content-based and collaborative filtering recommendation system. Solved the cold-start problem and optimized query performance using scikit-learn.",
			linkText: "View on GitHub",
			link: "https://github.com/AditHash/IMDB-movies-recommendation-system",
             tags: ["Python", "Scikit-Learn", "ML"]
		},
		{
			title: "Gemini Chatbot Router",
			tagline: "Context-aware conversational AI.",
			image: "/nasa.jpg",
			description:
				"Implemented a conversational AI chatbot using the Model Context Protocol. Designed for multi-turn conversations and seamless multi-agent integration.",
			linkText: "View on GitHub",
			link: "https://github.com/AditHash/Gemini-Router",
             tags: ["GenAI", "MCP", "Python"]
		},
		{
			title: "Stock Advisor RAG",
			tagline: "AI-powered financial insights.",
			image: "/nasa.jpg",
			description:
				"A Retrieval-Augmented Generation (RAG) chatbot combining retrieval models with generative AI to provide accurate, context-rich stock market answers.",
			linkText: "View on GitHub",
			link: "https://github.com/AditHash/stock-predictor",
             tags: ["RAG", "HuggingFace", "Python"]
		},
        {
			title: "Python Snake Game",
			tagline: "Classic arcade fun with a modern touch.",
			image: "/nasa.jpg",
			description:
				"Classic Snake game built with Python and Pygame. Features scoring, increasing difficulty, and a clean, retro-inspired user interface.",
			linkText: "View on GitHub",
			link: "https://github.com/AditHash/Python-Snake-Game",
             tags: ["Python", "Pygame", "Game Dev"]
		},
        {
			title: "QR Code Generator",
			tagline: "Instant QR code creation tool.",
			image: "/nasa.jpg",
			description:
				"Created a web app to generate QR codes for URLs and text. Features include custom coloring, download options, and a responsive frontend.",
			linkText: "View on GitHub",
			link: "https://github.com/AditHash/qrcode-generator",
             tags: ["JavaScript", "Python", "Web"]
		},
	],
};

export default INFO;

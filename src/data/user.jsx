import React from "react";
import { Code2, Server, Database, Cloud, Terminal, Shield } from "lucide-react";
import {
    SiPython, SiFlask, SiFastapi, SiCplusplus,
    SiMysql, SiPostgresql, SiMongodb, SiRedis,
    SiDocker,
    SiTerraform, SiHuggingface, SiGoogle
} from "react-icons/si";
import { FaAws, FaGit } from "react-icons/fa";

const INFO = {
    main: {
        title: "Aditya Dey — Backend Developer (AI)",
        name: "Aditya Dey",
        email: "adey9217@gmail.com",
        logo: "../logo.jpg",
        cv: "/adi-resume.pdf",
    },

    socials: {
        twitter:   "https://x.com/AdityaDey442997?t=MrvsP8XY3XefzLOT07q4kg&s=09",
        github:    "https://github.com/AditHash",
        linkedin:  "https://www.linkedin.com/in/aditya-dey-b533681b8/",
        instagram: "https://www.instagram.com/aditya.spx?igsh=MTEzbzdoeXBvMnE0Zg==",
        steam:     "https://steamcommunity.com/id/adityadragon/",
        facebook:  "",
    },

    homepage: {
        greeting: "Hi, I am Aditya Dey",
        intro: "— a backend developer specializing in AI systems, Python, and AWS.",
        description:
            "I build production-grade backend services, AI-powered pipelines, and voice AI systems. " +
            "From real-time fraud detection with Kafka to local voice assistants powered by open-source LLMs — " +
            "I work across the full backend stack with a focus on scalability and intelligent automation.\n\n" +
            "Explore my work below or get in touch to collaborate.",
    },

    about: {
        title: "I'm Aditya Dey. I am from Kolkata, India.",
        description:
            "I'm a backend developer focused on AI systems — passionate about building software that is both powerful and elegant. " +
            "I work primarily in Python and C++, building everything from REST APIs to real-time streaming pipelines and voice AI applications.\n\n" +
            "At Workmates Core2Cloud, I develop AI-driven backend systems — LangGraph agents, RAG pipelines, voice AI with AWS Bedrock, " +
            "and containerised microservices for production environments.\n\n" +
            "I'm particularly drawn to the intersection of backend engineering and AI: voice interfaces, agentic workflows, " +
            "real-time event processing, and retrieval-augmented generation. Every project is an opportunity to push the boundaries " +
            "of what reliable, intelligent software can do.\n\n" +
            "Outside of work, I explore photography and decompress with casual gaming.",
    },

    experience: [
        {
            role: "Backend Developer (AI)",
            company: "Workmates Core2Cloud",
            period: "2025 – Present",
            description:
                "Building AI-powered backend systems — LangGraph and LangChain agents, RAG pipelines with AWS Bedrock, " +
                "real-time voice AI, and FastAPI microservices. Developing intelligent automation tools and agentic workflows " +
                "for production cloud environments.",
        },
        {
            role: "Associate Cloud Engineer",
            company: "Workmates Core2Cloud",
            period: "Dec 2023 – 2024",
            description:
                "Designed and deployed cloud-native solutions on AWS — including LangGraph-powered agents for CloudWatch monitoring, " +
                "containerised microservices with Docker and ECS, CI/CD pipelines with GitHub Actions, " +
                "and MLOps infrastructure for AI-driven products.",
        },
        {
            role: "ML Engineer Intern",
            company: "Prodigy Infotech",
            period: "Aug 2023 – Oct 2023",
            description:
                "Developed and deployed machine learning models for NLP and recommendation systems using scikit-learn and PyTorch. " +
                "Contributed to production pipelines and enhanced user experience through data-driven feature work.",
        },
    ],

    hero: {
        name: "Aditya Dey",
        typewriterStrings: [
            "Backend Developer (AI)",
            "Voice AI Builder",
            "LangGraph Engineer",
            "Python Specialist",
            "Cloud Engineer",
        ],
    },

    skills: {
        backend: {
            title: "Backend Development",
            icon: <Server className="h-5 w-5" />,
            items: [
                { name: "Python",        icon: <SiPython className="text-blue-500" /> },
                { name: "FastAPI",       icon: <SiFastapi className="text-teal-500" /> },
                { name: "Flask",         icon: <SiFlask className="text-foreground" /> },
                { name: "Pydantic",      icon: <Shield className="h-4 w-4 text-red-500" /> },
                { name: "REST APIs",     icon: <Cloud className="h-4 w-4 text-sky-500" /> },
                { name: "Microservices", icon: <Server className="h-4 w-4 text-purple-500" /> },
            ],
        },
        systems: {
            title: "Languages & Core",
            icon: <Code2 className="h-5 w-5" />,
            items: [
                { name: "C++",   icon: <SiCplusplus className="text-blue-600" /> },
                { name: "SQL",   icon: <Database className="h-4 w-4 text-blue-400" /> },
                { name: "NoSQL", icon: <Database className="h-4 w-4 text-green-500" /> },
            ],
        },
        database: {
            title: "Databases & Vectors",
            icon: <Database className="h-5 w-5" />,
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
                { name: "MongoDB",    icon: <SiMongodb className="text-green-500" /> },
                { name: "MySQL",      icon: <SiMysql className="text-blue-500" /> },
                { name: "Qdrant",     icon: <Database className="h-4 w-4 text-purple-500" /> },
                { name: "OpenSearch", icon: <Database className="h-4 w-4 text-blue-600" /> },
                { name: "Redis",      icon: <SiRedis className="text-red-500" /> },
            ],
        },
        devops: {
            title: "Cloud & DevOps",
            icon: <Cloud className="h-5 w-5" />,
            items: [
                { name: "AWS (ECS, ECR, Lambda, S3, Textract, Bedrock)", icon: <FaAws className="text-orange-500" /> },
                { name: "Docker",    icon: <SiDocker className="text-blue-500" /> },
                { name: "Terraform", icon: <SiTerraform className="text-purple-600" /> },
                { name: "Git",       icon: <FaGit className="text-red-500" /> },
            ],
        },
        ai: {
            title: "AI & LLM Ops",
            icon: <Terminal className="h-5 w-5" />,
            items: [
                { name: "LangGraph",        icon: <Terminal className="h-4 w-4 text-green-500" /> },
                { name: "LangChain",        icon: <Terminal className="h-4 w-4 text-green-600" /> },
                { name: "RAG Pipelines",    icon: <Terminal className="h-4 w-4 text-purple-500" /> },
                { name: "AWS Bedrock",      icon: <FaAws className="text-yellow-500" /> },
                { name: "Google Vertex AI", icon: <SiGoogle className="text-blue-500" /> },
                { name: "Groq",             icon: <Terminal className="h-4 w-4 text-orange-400" /> },
                { name: "LangSmith",        icon: <Terminal className="h-4 w-4 text-blue-500" /> },
                { name: "Crew AI",          icon: <Terminal className="h-4 w-4 text-red-400" /> },
                { name: "n8n",              icon: <Terminal className="h-4 w-4 text-pink-500" /> },
                { name: "LiveKit",          icon: <Terminal className="h-4 w-4 text-cyan-500" /> },
                { name: "Strands SDK",      icon: <Terminal className="h-4 w-4 text-violet-500" /> },
                { name: "Hugging Face",     icon: <SiHuggingface className="text-yellow-400" /> },
                { name: "Embeddings",       icon: <Terminal className="h-4 w-4 text-pink-400" /> },
            ],
        },
    },

    process: [
        {
            title: "Understand",
            description: "I start by deeply understanding the goal and the problem space before writing a line of code.",
        },
        {
            title: "Prototype",
            description: "I build quick prototypes to test assumptions and gather early feedback fast.",
        },
        {
            title: "Iterate",
            description: "I refine the solution based on real-world usage, performance metrics, and edge cases.",
        },
        {
            title: "Deliver",
            description: "I ship clean, documented, production-ready code with proper testing and observability.",
        },
    ],

    projects: [
        {
            title: "Real-Time Fraud Detection",
            tagline: "Event-driven fraud pipeline with Kafka & ML.",
            description:
                "A production-style fraud detection system using Apache Kafka for real-time transaction streaming. " +
                "Implements a two-stage pipeline — rule-based candidate screening followed by scikit-learn ML inference — " +
                "with three Kafka topics, SQLite persistence, live SSE dashboard, and full Docker Compose orchestration.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/real-time-fraud-detection-with-kafka",
            tags: ["Kafka", "FastAPI", "Python", "Docker", "scikit-learn", "Microservices", "SSE"],
            type: "personal",
        },
        {
            title: "Voice-RAG",
            tagline: "Voice AI with hybrid reasoning and RAG on AWS Bedrock.",
            description:
                "A modular voice assistant using AWS Bedrock Nova models, combining fast voice responses with deep intelligence. " +
                "Features chat-scoped RAG with PDF uploads, web search (DuckDuckGo), real-time WebSocket streaming, " +
                "barge-in interruption handling, and session-isolated ChromaDB vector stores.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/Voice-RAG",
            tags: ["AWS Bedrock", "FastAPI", "ChromaDB", "WebSocket", "RAG", "Python"],
            type: "personal",
        },
        {
            title: "Local Voice AI",
            tagline: "Fully private, containerised voice assistant.",
            description:
                "A containerised voice assistant that runs entirely locally — no cloud, no data leaks. " +
                "Uses LiveKit for real-time WebRTC audio, Whisper (VoxBox) for STT, llama.cpp for LLM inference (Qwen3-4B), " +
                "and Kokoro for TTS. Supports CPU and GPU deployments with auto model downloads.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/local-voice-ai",
            tags: ["LiveKit", "WebRTC", "llama.cpp", "Whisper", "Docker", "Next.js"],
            type: "personal",
        },
        {
            title: "AWS Monitor Agent",
            tagline: "Chat-driven AWS resource management and monitoring.",
            description:
                "An intelligent assistant for monitoring AWS resources through natural language. " +
                "Fetches CloudWatch metrics, visualises CPU/memory/network data across EC2, RDS, Lambda, S3, and ELB, " +
                "with Streamlit and Gradio interfaces powered by AWS Bedrock and boto3.",
            linkText: "View on GitHub",
            link: "https://github.com/AdityaWorkmates/AWS-monitor-agent",
            tags: ["AWS Bedrock", "boto3", "Streamlit", "Gradio", "Python", "CloudWatch"],
            type: "work",
        },
        {
            title: "LangGraph CloudWatch Agent",
            tagline: "Automated incident analysis via LangGraph + AWS Bedrock.",
            description:
                "A production Flask API that accepts CloudWatch monitoring payloads and delivers structured incident analysis " +
                "using a LangGraph agent backed by AWS Bedrock (Claude). Generates time-series plots, sends email alerts " +
                "with embedded visualisations, and optionally stores analysis in S3. ECS-ready with health checks.",
            linkText: "View on GitHub",
            link: "https://github.com/AdityaWorkmates/Langgraph-agent-for-cloudwatch-metrics",
            tags: ["LangGraph", "AWS Bedrock", "Flask", "Docker", "LangChain", "ECS"],
            type: "work",
        },
        {
            title: "Voice Assistant",
            tagline: "Multilingual real-time voice chatbot.",
            description:
                "A full-stack voice assistant supporting multiple Indian languages. " +
                "Press-and-hold voice recording → SarvamAI STT → Groq Llama-3 LLM response → TTS synthesis. " +
                "React + Vite frontend, Flask backend, fully containerised with Docker Compose.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/Voice-Assistant",
            tags: ["Flask", "React", "Groq", "SarvamAI", "Docker", "Python"],
            type: "personal",
        },
        {
            title: "AI Meme Generator",
            tagline: "Meme generation with Google Gemini & Imagen.",
            description:
                "Generates memes from text prompts using Google's Gemini and Imagen AI models. " +
                "Offers three interfaces: Streamlit web UI, a REST API (Flask), and a CLI. " +
                "Flexible model configuration with environment-based auth.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/meme-generator",
            tags: ["Gemini", "Imagen", "Streamlit", "Flask", "Python", "Google AI"],
            type: "personal",
        },
        {
            title: "Stock Advisor RAG",
            tagline: "AI-powered financial insights via RAG.",
            description:
                "A Retrieval-Augmented Generation chatbot combining vector retrieval with generative AI to answer " +
                "stock market queries with accurate, context-rich responses. Integrates email notifications for " +
                "automated stock alerts and uses HuggingFace embeddings for semantic search over financial data.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/stock-predictor",
            tags: ["RAG", "HuggingFace", "Python", "LangChain", "Email Alerts"],
            type: "personal",
        },
        {
            title: "Todo App",
            tagline: "Production-ready task manager with auth & REST API.",
            description:
                "A containerised task management app with user authentication, priority-based task organisation " +
                "(Low / Medium / High), due dates, and a REST API endpoint. Built with Flask and MongoDB, " +
                "deployed via Docker Compose with health monitoring.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/Todo-app-Flask",
            tags: ["Flask", "MongoDB", "Docker Compose", "Python", "REST API", "Auth"],
            type: "personal",
        },
        {
            title: "Sentiment Analysis",
            tagline: "High-accuracy NLP with DistilBERT Transformers.",
            description:
                "Fine-tuned a DistilBERT transformer model for sentiment classification. Covers full ML pipeline — " +
                "data preprocessing, model fine-tuning on labelled datasets, evaluation, and deployment to a " +
                "scalable FastAPI inference endpoint.",
            linkText: "View on GitHub",
            link: "https://github.com/AditHash/Sentiment-Analysis-using-distilbert",
            tags: ["Python", "DistilBERT", "Transformers", "FastAPI", "NLP"],
            type: "personal",
        },
    ],
};

export default INFO;

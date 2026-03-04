import { GitCommit, ExternalLink, Code, Globe, Shield, Brain, MessageSquare, Box } from 'lucide-react';

export const projectCategories = [
  { id: 'All', label: 'All Projects', icon: Box },
  { id: 'Web', label: 'Web Development', icon: Globe },
  { id: 'Mobile', label: 'Mobile Apps', icon: MessageSquare },
  { id: 'AI/ML', label: 'AI & Machine Learning', icon: Brain },
  { id: 'Blockchain', label: 'Blockchain', icon: Shield },
  { id: 'Backend', label: 'Backend', icon: Code },
];

export const projects = [


    {
        id: 7,
        name: "MoodiFy",
        tagline: "AI-powered Mood Based Music Recommended System",
        description: "MoodiFy is an AI-powered, multi-modal emotion recognition app that understands users through text, voice, and facial expressions. Using NLP, speech analysis, and computer vision, it detects real-time emotional states and dynamically recommends music that aligns with or positively influences the user’s mood. By combining emotional intelligence with adaptive recommendation logic, MoodiFy transforms traditional music streaming into a personalized, context-aware listening experience.",
        image: "/MoodiFy.jpeg",
        techStack: ["Kotlin", "Jetpack Compose", "Firebase Authentication", "Firebase Firestore", "Room Database", "Python", "Flask REST API", "OpenCV", "NLTK", "Librosa"],
        github: "https://github.com/HimanshuSingh1531/MoodiFy",
        deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk",
        categories: ['All', 'AI/ML', 'Mobile'],
        featured: true,
        icon: Brain
      },
       {
    id: 2,
    name: "Spiritual",
    tagline: "Where Ancient Wisdom Meets Artificial Intelligence.",
    description: "Spreatual is an AI-powered spiritual wellness platform that blends timeless wisdom from the Bhagavad Gita, Islamic teachings, and other sacred philosophies with advanced artificial intelligence. Designed to support individuals facing stress and emotional challenges, it provides personalized, value-driven guidance for mindful living and ethical decision-making.In a fast-paced world, Spreatual offers a digital sanctuary where technology helps individuals rediscover balance, resilience, and inner strength.",
    image: "/Spiritual.jpeg",
    techStack: ["Python3","FlaskAPI","REST API","Kotlin","Jetpack Compose","Firebase Authentication","Auth0","JWT Authentication","OpenAI API","Hugging Face Transformers","PyTorch","Scikit-learn","NumPy","Pandas","NLTK","Render"],
    github: "https://github.com/HimanshuSingh1531/religious-backend",
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk",
    categories: ['All', 'AI/ML', 'Mobile', 'Backend'],
    icon: Brain
  },
  {
    id: 2,
    name: "CommpersY",
    tagline: "E-Commerce App",
    description: "A full-stack e-commerce platform built to deliver seamless product discovery, secure transactions, and real-time order management. Designed with scalable architecture and intelligent personalization to enhance the modern online shopping experience.",
    image: "/CommpersY.jpeg",   
    techStack: ["MVVM Architecture","Razorpay Payment Gateway","Firebase Authentication","Firebase Firestore","Firebase Cloud Storage","Jetpack Compose","RESTful APIs","Kotlin","Glide"],
    github: "https://github.com/HimanshuSingh1531/CommpersY",
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk",
    categories: ['All', 'Web', 'Backend', 'Mobile'],
    icon: Globe
  },
  {
    id: 7,
    name: "NotiFy",
    tagline: "A production-ready Social Media Platform.",
    description: "Notify is a full-stack social networking platform designed to deliver a seamless content-sharing experience similar to modern social media ecosystems. The app enables users to create posts, engage through likes and interactions, manage personalized profiles, and connect within a dynamic feed environment. Built with a scalable backend architecture and real-time data handling, Notify focuses on smooth user interactions, optimized media delivery, and secure authentication. The platform demonstrates end-to-end implementation of social features including user management, content creation, engagement tracking, and responsive UI design  replicating the core mechanics of large-scale social media systems.",
    image: "/NotiFy.jpg",
    techStack: ["Kotlin","Jetpack Compose", "Firebase Authentication", "Firebase Firestore", "Firebase Cloud Storage", "RESTful APIs", "Cloudinary", "Python", "Flask", "Glide", "MVVM Architecture"],
    github: "https://github.com/HimanshuSingh1531/NotiFy", 
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk", 
    categories: ['All', 'Mobile', 'Backend'],
    featured: true,
    icon: MessageSquare
},
{
    id: 8,
    name: "QuizGame",
    tagline: "Real-Time Multiplayer Quiz Battle",
    description: "QuizGame is a real-time multiplayer quiz app where users can create custom questions, host private rooms, and challenge friends using unique room codes. Designed to make learning competitive and fun, the app delivers a smooth, interactive, and engaging gameplay experience that turns knowledge into an exciting social battle.",
    image: "/Quiz.jpeg",
    techStack: ["Render","JavaScript", "Python3","FlaskAPI","REST API","Kotlin","Jetpack Compose","Firebase Authentication","Auth0", "Firebase",],
    github: "https://github.com/HimanshuSingh1531/quiz-websocket-server",
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk", 
    categories: ['All','Mobile', 'Backend'],
    icon: Code
  }, 
  {
    id: 3,
    name: "LearnPro",
    tagline: "Smart Learning Platform for Competitive Excellence",
    description: "LearnPro is a comprehensive digital learning platform designed to prepare students for competitive exams with structured courses, expert-led lectures, and performance-driven assessments. The platform offers interactive classes, curated study material, and progress tracking to ensure focused and result-oriented preparation.Built to make quality education accessible and effective, LreanPro empowers students to learn smarter, practice consistently, and achieve academic excellence.",
    image: "/LearnPro.jpeg",
    techStack: ["Tensorflow", "MVVM Architecture","Razorpay Payment Gateway","Firebase Authentication","Firebase Firestore","Firebase Cloud Storage","Jetpack Compose","RESTful APIs","Kotlin","Glide"],
    github: "https://github.com/HimanshuSingh1531/LearnPro",
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk",
    categories: ['All', 'Web', 'Mobile', 'Backend'],
    icon: Code
  },
  {
    id: 4,
    name: "SeoAnalyzer",
    tagline: "Comprehensive Website SEO Evaluation Platform",
    description: "SeoAnalyzer is a smart and powerful SEO analysis tool built to evaluate your website’s performance, uncover critical optimization issues, and help you improve search engine rankings effortlessly. Simply enter your URL, and the platform runs a detailed audit covering essential SEO factors like meta tags, content structure, performance metrics, and technical health. With clear insights and actionable recommendations, SeoAnalyzer makes it easy to optimize smarter — all in just a few clicks.",
    image: "/SEO.jpeg",
    techStack: ["Kotlin", "Jetpack Compose", "REST APIs", "Retrofit", "SEO Audit Engine"],
    github: "https://github.com/HimanshuSingh1531/SEO-Analyzer",
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk",
    categories: ['All', 'Web', 'Mobile', 'Backend'],
    icon: Code
  },
  {
    id: 4,
    name: "AI Legal Advisor",
    tagline: "Intelligent Legal Advisor",
    description: "Legal AI Advisor is a domain-specialized AI legal advisor built to deliver precise, law-focused intelligence with clarity and reliability. Trained exclusively on legal knowledge and regulatory frameworks, it provides structured guidance on rights, legal procedures, compliance matters, and documentation - eliminating ambiguity from complex legal language.Designed to bridge the gap between law and accessibility, LexGuard AI transforms complicated legal concepts into clear, actionable insights. By combining advanced artificial intelligence with dedicated legal domain training, the platform ensures accurate, context-aware, and legally grounded responses - empowering individuals and businesses to navigate legal challenges with confidence and control.",
    image: "/Legal.jpeg",
    techStack: ["Kotlin", "Grok", "Jetpack", "Firebase", "Auth"], 
    github: "https://github.com/HimanshuSingh1531/AI-LEGAL",
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk",
    categories: ['All', 'Web', 'Mobile', 'Backend'],
    icon: Code
  },
  {
    id: 6,
    name: "ZeroSync",
    tagline: "Layer-2 Rollup Development Framework",
    description: "ZeroSync is a modular development framework designed for building, managing, and deploying blockchain rollups with efficiency and scalability. It enables optimized transaction batching, simulation, and streamlined deployment processes to support next-generation Layer-2 scaling solutions.With integrated CLI tools, backend API support, and smart contract integration hooks, ZeroSync simplifies the prototyping and testing of rollup architectures. The framework empowers developers to experiment, validate, and deploy scalable blockchain infrastructures with greater speed and control. ZeroSync was developed as a collaborative team project during an intensive hackathon environment, demonstrating rapid innovation, technical coordination, and scalable system design under real-world constraints.",
    image: "/ZeroSync.png",
    techStack:["JavaScript", "TypeScript", "Solidity", "CSS", "PowerShell", "Circom"],
    github: "https://github.com/Thejaggeddevil/QuickSync",
    deployed: "https://docs.google.com/document/d/1Bc2VfAKjogIB8BXvb1BneMI0mk2tesl5TmQxYXgcJaE/edit?usp=drivesdk",
    categories: ['All', 'Backend', 'Web', 'Blockchain'],
    icon: Globe
  },
];

export const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
    },
  },
};
import { TeamMember } from "@/types";
import { Users, BookOpen, Award, Heart, Code, Lightbulb, Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Github, Globe, Download, ExternalLink, Laptop, Brain, Database, Shield, Facebook, Youtube, BookOpenText } from "lucide-react"

// Data for / page
export const upcomingEventsForHomePage = [
    {
        title: "Web Development Workshop",
        date: "March 15, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Computer Lab 301",
        description: "Learn modern web development with React, Next.js, and Tailwind CSS.",
        type: "Workshop"
    },
    {
        title: "AI/ML Symposium",
        date: "March 22, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Auditorium",
        description: "Explore the latest trends in artificial intelligence and machine learning.",
        type: "Symposium"
    },
    {
        title: "Code Hackathon 2025",
        date: "April 5-6, 2025",
        time: "24 Hours",
        location: "Main Campus",
        description: "48-hour coding marathon with exciting prizes and networking opportunities.",
        type: "Hackathon"
    }
];

export const faqs = [
    {
        question: "How do I get started with programming?",
        answer: "Start with a beginner-friendly language like Python or JavaScript. Use interactive platforms like freeCodeCamp or Codecademy to learn the basics, then practice with small projects."
    },
    {
        question: "What programming language should I learn first?",
        answer: "Python is excellent for beginners due to its simple syntax. JavaScript is great if you're interested in web development. Choose based on your interests: web development (JavaScript), data science (Python), or mobile apps (Java/Kotlin for Android, Swift for iOS)."
    },
    {
        question: "How can I prepare for technical interviews?",
        answer: "Practice data structures and algorithms on platforms like LeetCode and HackerRank. Study system design concepts, practice coding on a whiteboard, and prepare for behavioral questions."
    },
    {
        question: "What are the benefits of joining ACM HITK?",
        answer: "Members get access to exclusive workshops, networking opportunities, mentorship programs, career guidance, and hands-on project experience. You'll also be part of a supportive community of like-minded peers."
    },
    {
        question: "How do I contribute to open source projects?",
        answer: "Start by finding beginner-friendly projects on GitHub with 'good first issue' labels. Read the contribution guidelines, fork the repository, make your changes, and submit a pull request."
    },
    {
        question: "What skills are most in-demand in the tech industry?",
        answer: "Currently high-demand skills include cloud computing (AWS, Azure), AI/ML, cybersecurity, full-stack web development, mobile development, and DevOps. Soft skills like communication and problem-solving are equally important."
    }
]

// Data for /about page
export const goals = [
    {
        icon: (
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "Community",
        description: "Building a strong network of tech enthusiasts and professionals"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: "Innovation",
        description: "Fostering creativity and technological advancement"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: "Education",
        description: "Promoting learning and knowledge sharing in computing"
    }
];

// Data for /events page
export const upcomingEvents = [
    {
        id: 1,
        title: "Web Development Workshop: React & Next.js",
        date: "March 15, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Computer Lab 301",
        type: "Workshop",
        description: "Learn modern web development with React, Next.js, and Tailwind CSS. This hands-on workshop will cover component-based architecture, routing, and responsive design principles.",
        speaker: "John Doe - Senior Frontend Developer at TechCorp",
        capacity: "50 participants",
        status: "Open"
    },
    {
        id: 2,
        title: "AI/ML Symposium: Future of Intelligence",
        date: "March 22, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Main Auditorium",
        type: "Symposium",
        description: "Explore the latest trends in artificial intelligence and machine learning with industry experts. Sessions include deep learning, computer vision, and ethical AI.",
        speaker: "Dr. Sarah Johnson - AI Research Scientist",
        capacity: "200 participants",
        status: "Filling Fast"
    },
    {
        id: 3,
        title: "Code Hackathon 2025: Innovation Challenge",
        date: "April 5-6, 2025",
        time: "48 Hours",
        location: "Main Campus",
        type: "Hackathon",
        description: "48-hour coding marathon with exciting prizes and networking opportunities. Build innovative solutions to real-world problems with your team.",
        speaker: "Multiple Industry Mentors",
        capacity: "100 teams",
        status: "Open"
    },
    {
        id: 4,
        title: "Cybersecurity Bootcamp",
        date: "April 12, 2025",
        time: "9:00 AM - 6:00 PM",
        location: "Security Lab",
        type: "Bootcamp",
        description: "Intensive bootcamp covering ethical hacking, penetration testing, and security best practices. Includes hands-on labs and certification preparation.",
        speaker: "Mike Wilson - Cybersecurity Consultant",
        capacity: "30 participants",
        status: "Limited Seats"
    }
];

export const pastEvents = [
    {
        title: "Python Programming Workshop",
        date: "February 28, 2025",
        type: "Workshop",
        description: "Introduction to Python programming for beginners.",
        attendees: 45,
        photos: "Available"
    },
    {
        title: "Data Structures & Algorithms Contest",
        date: "February 15, 2025",
        type: "Competition",
        description: "Programming contest focusing on DSA problem-solving.",
        attendees: 80,
        photos: "Available"
    },
    {
        title: "Mobile App Development Seminar",
        date: "January 30, 2025",
        type: "Seminar",
        description: "Flutter and React Native development session.",
        attendees: 60,
        photos: "Available"
    },
    {
        title: "Open Source Contribution Workshop",
        date: "January 20, 2025",
        type: "Workshop",
        description: "How to contribute to open source projects on GitHub.",
        attendees: 35,
        photos: "Available"
    }
];

// Data for /join page

export const benefits = [
    {
        icon: BookOpenText,
        title: "Skill Development",
        description: "Access to exclusive workshops, coding bootcamps, and hands-on projects to enhance your technical skills.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Users,
        title: "Networking Opportunities",
        description: "Connect with like-minded peers, industry professionals, alumni, and potential mentors in the tech community.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Award,
        title: "Recognition & Achievements",
        description: "Participate in competitions, hackathons, and showcase your talents on various platforms with certificates.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Heart,
        title: "Community Impact",
        description: "Contribute to meaningful projects that make a positive difference in society and the local community.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Lightbulb,
        title: "Innovation & Research",
        description: "Participate in research projects, innovation challenges, and cutting-edge technology exploration.",
        color: "from-blue-500 to-cyan-500"
    }
];

// Data for /contact page
export const socialMedia = [
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/acmhitkorg",
        description: "Explore our open source projects and contribute to our codebase.",
        color: "from-gray-700 to-gray-900"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/company/acm-hitk-association-for-computing-machinery-at-hitk/",
        description: "Connect with us professionally and stay updated with career opportunities.",
        color: "from-blue-600 to-blue-700"
    },
    {
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/acm.hitk",
        description: "Follow us for daily updates, event photos, and behind-the-scenes content.",
        color: "from-pink-500 to-rose-500"
    },
    {
        name: "Youtube",
        icon: Youtube,
        url: "https://www.youtube.com/channel/UCLulcFoKMpsi8xicaRIZunQ",
        description: "Follow us for daily updates, event photos, and behind-the-scenes content.",
        color: "from-pink-500 to-rose-500"
    }
]

export const teamContacts = [
    {
        name: "Sagnik Pramanik",
        role: "Chapter Chair",
        email: "sagnikpramanik95@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/sagnik-pramanik/",
        image: "/Sagnik-Pramanik.jpeg"
    },
    {
        name: "Aryan Ghosh",
        role: "Vice Chair",
        email: "ghosharyan05@gmail.com",
        linkedinUrl: "www.linkedin.com/in/aryan-ghosh-83a26631b",
        image: "/Aryan-Ghosh.png"
    },
    {
        name: "Mohak Sarkar",
        role: "Secretary",
        email: "mohak.sarkar.cse27@heritageit.edu.in",
        linkedinUrl: "https://www.linkedin.com/in/mohak-sarkar-b0522a303/",
        image: "/Mohak-Sarkar.jpg"
    },
    {
        name: "Rohit Kumar Dey",
        role: "Webmaster",
        email: "rohit.dey302003@gmail.com",
        linkedinUrl: "https://www.linkedin.com/in/rohit-kumar-dey-3856891a5/",
        image: "/Rohit-Kumar-Dey.jpg"
    },
]

// Data for /team page
export const currentTeam: TeamMember[] = [
    {
        id: 0,
        type: "faculty",
        name: "Dr. Subhashis Majumder",
        roleAtACMHITK: "Senior Member & Patron",
        roleAtHITK: "Professor and HOD, Department of Computer Science and Engineering",
        image: "/Dr-Subhashis-Majumder.png",
        bio: "Dr. Subhashis Majumder holds an M.Tech degree in Computer Science from the Indian Statistical Institute, Kolkata, and a Ph.D. in Computer Science and Engineering from Jadavpur University. He also served as a research assistant for a year in the Computer Engineering Department of Rutgers University, U.S.A. After completing his undergraduate work in Electronics and Telecommunication Engineering from Jadavpur University in 1993, he began his career at Texas Instruments India Pvt. Ltd. He brings over seven years of industry experience, during which he led product development teams and held the position of General Manager, Technical, at a medium-sized IT company. In 2006, he established Ditsa Technologies, an IT firm focused on algorithm-intensive programming techniques. Since 2003, he has been dedicated to full-time academics and is currently serving as 'Professor and HOD' in the CSE department of Heritage Institute of Technology, Kolkata. His research interests span Data Analysis, Recommendation Algorithms, VLSI Physical Design Algorithms, Combinatorial and Graph Algorithms, Computational Geometry, and Discrete Geometry.",
        achievements: "Dr. Subhashis Majumder was awarded an NTS scholarship (1987) by NCERT, India. His career includes leading product development teams on innovative technologies. He founded Ditsa Technologies in 2006, where he contributed key fast and efficient scheduling algorithms to Sports Management Software. Academically, he has published over 90 papers in international refereed conferences and archival journals, and he has guided 6 Ph.D. students.",
        socials: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/subhashis-majumder-2944252/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Email",
                url: "mailto:subhashis.majumder@heritageit.edu",
                icon: <Mail className="h-4 w-4" />
            }, {
                name: "Website",
                url: "https://scholar.google.com/citations?user=wQaRGIMAAAAJ&hl=en",
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    {
        id: 1,
        type: "faculty",
        name: "Dr. Anurina Tarafdar",
        roleAtACMHITK: "Faculty Sponsor",
        roleAtHITK: "Assistant Professor, Department of Computer Science & Engineering",
        image: "/Dr-Anurina-Tarafdar.jpg",
        bio: "Dr. Anurina Tarafdar is currently working as an Assistant Professor in the Department of Computer Science and Engineering at Heritage Institute of Technology, Kolkata. Prior to this she was an UGC-NET Senior Research Fellow and PhD Scholar in the Department of Computer Science and Engineering, University of Calcutta. Her domain of research is resource management in the Cloud environment. She is a Machine Learning and Cloud Computing enthusiast. She is a Gold medalist in M.Tech. from the University of Calcutta.",
        achievements: "Dr. Anurina Tarafdar has conducted research in the fields of Cloud Computing and Machine Learning. Her works have been published in reputed journals and conferences of Springer, IEEE, and Elsevier. She received the UGC-NET Research Fellowship from Government of India between 2018-2023. She also acquired the First Class First position in M.Tech. in CSE from University of Calcutta in 2018. She received TCS Best Student Award for academic excellence in 2015.",
        socials: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anurina-tarafdar-107971254",
                icon: <Linkedin className="h-4 w-4" />
            }, {
                name: "Email",
                url: "mailto:anurina.tarafdar@heritageit.edu",
                icon: <Mail className="h-4 w-4" />
            }, {
                name: "Website",
                url: "https://scholar.google.com/citations?user=Mhbkvx0AAAAJ&hl=en",
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    {
        id: 2,
        type: "student",
        name: "Sagnik Pramanik",
        roleAtACMHITK: "Chair",
        roleAtHITK: "4th Year CSE",
        image: "/Sagnik-Pramanik.jpeg",
        bio: "Sagnik is a CSE Final Year student with a passion for building impactful, real-world solutions at the intersection of AI, software, and embedded systems. He has worked with multiple US-based companies, also contributing to large-scale projects of the U.S. government and healthcare sectors. A 5x LinkedIn Top Voice in various domains, he holds certifications from Google, AWS, DeepLearning.AI, Stanford University, Imperial College London, and more. He previously served as the Secretary of ACM-HITK 2024-2025 and currently leads the chapter as its Chair",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:sagnikpramanik95@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sagnik-pramanik/",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/sagnik-p",
                icon: "Github"
            }
        ]
    },
    {
        id: 3,
        type: "student",
        name: "Aryan Ghosh",
        roleAtACMHITK: "Vice Chairperson",
        roleAtHITK: "3rd year, CSE",
        image: "/Aryan-Ghosh.png",
        bio: "As the Vice Chairperson of the ACM Student Chapter at HITK, I strive to cultivate a culture of curiosity, collaboration, and cutting-edge innovation. From adrenaline-filled code battles to insightful alumni panels, I strive to bridge the gap between classroom learning and real-world tech. With a passion for building scalable systems, cracking algorithms, and exploring AI frontiers, I channel my technical skills into curating events that inspire, challenge, and elevate our student community.",
        achievements: "Presently working on Spiking neural networks and Mathematical Modeling; Recieved Scholarship for Higher Education (SHE) under the INSPIRE Scheme of DST",
        socials: [
            {
                name: "Email",
                url: "mailto:ghosharyan05@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/aryan-ghosh-83a26631b",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/Aryan-Ghosh-Code",
                icon: "Github"
            }
        ]
    },
    {
        id: 4,
        type: "student",
        name: "Mohak Sarkar",
        roleAtACMHITK: "Secretary",
        roleAtHITK: "3rd Year CSE",
        image: "/Mohak-Sarkar.jpg",
        bio: "I’m Mohak Sarkar, Secretary of ACM HITK. I’ve worked on machine learning projects, full-stack applications, and tech integrations. I’m passionate about applying innovative solutions to real-world problems and contributing meaningfully to the tech community.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:mohak.sarkar.cse27@heritageit.edu.in",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/mohak-sarkar-b0522a303/",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 5,
        type: "student",
        name: "Rohit Kumar Dey",
        roleAtACMHITK: "Webmaster",
        roleAtHITK: "4th Year CSE Student",
        image: "/Rohit-Kumar-Dey.jpg",
        bio: "Rohit is an experienced full-stack developer with over a year and a half of hands-on experience in building dynamic, responsive web applications. He has gained valuable professional experience working as a Frontend Engineer at a cybersecurity startup and progressing from Frontend Developer to Full-Stack Developer at a blockchain startup. He leverages a robust set of front-end technologies including React, Next.js, SvelteKit, and Tailwind CSS. His backend expertise encompasses Node.js, Express.js, MongoDB, SQL, Golang, Gin, and Flask. Rohit has also explored Zod for validation and Shadcn for UI components, continually experimenting with new tools and frameworks to enhance his skill set. Currently, Rohit is delving into cryptography to expand his knowledge in emerging fields. He has a keen interest in mathematics and algorithms, enjoying the process of uncovering the principles behind technological innovations. He is passionate about building impactful digital experiences that are both user-centered and technically sound.",
        achievements: "Rohit has a strong record of impactful achievements, including securing First Place at HACKHERITAGE 2023 (among 90+ teams) for the SightX project and First Place at HACK FOR GOOD 2023 (among 114 teams nationwide) for ForestWatchAI. In the academic sphere, he has published two papers: 'SightAssist: A Multi-facility Machine Learning Approach for Empowering the Visually Impaired' at ICDSNE 2024 (Lecture Notes in Networks and Systems, Vol. 1165), and 'Kontho: An AI-Driven Smart Glove for Enhanced Sign Language Communication' at ICAA 2025 (Lecture Notes in Computer Science, Vol. 15505).",
        socials: [
            {
                name: "Email",
                url: "mailto:rohit.dey302003@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/rohit-kumar-dey-3856891a5/",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/rohits-web03",
                icon: "Github"
            },
            {
                name: "Website",
                url: "https://rohitdev-psi.vercel.app/",
                icon: "Globe"
            }
        ]
    },
    {
        id: 6,
        type: "student",
        name: "Debolina Debnath",
        roleAtACMHITK: "Treasurer",
        roleAtHITK: "2nd Year CSE",
        image: "/Debolina-Debnath.jpeg",
        bio: "I'm Debolina Debnath, a 2nd-year CSE student with a strong love for design, creativity, and collaboration. I’ve learned Python, C++, HTML, and CSS, and beyond coding, what excites me the most is designing content, managing events, and bringing visual ideas to life — whether it’s social media posts, posters, or event themes.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:debolinadebnath14@gmail.com",
                icon: "Mail"
            }
        ]
    },
    {
        id: 7,
        type: "student",
        name: "Koushiki Das",
        roleAtACMHITK: "Membership Head",
        roleAtHITK: "4th Year CSE",
        image: "/Koushiki-Das.png",
        bio: `Koushiki Das is a dedicated student from HITK (Class of 2026) with a strong background in research in Artificial Intelligence and Computer Vision. She has gained valuable experience through internships at institutions like IIT Dharwad and New Jersey Institute of Technology, as well as with Indian Oil Corporation Ltd. She is also committed to community service, actively volunteering as a teacher for underserved students.`,
        achievements: `She focused on finetuning Large Language Models (LLMs) and building an AI-assisted medical appointment bot during her Summer Research Internship at IIT Dharwad. During her Winter Internship at Indian Oil Corp. Ltd, she leveraged computer vision to develop an automated PPE detection system, specifically for safety helmets in a refinery. As a Summer Research Intern at New Jersey Institute of Technology, she worked on solving Fast Fair Bandits using Reinforcement Learning. Koushiki has demonstrated leadership within the ACM HITK student chapter, serving as Vice Membership Head. Additionally, she has been a dedicated Volunteer Teacher at U&I Trust, where she educates underserved students and successfully raised 10K in funds during an annual crowdfunding session.`,
        socials: [
            {
                name: "Email",
                url: "mailto:koushikid2020@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/koushiki-das-572b50289/",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 8,
        type: "student",
        name: "Srijit Roy",
        roleAtACMHITK: "Board-Member",
        roleAtHITK: "3rd Year CSE",
        image: "/Srijit-Roy.png",
        bio: "Aspiring Web Developer (Frontend Development) and also delving into Machine Learning & algorithms for future ventures.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:rsrijit436@gmail.com",
                icon: "Mail"
            }
        ]
    },
    {
        id: 9,
        type: "student",
        name: "Souryadip Mallick",
        roleAtACMHITK: "Board Member",
        roleAtHITK: "4th Year CSE Student",
        image: "/Souryadip-Mallick.jpg",
        bio: "Computer Science undergraduate at Heritage Institute of Technology with a passion for full-stack web development and programming in Java, C++, Python, and JavaScript. My fields of interest are Data Science and Machine Learning, which I’m currently exploring, and I’m also strengthening my problem-solving skills through Data Structures and Algorithms.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:souryadipmallick@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/souryadip-mallick-03b303294",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/souryadip-official",
                icon: "Github"
            }
        ]
    },
    {
        id: 10,
        type: "student",
        name: "Shambaditya Sarkar",
        roleAtACMHITK: "Board-Member",
        roleAtHITK: "3rd Year CSE",
        image: "/Shambaditya-Sarkar.jpg",
        bio: "I'm Shambaditya Sarkar, a student much fascinated and learning about AIML like anybody else. I've done a few projects on web development, especially front-end. I often partake in digital art, designs and editing.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:shambaditya.sarkar.cse27@heritageit.edu.in",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/shambaditya-sarkar-929443317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 11,
        type: "student",
        name: "Debajit Guha",
        roleAtACMHITK: "Board Member, member of planning and organizing committee, SIG(AI-ML-DS), attendance committee",
        roleAtHITK: "3rd Year CSE",
        image: "/Debajit-Guha.jpg",
        bio: "Hello geeks! I am Debajit, a 3rd year undergrad, CSE, HITK. I am passionate about image recognition, Deep Learning, programming and currently learning Web Development.Would like to collaborate with industry people and contribute to the betterment of this chapter.",
        achievements: "1. Co author of a paper presented in ICAA 2025 and published in Springer LNCS. 2. Pursuing Summer Research internship under SRFP (Summer Research Fellowship Program) offered by Indian Academy of Science, Bangalore. 3. Presented a paper on Lung disease detection using Chest x rays at ARET 2025 by Hinweis Research. (Publication under process).",
        socials: [
            {
                name: "Email",
                url: "mailto:debajit.guha.cse27@heritageit.edu.in",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/debajit-guha-77a0ab28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 12,
        type: "student",
        name: "Mehul Roy",
        roleAtACMHITK: "Board-Member",
        roleAtHITK: "2nd Year CSE",
        image: "/Mehul-Roy.jpg",
        bio: "I'm a second-year Computer Science and Engineering student. Always curious and eager to learn, I'm diving into front-end while also experimenting with ML models.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:mehulroy6840@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/mehul-roy-319b58323",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 13,
        type: "student",
        name: "Sneha Lahiri",
        roleAtACMHITK: "Board Member",
        roleAtHITK: "4th Year CSE",
        image: "/Sneha-Lahiri.jpeg",
        bio: "I'm Sneha, a Web Dev enthusiast, who loves to do Competitive Coding as a side hobby. Apart from this, I have keen interest in Table tennis and Fine Arts.",
        achievements: "Won multiple Competitive Coding competitions, interned under DST SSR-SERB government scheme as website developer at Jadavpur University",
        socials: [
            {
                name: "Email",
                url: "mailto:snehalahiri09@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sneha-lahiri-11753b22a",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/Sana9909",
                icon: "Github"
            }
        ]
    },
    {
        id: 14,
        type: "student",
        name: "Atyasha Bhattacharyya",
        roleAtACMHITK: "Board-Member (SIG Data Science)",
        roleAtHITK: "4th Year Data Science",
        image: "/Atyasha-Bhattacharyya.png",
        bio: "I am a third-year B.Tech student in Computer Science and Engineering (Data Science) at Heritage Institute of Technology, with a strong passion for machine learning, deep learning, and computer vision. I’ve contributed to various impactful research projects at IIT Roorkee and IIT Delhi, and I actively participate in innovation-driven competitions. As the ACM SIG Coordinator for Data Science, I aim to foster technical learning and collaborative growth within the ACM chapter.",
        achievements: "The seminar on “Technical Debt in Machine Learning Systems” featuring Uday Shaw, Senior Data Engineer at Xperi, organized by ACM Data Science SIG to promote industry-academia interaction and deepen members' understanding of ML system design challenges. 1. Led the development of JAWAAN, an award-winning AI-powered soldier safety and surveillance system, which secured the Winner position at Smart Bengal Hackathon 2025 and 2nd Runner-Up at IIT Bhubaneswar’s Code Relay 3.0. 2. Selected as a Research Intern at IIT Roorkee and IIT Delhi, where I contributed to trajectory prediction using hybrid deep learning models and tree canopy segmentation usingYOLOv8 and UNet, respectively. 3. Published 4 papers in reputed international conferences (IEEE CIACON, CONFLUENCE, ICCIDS, ICIVC) on topics including forest fire detection, drone-based emergency response, and ML-driven agriculture and healthcare. 4. Achieved 1st Runner-Up at EXCAVATE, IIT Kharagpur and Winner at KRACKHACK, IIT Mandi for developing innovative machine learning and smart traffic management systems. 5. Maintained an academic CGPA of 9.77 till the 3rd year, with consistent top performance across semesters.",
        socials: [
            {
                name: "Email",
                url: "mailto:atyasha.bhattacharyya.ds26@heritageit.edu.in",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/atyasha-bhattacharyya-025780214",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/atyasha2054",
                icon: "Github"
            }
        ]
    },
    {
        id: 15,
        type: "student",
        name: "Shuvayu Dasgupta",
        roleAtACMHITK: "SIG-AIML",
        roleAtHITK: "4th year CSE(AIML)",
        image: "/Shuvayu-Dasgupta.png",
        bio: "I am currently interested in deep learning, LLMs, Agentic AI. In my previous capacity as Assistant Treasurer of ACM-HITK, I was responsible for looking into the finances for various events and helped organize SIG-AIML events. This time I am looking forward to continue the latter.",
        achievements: "Interned at DRDO, Microsoft certified Azure Data Scientist Associate and AI engineer.",
        socials: [
            {
                name: "Email",
                url: "mailto:shuvayudasgupta91004@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/shuvayu-dasgupta-b0821a281",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/Shuvayu12",
                icon: "Github"
            }
        ]
    },
    {
        id: 16,
        type: "student",
        name: "Sohon Ganguly",
        roleAtACMHITK: "Board Member",
        roleAtHITK: "2nd Year CSE",
        image: "/Sohon-Ganguly.png",
        bio: "Hi, I’m Sohon, a Computer Science undergrad with a deep interest in technology, creative writing, and art. I enjoy blending creativity with logic, whether it’s coding in C, exploring fintech, or contributing to tech communities like ACM through engaging and meaningful initiatives.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:sohan.ganguly.cse28@heritageit.edu.in",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sohon-ganguly-44b508313",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 17,
        type: "student",
        name: "Ankita Roy",
        roleAtACMHITK: "Board-Member (SIG-AIML)",
        roleAtHITK: "4th Year CSE(AIML)",
        image: "/Ankita-Roy.jpg",
        bio: "I am keenly interested in machine learning and computational mathematics. I love reading books, both fiction and non fiction.",
        achievements: "I presented our HITK ACM Student Chapter at the ACM Winter Meet at TCS, Kolkata. I have also held hands-on session on building your own chatbot alond with my mates.",
        socials: [
            {
                name: "Email",
                url: "mailto:roy864ankita@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ankita-roy-399367319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 18,
        type: "student",
        name: "Anwesha Goswami",
        roleAtACMHITK: "Board Member",
        roleAtHITK: "4th Year CSE",
        image: "/Anwesha-Goswami.jpg",
        bio: "I am a full stack web developer and also an ML enthusiast. I have built web apps and trained my own ML models. I have done my summer internship from Centre for Railway Information Systems (CRIS) as a web developer. I am currently doing a research internship from IIEST Shibpur where I am working with NLP, CNN and other ML models. I have served as ACM-HITK's Vice Chair in the academic year 2024-2025 and coordinated to conduct different events. I look forward to substantially contribute to the ACM-HITK Student Chapter in this academic year also.",
        achievements: "Organized and volunteered ACM-HITK's event Brainstorm’25 I have worked on a research paper- \"Sustainable UAV-Assisted Data Collection in Wireless Sensor Networks Using Renewable Energy and Wireless Charging Platforms\" which has been presented at the 12th International Conference on Signal Processing and Integrated Networks (SPIN 2025) organized by Amity University, Noida.",
        socials: [
            {
                name: "Email",
                url: "mailto:goswamianwesha16@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anwesha-goswami-388119282",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/anweshagoswami",
                icon: "Github"
            }
        ]
    },
    {
        id: 19,
        type: "student",
        name: "Yogesh Kumar",
        roleAtACMHITK: "Board-Member",
        roleAtHITK: "2nd Year CSE",
        image: "/Yogesh-Kumar.jpg",
        bio: "I create AI automations. Python is my first love. Talk to me about LLMs, agents, mcp",
        achievements: "Yogesh stood 3rd in ACM brainstorm'25, 1st in Ideatex 2025 in session zero by GDGHITK and is a SIH 24 Finalist",
        socials: [
            {
                name: "Email",
                url: "mailto:fbyogesh111@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yogesh-kumar-299298260/",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/Coden-inja",
                icon: "Github"
            },
            {
                name: "Website",
                url: "https://yogesh-portfolio-nu-swart.vercel.app/",
                icon: "Globe"
            }
        ]
    },
    {
        id: 20,
        type: "student",
        name: "Debeshee Sen",
        roleAtACMHITK: "Board Member",
        roleAtHITK: "3rd Year CSE",
        image: "/Debeshee-Sen.png",
        bio: "I’m an aspiring Software Engineering and Data Science student at Heritage Institute of Technology, Kolkata. My primary focus lies in Machine Learning, Deep Learning, and the mathematical foundations of ML, where I enjoy solving complex, data driven problems. I also have experience in Full-Stack Web Development, enabling me to build scalable and practical end-to-end solutions. While constantly learning and exploring, I aim to combine strong problem-solving skills with modern technologies to create impactful projects. As a board member of the ACM HITK Chapter, I am committed to driving meaningful contributions in the field of ML and Data Science, while actively organizing and planning impactful events to take the chapter to greater heights.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:debeshee.sen.cse27@heritageit.edu.in",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/debeshee-sen-31857527a",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/DebesheeSen",
                icon: "Github"
            }
        ]
    },
    {
        id: 21,
        type: "student",
        name: "Ankan Das",
        roleAtACMHITK: "Board-Member, Event Planning",
        roleAtHITK: "3rd Year CSE Student",
        image: "/Ankan-Das.png",
        bio: "I’m Ankan Das, a data science enthusiast with a strong interest in helping fellow students explore advanced concepts in the field. Currently, I contribute to event planning and coordination within our ACM chapter at HITK, aiming to create engaging and impactful learning experiences for the community.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:ankandas2@acm.org",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ankan-das-551916204/",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 22,
        type: "student",
        name: "Anushka Nath",
        roleAtACMHITK: "Board Member",
        roleAtHITK: "4th Year CSE",
        image: "/Anushka-Nath.png",
        bio: "Enthusiastic web developer interested in neural networks like to read psychological thrillers",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:anushka.nath.cse26@heritageit.edu.in",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anushka-nath-574427263",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/anushkanath09",
                icon: "Github"
            }
        ]
    },
]

export const alumni: TeamMember[] = [
    {
        id: 0,
        type: "alumni",
        name: "Dr. Sabyasachee Banerjee",
        roleAtACMHITK: "Faculty Sponsor(2018-2025)",
        roleAtHITK: "Assistant Professor, Department of Computer Science and Engineering",
        currentRole: "Assistant Professor, Department of Computer Science and Engineering",
        image: "/Dr-Sabyasachi-Banerjee.jpg",
        bio: `Sabyasachee Banerjee (Dr.) is an Assistant Professor in the Department of Computer Science and Engineering at Heritage Institute of Technology, Kolkata. He holds a Ph.D. in Computer Science & Engineering from Jadavpur University, with research focused on layout optimization, thermal issues, and testing of 3D Integrated Circuits. With over a decade of teaching experience, he has guided multiple undergraduate and postgraduate projects, resulting in several international publications. Dr. Banerjee has served as a reviewer for reputed journals, coordinated academic events as the faculty sponsor of the ACM Student Chapter at HITK. His research interests include 3D SoC design and testing, VLSI design automation, and optimization algorithms.`,
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:sabyasachi.banerjee@heritageit.edu",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/dr-sabyasachee-banerjee-13578319",
                icon: "Linkedin"
            },
            {
                name: "GitHub",
                url: "https://github.com/sabyasachee-banerjee",
                icon: "Github"
            }
        ]
    },
    {
        id: 1,
        type: "alumni",
        name: "Agnish Ghosh",
        roleAtACMHITK: "Webmaster(2022-2023)",
        roleAtHITK: "CSE'24",
        currentRole: "Contributor/Maintainer at the Ethereum Foundation and Ethereum Core Developer at Status",
        image: "/Agnish-Ghosh.png",
        bio: `Agnish Ghosh is a highly accomplished individual, distinguished by his profound expertise and dedication to advancing the Ethereum ecosystem. He possesses extensive experience in cutting-edge blockchain development, intricate cryptography, and robust decentralized systems. His comprehensive skill set ranges from optimizing cryptographic primitives vital for Ethereum upgrades to spearheading the implementation of critical protocol improvements. He graduated from Heritage Institute of Technology, Kolkata with a B.Tech in CSE in 2024.`,
        achievements: `As a Contributor/Maintainer on the c-kzg-4844 cryptography team at the Ethereum Foundation, he developed computationally fast and low-memory overhead cryptography for verifying blobs and data columns, crucial for Ethereum client teams and ensuring backward compatibility for Deneb and Peerdas upgrades. 
        As an Ethereum Core Developer at Status, he is instrumental in achieving statelessness by migrating Ethereum from Merkle trees to Verkle trees, and is the sole project owner and programmer of Nimbus Ethereum CL’s Peerdas implementation, a key upgrade for optimizing blob transactions expected with the Fusaka hard fork. He contributed to Rollups as a Service and explored secure privacy-preserving groups on EVM chains as a Software Engineer - Blockchain & Cryptography at BaseLayer. At Cipherem, he focused on EVM Equivalent zkRollups and finding solutions for Ethereum infrastructure as a Research And Development Engineer, and was involved in building a self-sovereign social network as a Blockchain Developer. He completed a 5-month internship as a Protocol Fellow at Ethereum and was a Devconnect Scholarship Recipient. He co-founded and led R&D at Metafy. He served as Webmaster for the ACM chapter at HITK and held the position of Technical Lead at Google Developer Students'​ Club HIT. As an Undergraduate Student Researcher at the Indian Association for the Cultivation of Science, his research included prompt generation for Zero-Shot Relation Extraction and Contrastive Learning in Distantly Supervised Named Entity Relation Extraction, applying NLP principles like Coreferencing and developing optimized O(n) clustering algorithms that reduced time in establishing inter-sentence relations by 96%. He also worked as a Campus Builder for Binance. He co-founded and developed the backend for an app aimed at verifying and providing COVID-19 resources as a Co-Founder and Backend Developer at Kolkata Covid Resources. As an SDE Intern at Coinhunt.cc, he worked on a randomized rendering algorithm in React.js, improving rendering latencies by 80%, and built a crypto-payments gateway by integrating APIs from Metamask, Phantom Wallet, and Coinbase, optimizing user payment experience by 75%.`,
        socials: [
            {
                name: "Email",
                url: "mailto:iamagnix@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: 'https://www.linkedin.com/in/agnish-ghosh-15902a211/',
                icon: "Linkedin"
            },
            {
                name: "Website",
                url: "https://www.agnish.in/",
                icon: "Globe"
            }
        ]
    },
    {
        id: 2,
        type: "alumni",
        name: "Ashmi Banerjee",
        roleAtACMHITK: "Webmaster(2014-15), Chair (2015-16)",
        roleAtHITK: "CSE'16",
        currentRole: "PhD Student at Technical University Munich",
        image: "/Ashmi-Banerjee.jpg",
        bio: "CSE 2016 batch, MSc TU Munich 2019, ongoing PhD at TUM",
        achievements: `https://ashmibanerjee.com/#awards`,
        socials: [
            {
                name: "Email",
                url: "mailto:ashmi.banerjee@tum.de",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ashmi-banerjee/",
                icon: "Linkedin"
            },
            {
                name: "Website",
                url: "https://ashmibanerjee.com",
                icon: "Globe"
            }
        ]
    },
    {
        id: 3,
        type: "alumni",
        name: "Protyasha Kundu",
        roleAtACMHITK: "Chair & Treasurer(2023-2025)",
        roleAtHITK: "CSE'24",
        currentRole: "MTech Student at ISI Kolkata",
        image: "/Protyasha-Kundu.jpg",
        bio: `I am Protyasha Kundu. I am currently pursuing MTech in Cryptology and Security at ISI Kolkata. I have major interest in Networks and Network Security System. From July 2024 till March 2025 i was working for Ernst & Young as a Senior Analyst in Tech Consulting for GPS service line. I am a 2024 graduate from Heritage Institute of Technologym, Kolkata.`,
        achievements: `She was honored with the Best Paper Award at ICISS 2024. Academically, she performed exceptionally well, ranking in the Top 11 in the TIFR GS exam in 2025 and securing the 3rd position in the CSE 2020 Batch at HITK.For ACM HITK, she has been actively involved in organizing and hosting numerous successful events. These include multiple guest lectures featuring prominent speakers such as Chandra Shekhar Mukherjee, Asmita Banerjee, and Prof. Sourav Chakraborty. Additionally, she played a key role in organizing the TechQuiz under the ACM HITK Student Chapter.`,
        socials: [
            {
                name: "Email",
                url: "mailto:protyashakundu12901@gmail.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/mwlite/profile/in/protyasha-kundu-69744a214/",
                icon: "Linkedin"
            }
        ]
    },
    {
        id: 4,
        type: "alumni",
        name: "Swapnil Aichbhaumik",
        roleAtACMHITK: "Board-Member, Joint Secretary, Treasurer(2022-2025)",
        roleAtHITK: "CSE'25",
        currentRole: "Associate Software Engineer at EY GDS",
        image: "/Swapnil-Aichbhaumik.jpg",
        bio: `Swapnil Aichbhaumik is a Computer Science and Engineering graduate with a primary focus on Product Engineering and Development. He gained practical experience as a Product Engineering Intern at SETV Global and is currently serving as an Associate Software Engineer at EY GDS.`,
        achievements: `For ACM HITK, he organized Brainstorm '23 and Tech quiz' 23`,
        socials: [
            {
                name: "Email",
                url: "mailto:Swapnil.Aichbhaumik@gds.ey.com",
                icon: "Mail"
            },
            {
                name: "LinkedIn",
                url: `http://www.linkedin.com/in/swapnil-aichbhaumik-28a980224`,
                icon: "Linkedin"
            },
            {
                name: "Github",
                url: "https://github.com/Swap-nil-2003",
                icon: "Github"
            }
        ]
    }
]
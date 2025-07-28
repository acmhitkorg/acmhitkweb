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
export const currentTeam = {
    facultySponsor: {
        name: "Dr. Anurina Tarafdar",
        roleAtACMHITK: "Faculty Sponsor",
        roleAtHITK: "Assistant Professor, Department of Computer Science & Engineering",
        image: "/arurina_tarafdar.jpeg",
        bio: "Anurina Tarafdar is currently working as an Assistant Professor in the Department of Computer Science and Engineering at Heritage Institute of Technology, Kolkata. Prior to this she was an UGC-NET Senior Research Fellow and PhD Scholar in the Department of Computer Science and Engineering, University of Calcutta. Her domain of research is resource management in the Cloud environment. She is a Machine Learning and Cloud Computing enthusiast. She is a Gold medalist in M.Tech. from the University of Calcutta.",
        socials: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anurina-tarafdar/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/anurina-tarafdar",
                icon: <Github className="h-4 w-4" />
            }, {
                name: "Email",
                url: "mailto:anurina.tarafdar@heritageit.edu.in",
                icon: <Mail className="h-4 w-4" />
            }, {
                name: "Website",
                url: "https://anurina-tarafdar.github.io/",
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    boardMembers: [
        {
            name: "Arjun Sharma",
            roleAtACMHITK: "Chapter Chair",
            roleAtHITK: "Computer Science Student",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
            bio: "Final year Computer Science student passionate about AI/ML and community building. Leading ACM HITK towards innovation and excellence.",
            socials: [
                { name: "Email", url: "mailto:chair@acmhitk.org", icon: <Mail className="h-4 w-4" /> },
                { name: "LinkedIn", url: "#", icon: <Linkedin className="h-4 w-4" /> },
                { name: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
                { name: "Website", url: "#", icon: <Globe className="h-4 w-4" /> }
            ]
        },
        {
            name: "Priya Patel",
            roleAtACMHITK: "Vice Chair",
            roleAtHITK: "IT Student",
            image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
            bio: "Third year IT student with expertise in web development and project management. Coordinating chapter activities and member engagement.",
            socials: [
                { name: "Email", url: "mailto:vicechair@acmhitk.org", icon: <Mail className="h-4 w-4" /> },
                { name: "LinkedIn", url: "#", icon: <Linkedin className="h-4 w-4" /> },
                { name: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
                { name: "Website", url: "#", icon: <Globe className="h-4 w-4" /> }
            ]
        },
        {
            name: "Rohit Kumar",
            roleAtACMHITK: "Secretary",
            roleAtHITK: "Computer Science Student",
            image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
            bio: "Computer Science student specializing in cybersecurity and system administration. Managing chapter documentation and communications.",
            socials: [
                { name: "Email", url: "mailto:secretary@acmhitk.org", icon: <Mail className="h-4 w-4" /> },
                { name: "LinkedIn", url: "#", icon: <Linkedin className="h-4 w-4" /> },
                { name: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
                { name: "Website", url: "#", icon: <Globe className="h-4 w-4" /> }
            ]
        },
        {
            name: "Sneha Gupta",
            roleAtACMHITK: "Treasurer",
            roleAtHITK: "IT Student",
            image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
            bio: "IT student with strong analytical skills and financial management experience. Overseeing chapter finances and budget planning.",
            socials: [
                { name: "Email", url: "mailto:treasurer@acmhitk.org", icon: <Mail className="h-4 w-4" /> },
                { name: "LinkedIn", url: "#", icon: <Linkedin className="h-4 w-4" /> },
                { name: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
                { name: "Website", url: "#", icon: <Globe className="h-4 w-4" /> }
            ]
        },
        {
            name: "Vikash Singh",
            roleAtACMHITK: "Technical Lead",
            roleAtHITK: "Computer Science Student",
            image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
            bio: "Full-stack developer and open source contributor. Leading technical workshops and hackathon organization.",
            socials: [
                { name: "Email", url: "mailto:tech@acmhitk.org", icon: <Mail className="h-4 w-4" /> },
                { name: "LinkedIn", url: "#", icon: <Linkedin className="h-4 w-4" /> },
                { name: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
                { name: "Website", url: "#", icon: <Globe className="h-4 w-4" /> }
            ]
        },
        {
            name: "Ananya Das",
            roleAtACMHITK: "Event Coordinator",
            roleAtHITK: "Computer Science Student",
            image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
            bio: "Computer Science student with excellent organizational skills. Planning and executing chapter events and workshops.",
            socials: [
                { name: "Email", url: "mailto:events@acmhitk.org", icon: <Mail className="h-4 w-4" /> },
                { name: "LinkedIn", url: "#", icon: <Linkedin className="h-4 w-4" /> },
                { name: "GitHub", url: "#", icon: <Github className="h-4 w-4" /> },
                { name: "Website", url: "#", icon: <Globe className="h-4 w-4" /> }
            ]
        }
    ]
}
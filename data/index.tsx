import { TeamMember } from "@/types";
import { Users, BookOpen, Award, Heart, Code, Lightbulb, Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Github, Globe, Download, ExternalLink, Laptop, Brain, Database, Shield, Facebook, Youtube, BookOpenText, Link } from "lucide-react"

// Data for / page
export const upcomingEventsForHomePage = [
    {
        title: "The Program That Can't Be Written: Understanding the Halting Problem",
        date: "August 2025",
        time: "To be announced",
        location: "To be announced",
        description: "An interactive workshop session exploring the fascinating concept of the Halting Problem in computer science.",
        type: "Workshop"
    },
    {
        title: "Bug Bash",
        date: "August 2025",
        time: "To be announced",
        location: "To be announced",
        description: "A solo debugging and code refactoring challenge, ending with a live Glitch Boss round to test real-time problem-solving efficiency.",
        type: "Competition"
    },
    {
        title: "BrainByte Tech Talk & Quiz",
        date: "September 2025",
        time: "To be announced",
        location: "To be announced",
        description: `A tech talk by an ACM delegate,
followed by an interactive quiz
session led by an eminent person
from the industry, around
September.`,
        type: "Seminar"
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
        title: "The Program That Can't Be Written: Understanding the Halting Problem",
        date: "August 2025",
        time: "To be announced",
        location: "To be announced",
        type: "Workshop",
        description: "An interactive workshop session exploring the fascinating concept of the Halting Problem in computer science. This session will help participants understand one of the fundamental limits of computation.",
        speaker: "To be announced",
        capacity: "50 participants",
        status: "Coming Soon"
    },
    {
        id: 2,
        title: "Bug Bash",
        date: "August 2025",
        time: "To be announced",
        location: "To be announced",
        type: "Competition",
        description: "A solo debugging and code refactoring challenge that tests your problem-solving skills under pressure. The event will conclude with a live Glitch Boss round where participants will need to fix bugs in real-time.",
        speaker: "To be announced",
        capacity: "30 participants",
        status: "Coming Soon"
    },
    {
        id: 3,
        title: "BrainByte Tech Talk & Quiz",
        date: "September 2025",
        time: "To be announced",
        location: "To be announced",
        type: "Seminar",
        description: "A tech talk by an ACM delegate, followed by an interactive quiz session led by an eminent person from the industry, around September.",
        speaker: "To be announced",
        capacity: "150 participants",
        status: "Coming Soon"
    },
    {
        id: 4,
        title: "CodeSprint 1.0",
        date: "October 2025",
        time: "To be announced",
        location: "To be announced",
        type: "Competition",
        description: "A fast-paced solo DSA showdown where coders race against time to crack algorithmic challenges. Test your problem-solving speed and accuracy in this exciting competition.",
        speaker: "To be announced",
        capacity: "100 participants",
        status: "Coming Soon"
    },
    {
        id: 5,
        title: "Idea Storm",
        date: "February 2026",
        time: "To be announced",
        location: "To be announced",
        type: "Ideathon",
        description: "A high-energy ideathon where participants pitch innovative ideas and battle for the spotlight. Bring your creativity and problem-solving skills to the table!",
        speaker: "To be announced",
        capacity: "20 teams",
        status: "Coming Soon"
    },
    {
        id: 6,
        title: "Code & Clue: ACM Tech Treasure Hunt",
        date: "February 2026",
        time: "To be announced",
        location: "To be announced",
        type: "Competition",
        description: "A coding and puzzle-based treasure hunt combining logic, encryption, and problem-solving. Teams of 3-5 will compete across various checkpoints leading to an exciting finale. An offline workshop may be included to prepare participants.",
        speaker: "To be announced",
        capacity: "15 teams",
        status: "Coming Soon"
    },
    {
        id: 7,
        title: "Distinguished Speaker Tech Talk",
        date: "March 2026",
        time: "To be announced",
        location: "To be announced",
        type: "Seminar",
        description: "An engaging session featuring an industry expert sharing insights on emerging technologies and current industry trends. This talk aims to inspire students and provide valuable career guidance.",
        speaker: "To be announced",
        capacity: "200 participants",
        status: "Coming Soon"
    }
];

export const pastEvents = [
    // 2025 Events
    {
        id: 1,
        title: "The celebrated birthday problem",
        date: "August 8, 2024",
        type: "Seminar",
        description: "Introduction to Python programming for beginners.",
        abstract: `"Birthday Paradox and its Algorithmic Applications" by Dr. Bhaswar B.
Bhattacharya Abstract: What is the chance that among a group of friends, at least
2 of them have the same birthday? This is the celebrated birthday problem, which
connects many seemingly disparate problems both within and beyond
mathematics. In this talk, we will discuss different variations of the birthday
paradox and their applications in computer science, specifically distributional
property testing and computation of discrete logarithms. (ii)"God Forever
Geometrizes" by Dr. Bhargab B. Bhattacharya Abstract: As Plato observed, nature
is governed by the eternal laws of geometry. In this talk, we show some
fascinating examples to demonstrate how geometry manifests in physics and in
ancient architectures. Next, from the perspective of computational geometry, we
demystify the problem of cutting a pizza or a sandwich. Finally, we demonstrate
how 2D point-set polygonization yields assistance to differently-abled persons.`,
        attendees: 82,
        speaker: "Dr. Bhaswar B. Bhattacharya",
        location: "THA Hall, Heritage Academy",
        photos: []
    },
    {
        id: 2,
        title: "God Forever Geometrizes",
        date: "August 8, 2024",
        type: "Seminar",
        description: "Programming contest focusing on DSA problem-solving.",
        abstract: `As Plato observed, nature is governed by the eternal laws of geometry.
In this talk, we show some fascinating examples to demonstrate how geometry
manifests in physics and in ancient architecture. Next, from the perspective of
computational geometry, we demystify the problem of cutting a pizza or a
sandwich. Finally, we demonstrate how 2D point-set polygonization yields
assistance to differently-abled persons.`,
        attendees: 82,
        speaker: "Dr. Bhargab B. Bhattacharya",
        location: "THA Hall, Heritage Academy",
        photos: []
    },
    {
        id: 3,
        title: " Technical Debt in Machine Learning Systems",
        date: "September 4, 2024",
        type: "Seminar",
        description: "Flutter and React Native development session.",
        abstract: `In the context of software development, technical debt relates to the
cost of refactoring or rework in the future that arises out of the prioritization of
immediate expedience over long-term design. This talk discusses the accrual
and management of technical debt in machine learning systems.`,
        attendees: 36,
        speaker: "Uday Shaw",
        location: "ICT Building",
        photos: []
    },
    {
        id: 4,
        title: `Evaluation of Large Language Models: The Good, The Bad, and The
Opportunities`,
        date: "Auguest 4, 2023",
        type: "Seminar",
        description: "Hands-on training in modern web development technologies.",
        abstract: ` The recent sensation ChatGPT, powered by large language models
(LLM) can be used to mimic a human conversationalist, ChatGPT is versatile.
Among countless examples, it can write and debug computer programs,
compose music, teleplays, fairy tales, and student essays, answer test questions,
etc. It is an open issue: How can deep learning be incorporated to make it more
efficient and reduce its drawbacks?`,
        attendees: 100,
        speaker: "",
        location: "CS Department Lab",
        photos: []
    },
    {
        id: 5,
        title: "Semiconductors to AI: Shaping Our Digital Future",
        date: "August 8, 2023",
        type: "Seminar",
        description: "Exploring the latest trends in artificial intelligence.",
        abstract: ` The talk begins with the evolution of computers and the synergistic
roles played by the twin disciplines of electronics engineering and computer
science and how that synergy brought computers to its all-pervasive present
state. After showing the spectacular growth of semiconductor devices and the
ubiquitous nature of this technology, the talk hints at how this growth fuelled
renewed interest in artificial intelligence and machine learning and the revolution
that we all are currently witnessing because of that. In particular, the discourse
shows the current advances in natural language processing and its potential
impact on our everyday life. The talk concludes by showing some of those
impacts of AI/ML and their possible far-reaching effects on our society ? both
good and adverse.`,
        attendees: 23,
        speaker: "",
        location: "Main Auditorium",
        photos: []
    },
    {
        id: 6,
        title: "Recommender Systems: Your Fairy Godmother of Choices",
        date: "September 27, 2023",
        type: "Seminar",
        description: `Have you ever wondered how online platforms magically suggest
products, movies, or music that seem tailor-made for you? It's not magic; it's the
power of Recommender Systems (RS). Join us in this informative and hands-on
session as we demystify the world of RS and learn how these digital fairy
godmothers work their magic to enhance user experiences. In the first part of our
talk, we'll dive deep into the world of Recommender Systems, shedding light on
their applications, workings, and various types. You'll gain a comprehensive
understanding of the foundations of RS, setting the stage for your journey into
the world of personalized recommendations. In the second part, get ready to put
your knowledge to the test as we guide you through the process of building a
simple RS model. We'll use a user-friendly framework, making it accessible to
everyone. We'll share practical tips and best practices to help you fine-tune your
RS and ensure it provides meaningful recommendations. Join us for this exciting
journey into the world of Recommender Systems, and discover how they can be
your own fairy godmother of choices, making every digital interaction feel like it
was designed just for you.`,
        attendees: 47,
        speaker: "",
        location: "Main Auditorium",
        photos: []
    },
    {
        id: 7,
        title: "Computability and Complexity Theory - A Brief Introduction",
        date: "December 14, 2023",
        type: "Workshop",
        description: "Practical cybersecurity skills and ethical hacking techniques.",
        abstract: `What does it mean for something to be computable? What are some of
the mathematical properties of general-purpose computers? What are their
limitations? These are typical questions that are of interest to computability
theorists. In this talk, we shall discuss answers to some of these questions and
more. We shall also discuss some common results of Complexity Theory, by
applying some space/time restriction on our model of computation.`,
        attendees: 20,
        speaker: "",
        location: "Security Lab",
        photos: []
    },
    {
        id: 8,
        title: "Brain Research - Implications in Science, Engineering and Society",
        date: "February 9, 2024",
        type: "Seminar",
        description: "48-hour coding competition for innovative tech solutions.",
        abstract: `The brain is one of the most connected organs of an organism. It
directly connects to all the organs through a network of neurons. The brain
interacts with the body through a combination of electrochemical and chemical
processes. The brain also controls the body indirectly through hormones and
neuropeptides. Similarly, the body also controls the brain by modulating its
function through indirect and direct means. Besides, the brain is at the center of
self-awareness and societal organization. All these require highly complex,
real-time data processing and decision-making system. How does the brain
manage it? Although the answer is not as simple as the question, neuroscience
research does, however, clarify a great deal about controlling, modifying, and
mimicking some of the brain functions in artificial systems. Understanding the
brain involves a range of disciplines ranging from genetics and psychology to
computer science.`,
        attendees: 45,
        speaker: "Various Industry Experts",
        location: "Innovation Center",
        photos: []
    },
    {
        id: 9,
        title: "Solving the Classic Distinct Element Problem with a Strikingly Simple Algorithm that Captivated Donald Knuth",
        date: "April 15, 2024",
        type: "Workshop",
        description: "Introduction to blockchain technology and smart contracts.",
        abstract: `We will present a very simple streaming algorithm on F_0 estimation
that also caught the eye of Donald E. Knuth. In a recent article, Donald E. Knuth
started with the following two paragraphs: "Sourav Chakraborty, N. V.
Vinodchandran, and Kuldeep S. Meel have recently proposed an interesting
algorithm for the following problem: A stream of elements (a1, a2,..., am) is
input, one at a time, and we want to know how many of them are distinct. In
other words, if A = {a1, a2,..., am} is the set of elements in the stream, with
multiplicities ignored, we want to know |A|, the size of that set. But we don?t
have much memory; in fact, |A| is probably a lot larger than the number of
elements that we can hold in memory at any one time. What is a good strategy for
computing an unbiased estimate of |A|? Their algorithm is not only interesting, it
is extremely simple. Furthermore, it?s wonderfully suited to teaching students
who are learning the basics of computer science. (Indeed, ever since I saw it, a
few days ago, I?ve been unable to resist trying to explain the ideas to just about
everybody I meet.) Therefore I?m pretty sure that something like this will
eventually become a standard textbook topic. This note is an initial
approximation to what I might write about it if I were preparing a textbook about
data streams."`,
        attendees: 15,
        speaker: "",
        location: "Blockchain Lab",
        photos: []
    },
    {
        id: 10,
        title: "Generative A.I. workshop",
        date: "April 16, 2024",
        type: "Workshop",
        description: "Learn how to contribute to open source projects.",
        abstract: `Program Overview 1. Understanding the broad view of Generative AI 2.
Addressing the Fear 3. Types of Generative AI architectures 4. LLM and LIM 5.
Building an AI tool (Using Hugging Face) 6. QnA`,
        attendees: 10,
        speaker: "Open Source Community Leaders",
        location: "CS Department Lab",
        photos: []
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
        color: "from-blue-500 to-cyan-500"
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
        name: "Prof. (Dr.) Subhashis Majumder",
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sagnik-pramanik/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/sagnik-p",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/aryan-ghosh-83a26631b",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/Aryan-Ghosh-Code",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/mohak-sarkar-b0522a303/",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/rohit-kumar-dey-3856891a5/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/rohits-web03",
                icon: <Github className="h-4 w-4" />
            },
            {
                name: "Website",
                url: "https://rohitdev-psi.vercel.app/",
                icon: <Globe className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/koushiki-das-572b50289/",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            }
        ]
    },
    {
        id: 9,
        type: "student",
        name: "Souryadip Mallick",
        roleAtACMHITK: "Board Member",
        roleAtHITK: "3rd Year CSE Student",
        image: "/Souryadip-Mallick.jpg",
        bio: "Computer Science undergraduate at Heritage Institute of Technology with a passion for full-stack web development and programming in Java, C++, Python, and JavaScript. My fields of interest are Data Science and Machine Learning, which I’m currently exploring, and I’m also strengthening my problem-solving skills through Data Structures and Algorithms.",
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:souryadipmallick@gmail.com",
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/souryadip-mallick-03b303294",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/souryadip-official",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/shambaditya-sarkar-929443317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/debajit-guha-77a0ab28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/mehul-roy-319b58323",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sneha-lahiri-11753b22a",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/Sana9909",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/atyasha-bhattacharyya-025780214",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/atyasha2054",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/shuvayu-dasgupta-b0821a281",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/Shuvayu12",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sohon-ganguly-44b508313",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ankita-roy-399367319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anwesha-goswami-388119282",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/anweshagoswami",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yogesh-kumar-299298260/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/Coden-inja",
                icon: <Github className="h-4 w-4" />
            },
            {
                name: "Website",
                url: "https://yogesh-portfolio-nu-swart.vercel.app/",
                icon: <Globe className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/debeshee-sen-31857527a",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/DebesheeSen",
                icon: <Github className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ankan-das-551916204/",
                icon: <Linkedin className="h-4 w-4" />
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anushka-nath-574427263",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/anushkanath09",
                icon: <Github className="h-4 w-4" />
            }
        ]
    },
]

export const pastMembers: TeamMember[] = [
    {
        id: 1,
        type: "alumni_faculty",
        name: "Dr. Dinabandhu Bhandari",
        roleAtACMHITK: "Faculty Sponsor(2015-2016)",
        roleAtHITK: `Professor in the Department of Computer Science and
Engineering (July 2013 - Present). Previously Associate
Professor (January 2013 - June 2017).`,
        currentRole: "Professor, Department of Computer Science and Engineering, HITK",
        image: "/Dr-Dinabandhu-Bhandari.jpeg",
        bio: `Dr. Dinabandhu Bhandari has accumulated over 30 years of experience in academia and industry. His professional journey includes tenures at Heritage Institute of Technology, Indian Statistical Institute, TCS, Capgemini, and Cognizant. He specializes in Soft Computing, Pattern Recognition, and Machine Learning. Dr. Bhandari holds a PhD and M.Tech in Computer Science from Jadavpur University.`,
        achievements: `Served as a technical consultant implementing intelligent systems. Developed innovative methodologies for article/book structuring and mining sector solutions. Authored research papers with over 1,600 Google Scholar citations. Ranked #1 in citations at HITK by AD Scientific Index.`,
        socials: [
            {
                name: "Email",
                url: "mailto:dinabandhu.bhandari@heritageit.edu",
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://in.linkedin.com/in/dinabandhu-bhandari-22b68111",
                icon: <Linkedin className="h-4 w-4" />
            }, {
                name: 'Website',
                url: 'https://www.researchgate.net/profile/Dinabandhu-Bhandari',
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    {
        id: 2,
        type: "alumni_faculty",
        name: "Dr. Partha Basuchowdhuri",
        roleAtACMHITK: "Faculty Sponsor(2016-2018)",
        roleAtHITK: `Assistant Professor (June 2010 - June 2018), Associate
Professor (July 2018 - June 2019) in the Dept. of Computer
Science and Engineering. Founding faculty sponsor of the
ACM student chapter at HITK.`,
        currentRole: "Associate Professor, School Chair @ School of Mathematical and Computational Sciences, Indian Association for the Cultivation of Science, Kolkata",
        image: "/Dr-Partha-Basuchowdhuri.png",
        bio: `Dr. Partha Basuchowdhuri holds Bachelor's, Master's, and PhD degrees from IIEST Shibpur, Louisiana State University, and Jadavpur University, respectively. His research at HITK focused on social network analysis and data mining. He completed post-doctoral tenures at Queen's University Belfast and the Digital Enterprise Research Institute (DERI) in Ireland. Currently, he serves as an Associate Professor and School Chair at the Indian Association for the Cultivation of Science (IACS).`,
        achievements: `Led the DBT-VInnova project titled "AI-based Detection of Acute Respiratory Distress Syndrome (AI-DARDS)" with a 25 Lakh grant for IACS. Received the Best Teaching Award at Heritage Institute of Technology in 2015. Published in PAKDD, ASONAM, CoDS-COMAD, KAIS, IEEE Transactions on Big Data, and Innovations in Systems and Software Engineering. Awarded US National Science Foundation funding for Master's thesis research.`,
        socials: [
            {
                name: "Email",
                url: "mailto:partha.basuchowdhuri@iacs.res.in",
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://in.linkedin.com/in/partha-basuchowdhuri-44043a126",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Website",
                url: "https://www.researchgate.net/profile/Partha-Basuchowdhuri",
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    {
        id: 3,
        type: "alumni_faculty",
        name: "Dr. Sabyasachee Banerjee",
        roleAtACMHITK: "Faculty Sponsor(2018-2025)",
        roleAtHITK: "Assistant Professor, Department of Computer Science and Engineering",
        currentRole: "Assistant Professor, Department of Computer Science and Engineering, HITK",
        image: "/Dr-Sabyasachi-Banerjee.jpg",
        bio: `Sabyasachee Banerjee (Dr.) is an Assistant Professor in the Department of Computer Science and Engineering at Heritage Institute of Technology, Kolkata. He holds a Ph.D. in Computer Science & Engineering from Jadavpur University, with research focused on layout optimization, thermal issues, and testing of 3D Integrated Circuits. With over a decade of teaching experience, he has guided multiple undergraduate and postgraduate projects, resulting in several international publications. Dr. Banerjee has served as a reviewer for reputed journals, coordinated academic events as the faculty sponsor of the ACM Student Chapter at HITK. His research interests include 3D SoC design and testing, VLSI design automation, and optimization algorithms.`,
        achievements: null,
        socials: [
            {
                name: "Email",
                url: "mailto:sabyasachi.banerjee@heritageit.edu",
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/dr-sabyasachee-banerjee-13578319",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Website",
                url: "https://scholar.google.co.in/citations?user=hH3VlT0AAAAJ&hl=en",
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    {
        id: 4,
        type: "alumni_student",
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: 'https://www.linkedin.com/in/agnish-ghosh-15902a211/',
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "GitHub",
                url: "https://github.com/agnxsh",
                icon: <Github className="h-4 w-4" />
            },
            {
                name: "Website",
                url: "https://www.agnish.in/",
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    {
        id: 5,
        type: "alumni_student",
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ashmi-banerjee/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Website",
                url: "https://ashmibanerjee.com",
                icon: <Globe className="h-4 w-4" />
            }
        ]
    },
    {
        id: 6,
        type: "alumni_student",
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/mwlite/profile/in/protyasha-kundu-69744a214/",
                icon: <Linkedin className="h-4 w-4" />
            }
        ]
    },
    {
        id: 7,
        type: "alumni_student",
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
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: `http://www.linkedin.com/in/swapnil-aichbhaumik-28a980224`,
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Github",
                url: "https://github.com/Swap-nil-2003",
                icon: <Github className="h-4 w-4" />
            }
        ]
    },
    {
        id: 8,
        type: "alumni_student",
        name: "Swarnadeep Saha",
        roleAtACMHITK: "Secretary(2023-24). Treasurer(2022-23)",
        roleAtHITK: "CSE'24",
        currentRole: "Mtech(CSE) Student at IIIT Hyderabad",
        image: "/Swarnadeep-Saha.jpg",
        bio: "Deeply curious masters student, looking for novel problems to learn and solve. Interested in solving practical problems with impact on real people. Currently pursuing M.Tech in IIIT Hyderabad (CSE)",
        achievements: `1. Recipient of Reliance Foundation Scholarship awarded to top 100 PG students across the country.
2. Received Best Paper Award in International Conference for publishing novel research.
3. PGEE AIR 5.`,
        socials: [
            {
                name: "Email",
                url: "mailto:swarnadeep0602@gmail.com",
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/spotswan/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Github",
                url: "https://github.com/spotswan",
                icon: <Github className="h-4 w-4" />
            }
        ]
    },
    {
        id: 9,
        type: "alumni_student",
        name: "Upasana Roy",
        roleAtACMHITK: "Chairperson(2024-25) , Vice-Chairperson(2023-24)",
        roleAtHITK: "CSE'25",
        currentRole: "SDE 1, Cozeva - Applied Research Works India Private Limited",
        image: "/Upasana-Roy.jpg",
        bio: `I am currently working as SDE 1 at Cozeva - Applied Research Works India Private Limited. At ACM, I have collaborated with other board members to organize different events like Tech quizzes, Tech Talks, Seminars, Brainstorming events for better Chapter engagement among the students and attended ACM Regional Chapter Meet to represent our HITK ACM chapter.`,
        achievements: "Currently working as SDE 1 at Cozeva - Applied Research Works India Private Limited (from June 2025). There I have contributed to Full stack Projects.Organized several events like Brainstorm'24, Brainstorm'25, etc. Organized Tech Talks about Birthday Paradoxes, God Forever Geometrizes, Unlocking the secret of language with large language models, etc. Represented our HITK chapter at ACM Regional meet 2024. Also presented our chapter to the freshers of our college for increasing engagement.",
        socials: [
            {
                name: "Email",
                url: "mailto:upasanaroy2002@gmail.com",
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/upasana-roy-27874a229",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Github",
                url: "https://github.com/Upasana-Roy",
                icon: <Github className="h-4 w-4" />
            }
        ]
    }, {
        id: 10,
        type: "alumni_student",
        name: "Devjit Sarkar",
        roleAtACMHITK: "Joint Secretary(2024-2025)",
        roleAtHITK: "CSE'26",
        currentRole: "Summer Intern, Hyland",
        image: "/Devjit-Sarkar.jpg",
        bio: "I am a 4th-year Computer Science student currently preparing for my Master's while actively seeking opportunities in the tech industry. As the Joint Secretary of ACM HITK, I contributed by designing event flyers and overseeing the successful execution of Brainstorm 2025. My involvement has helped strengthen the chapter’s outreach and event planning efforts.",
        achievements: `I have achieved four 10.0 SGPAs over six semesters, reflecting my consistent academic performance. I'm currently contributing to a JNI-based reimplementation of the Phoenix OCR engine for text and table extraction—an effort I'm particularly proud of under my internship at Hyland, Kolkata. Additionally, I was part of the winning team at the National Hackathon StatusCode1, hosted by IIIT-Kalyani at IISER-Kolkata, a testament to our teamwork and technical innovation. Winner of ACM's Flagship event BrainStorm in 2023, and 2024`,
        socials: [
            {
                name: "Email",
                url: "mailto:sardevjit7203@gmail.com",
                icon: <Mail className="h-4 w-4" />
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/devjit-sarkar-5185b123b/",
                icon: <Linkedin className="h-4 w-4" />
            },
            {
                name: "Github",
                url: "https://github.com/devjit-sarkar",
                icon: <Github className="h-4 w-4" />
            }
        ]
    }
]

export const testimonials = [
    {
        name: "Swarnadeep Saha",
        image: "/Swarnadeep-Saha.jpg",
        role: "Mtech(CSE) Student at IIIT Hyderabad",
        testimonial: "Learned how to manage different aspects of event organization. Learned how to work closely with professors and other fellow students."
    },
    {
        name: "Upasana Roy",
        image: "/Upasana-Roy.jpg",
        role: "SDE 1, Cozeva - Applied Research Works India Private Limited",
        testimonial: "Being part of the HITK ACM Student Chapter was an incredible journey! Tech talks gave me the chance to interact with professors and researchers, to know the recent trends and developments in the industry and I even got to present my own ideas. From attending events to organizing events myself, the chapter helped me grow both technically and personally. If you’re a member, don’t hold back. Collaborate, lead, speak up, and make the most of every opportunity."
    },
    {
        name: "Devjit Sarkar",
        image: "/Devjit-Sarkar.jpg",
        role: "Summer Intern, Hyland",
        testimonial: "Being part of the HITK ACM Student Chapter was an overall positive and enriching experience. I had the opportunity to witness several inspiring talks and work alongside passionate peers. A fond memory that stands out is Brainstorm 2025, from collaboratively crafting challenging quiz questions to troubleshooting technical issues on the event day, the teamwork and energy were unforgettable. My advice to current members: stay curious, get involved, and make the most of every opportunity the chapter offers."
    }
]


import { TeamMember } from "@/types";
import {
  Linkedin,
  Mail,
  Globe,
  Github,
} from "lucide-react";

export const currentTeam: TeamMember[] = [
  {
    type: "faculty",
    name: "Prof. (Dr.) Subhashis Majumder",
    roleAtACMHITK: "Senior Member & Patron",
    roleAtHITK:
      "Professor and HOD, Department of Computer Science and Engineering",
    image: "/Dr-Subhashis-Majumder.png",
    bio: "Dr. Subhashis Majumder holds an M.Tech degree in Computer Science from the Indian Statistical Institute, Kolkata, and a Ph.D. in Computer Science and Engineering from Jadavpur University. He also served as a research assistant for a year in the Computer Engineering Department of Rutgers University, U.S.A. After completing his undergraduate work in Electronics and Telecommunication Engineering from Jadavpur University in 1993, he began his career at Texas Instruments India Pvt. Ltd. He brings over seven years of industry experience, during which he led product development teams and held the position of General Manager, Technical, at a medium-sized IT company. In 2006, he established Ditsa Technologies, an IT firm focused on algorithm-intensive programming techniques. Since 2003, he has been dedicated to full-time academics and is currently serving as 'Professor and HOD' in the CSE department of Heritage Institute of Technology, Kolkata. His research interests span Data Analysis, Recommendation Algorithms, VLSI Physical Design Algorithms, Combinatorial and Graph Algorithms, Computational Geometry, and Discrete Geometry.",
    achievements:
      "Dr. Subhashis Majumder was awarded an NTS scholarship (1987) by NCERT, India. His career includes leading product development teams on innovative technologies. He founded Ditsa Technologies in 2006, where he contributed key fast and efficient scheduling algorithms to Sports Management Software. Academically, he has published over 90 papers in international refereed conferences and archival journals, and he has guided 6 Ph.D. students.",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/subhashis-majumder-2944252/",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "Email",
        url: "mailto:subhashis.majumder@heritageit.edu",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "Website",
        url: "https://scholar.google.com/citations?user=wQaRGIMAAAAJ&hl=en",
        icon: <Globe className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "faculty",
    name: "Dr. Anurina Tarafdar",
    roleAtACMHITK: "Faculty Sponsor",
    roleAtHITK:
      "Assistant Professor, Department of Computer Science & Engineering",
    image: "/Dr-Anurina-Tarafdar.jpg",
    bio: "Dr. Anurina Tarafdar is currently working as an Assistant Professor in the Department of Computer Science and Engineering at Heritage Institute of Technology, Kolkata. Prior to this she was an UGC-NET Senior Research Fellow and PhD Scholar in the Department of Computer Science and Engineering, University of Calcutta. Her domain of research is resource management in the Cloud environment. She is a Machine Learning and Cloud Computing enthusiast. She is a Gold medalist in M.Tech. from the University of Calcutta.",
    achievements:
      "Dr. Anurina Tarafdar has conducted research in the fields of Cloud Computing and Machine Learning. Her works have been published in reputed journals and conferences of Springer, IEEE, and Elsevier. She received the UGC-NET Research Fellowship from Government of India between 2018-2023. She also acquired the First Class First position in M.Tech. in CSE from University of Calcutta in 2018. She received TCS Best Student Award for academic excellence in 2015.",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anurina-tarafdar-107971254",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "Email",
        url: "mailto:anurina.tarafdar@heritageit.edu",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "Website",
        url: "https://scholar.google.com/citations?user=Mhbkvx0AAAAJ&hl=en",
        icon: <Globe className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Sagnik Pramanik",
    roleAtACMHITK: "Chair",
    roleAtHITK: "4th Year, CSE'26",
    image: "/Sagnik-Pramanik.jpeg",
    bio: "Sagnik is a CSE Final Year student with a passion for building impactful, real-world solutions at the intersection of AI, software, and embedded systems. He has worked with multiple US-based companies, also contributing to large-scale projects of the U.S. government and healthcare sectors. A 5x LinkedIn Top Voice in various domains, he holds certifications from Google, AWS, DeepLearning.AI, Stanford University, Imperial College London, and more. He previously served as the Secretary of ACM-HITK 2024-2025 and currently leads the chapter as its Chair",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:sagnikpramanik95@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sagnik-pramanik/",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/sagnik-p",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Aryan Ghosh",
    roleAtACMHITK: "Vice Chairperson",
    roleAtHITK: "3rd year, CSE'27",
    image: "/Aryan-Ghosh.png",
    bio: "As the Vice Chairperson of the ACM Student Chapter at HITK, I strive to cultivate a culture of curiosity, collaboration, and cutting-edge innovation. From adrenaline-filled code battles to insightful alumni panels, I strive to bridge the gap between classroom learning and real-world tech. With a passion for building scalable systems, cracking algorithms, and exploring AI frontiers, I channel my technical skills into curating events that inspire, challenge, and elevate our student community.",
    achievements:
      "Presently working on Spiking neural networks and Mathematical Modeling; Recieved Scholarship for Higher Education (SHE) under the INSPIRE Scheme of DST",
    socials: [
      {
        name: "Email",
        url: "mailto:ghosharyan05@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aryan-ghosh-83a26631b",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Aryan-Ghosh-Code",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Mohak Sarkar",
    roleAtACMHITK: "Secretary",
    roleAtHITK: "3rd Year, CSE'27",
    image: "/Mohak-Sarkar.jpg",
    bio: "I’m Mohak Sarkar, Secretary of ACM HITK. I’ve worked on machine learning projects, full-stack applications, and tech integrations. I’m passionate about applying innovative solutions to real-world problems and contributing meaningfully to the tech community.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:mohak.sarkar.cse27@heritageit.edu.in",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohak-sarkar-b0522a303/",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Rohit Kumar Dey",
    roleAtACMHITK: "Webmaster",
    roleAtHITK: "4th Year, CSE'26",
    image: "/Rohit-Kumar-Dey.jpg",
    bio: "Rohit is an experienced full-stack developer with over a year and a half of hands-on experience in building dynamic, responsive web applications. He has gained valuable professional experience working as a Frontend Engineer at a cybersecurity startup and progressing from Frontend Developer to Full-Stack Developer at a blockchain startup. He leverages a robust set of front-end technologies including React, Next.js, SvelteKit, and Tailwind CSS. His backend expertise encompasses Node.js, Express.js, MongoDB, SQL, Golang, Gin, and Flask. Rohit has also explored Zod for validation and Shadcn for UI components, continually experimenting with new tools and frameworks to enhance his skill set. Currently, Rohit is delving into cryptography to expand his knowledge in emerging fields. He has a keen interest in mathematics and algorithms, enjoying the process of uncovering the principles behind technological innovations. He is passionate about building impactful digital experiences that are both user-centered and technically sound.",
    achievements:
      "Rohit has a strong record of impactful achievements, including securing First Place at HACKHERITAGE 2023 (among 90+ teams) for the SightX project and First Place at HACK FOR GOOD 2023 (among 114 teams nationwide) for ForestWatchAI. In the academic sphere, he has published two papers: 'SightAssist: A Multi-facility Machine Learning Approach for Empowering the Visually Impaired' at ICDSNE 2024 (Lecture Notes in Networks and Systems, Vol. 1165), and 'Kontho: An AI-Driven Smart Glove for Enhanced Sign Language Communication' at ICAA 2025 (Lecture Notes in Computer Science, Vol. 15505).",
    socials: [
      {
        name: "Email",
        url: "mailto:rohit.dey302003@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohit-kumar-dey-3856891a5/",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/rohits-web03",
        icon: <Github className="h-5 w-5" />,
      },
      {
        name: "Website",
        url: "https://rohitdev-psi.vercel.app/",
        icon: <Globe className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Debolina Debnath",
    roleAtACMHITK: "Treasurer",
    roleAtHITK: "2nd Year, CSE'28",
    image: "/Debolina-Debnath.jpeg",
    bio: "I'm Debolina Debnath, a 2nd-year CSE student with a strong love for design, creativity, and collaboration. I’ve learned Python, C++, HTML, and CSS, and beyond coding, what excites me the most is designing content, managing events, and bringing visual ideas to life — whether it’s social media posts, posters, or event themes.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:debolinadebnath14@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Koushiki Das",
    roleAtACMHITK: "Membership Head",
    roleAtHITK: "4th Year, CSE'26",
    image: "/Koushiki-Das.png",
    bio: `Koushiki Das is a dedicated student from HITK (Class of 2026) with a strong background in research in Artificial Intelligence and Computer Vision. She has gained valuable experience through internships at institutions like IIT Dharwad and New Jersey Institute of Technology, as well as with Indian Oil Corporation Ltd. She is also committed to community service, actively volunteering as a teacher for underserved students.`,
    achievements: `She focused on finetuning Large Language Models (LLMs) and building an AI-assisted medical appointment bot during her Summer Research Internship at IIT Dharwad. During her Winter Internship at Indian Oil Corp. Ltd, she leveraged computer vision to develop an automated PPE detection system, specifically for safety helmets in a refinery. As a Summer Research Intern at New Jersey Institute of Technology, she worked on solving Fast Fair Bandits using Reinforcement Learning. Koushiki has demonstrated leadership within the ACM HITK student chapter, serving as Vice Membership Head. Additionally, she has been a dedicated Volunteer Teacher at U&I Trust, where she educates underserved students and successfully raised 10K in funds during an annual crowdfunding session.`,
    socials: [
      {
        name: "Email",
        url: "mailto:koushikid2020@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/koushiki-das-572b50289/",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Ankita Roy",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "4th Year, AIML'26",
    image: "/Ankita-Roy.jpg",
    bio: "I am keenly interested in machine learning and computational mathematics. I love reading books, both fiction and non fiction.",
    achievements:
      "I presented our HITK ACM Student Chapter at the ACM Winter Meet at TCS, Kolkata. I have also held hands-on session on building your own chatbot alond with my mates.",
    socials: [
      {
        name: "Email",
        url: "mailto:roy864ankita@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankita-roy-399367319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Anushka Nath",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "4th Year, CSE'26",
    image: "/Anushka-Nath.png",
    bio: "Enthusiastic web developer interested in neural networks like to read psychological thrillers",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:anushka.nath.cse26@heritageit.edu.in",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anushka-nath-574427263",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/anushkanath09",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Anwesha Goswami",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "4th Year, CSE'26",
    image: "/Anwesha-Goswami.jpg",
    bio: "I am a full stack web developer and also an ML enthusiast. I have built web apps and trained my own ML models. I have done my summer internship from Centre for Railway Information Systems (CRIS) as a web developer. I am currently doing a research internship from IIEST Shibpur where I am working with NLP, CNN and other ML models. I have served as ACM-HITK's Vice Chair in the academic year 2024-2025 and coordinated to conduct different events. I look forward to substantially contribute to the ACM-HITK Student Chapter in this academic year also.",
    achievements:
      'Organized and volunteered ACM-HITK\'s event Brainstorm’25 I have worked on a research paper- "Sustainable UAV-Assisted Data Collection in Wireless Sensor Networks Using Renewable Energy and Wireless Charging Platforms" which has been presented at the 12th International Conference on Signal Processing and Integrated Networks (SPIN 2025) organized by Amity University, Noida.',
    socials: [
      {
        name: "Email",
        url: "mailto:goswamianwesha16@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anwesha-goswami-388119282",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/anweshagoswami",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Atyasha Bhattacharyya",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "4th Year, Data Science'26",
    image: "/Atyasha-Bhattacharyya.png",
    bio: "Atyasha is a third-year B.Tech student in Computer Science and Engineering (Data Science) at Heritage Institute of Technology, with a strong passion for machine learning, deep learning, and computer vision. She has contributed to various impactful research projects at IIT Roorkee and IIT Delhi, and she actively participates in innovation-driven competitions. As the ACM SIG Coordinator for Data Science, she aims to foster technical learning and collaborative growth within the ACM chapter.",
    achievements:
      "The seminar on 'Technical Debt in Machine Learning Systems' featuring Uday Shaw, Senior Data Engineer at Xperi, was organized by ACM Data Science SIG to promote industry-academia interaction and deepen members' understanding of ML system design challenges. She led the development of JAWAAN, an award-winning AI-powered soldier safety and surveillance system, which secured the Winner position at Smart Bengal Hackathon 2025 and 2nd Runner-Up at IIT Bhubaneswar's Code Relay 3.0. She was selected as a Research Intern at IIT Roorkee and IIT Delhi, where she contributed to trajectory prediction using hybrid deep learning models and tree canopy segmentation using YOLOv8 and UNet, respectively. She has published 4 papers in reputed international conferences (IEEE CIACON, CONFLUENCE, ICCIDS, ICIVC) on topics including forest fire detection, drone-based emergency response, and ML-driven agriculture and healthcare. Additionally, she achieved 1st Runner-Up at EXCAVATE, IIT Kharagpur and Winner at KRACKHACK, IIT Mandi for developing innovative machine learning and smart traffic management systems. She has maintained an academic CGPA of 9.77 till the 3rd year, with consistent top performance across semesters.",
    socials: [
      {
        name: "Email",
        url: "mailto:atyasha.bhattacharyya.ds26@heritageit.edu.in",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/atyasha-bhattacharyya-025780214",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/atyasha2054",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Shuvayu Dasgupta",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "4th year, AIML'26",
    image: "/Shuvayu-Dasgupta.png",
    bio: "Shuvayu is currently interested in deep learning, LLMs, Agentic AI. In his previous capacity as Assistant Treasurer of ACM-HITK, he was responsible for looking into the finances for various events and helped organize SIG-AIML events. This time he is looking forward to continue the latter.",
    achievements:
      "He has interned at DRDO, Microsoft certified Azure Data Scientist Associate and AI engineer.",
    socials: [
      {
        name: "Email",
        url: "mailto:shuvayudasgupta91004@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shuvayu-dasgupta-b0821a281",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Shuvayu12",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Sneha Lahiri",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "4th Year, CSE'26",
    image: "/Sneha-Lahiri.jpeg",
    bio: "Sneha is a Web Dev enthusiast, who loves to do Competitive Coding as a side hobby. Apart from this, she has keen interest in Table tennis and Fine Arts.",
    achievements:
      "She has won multiple Competitive Coding competitions, interned under DST SSR-SERB government scheme as website developer at Jadavpur University",
    socials: [
      {
        name: "Email",
        url: "mailto:snehalahiri09@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sneha-lahiri-11753b22a",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Sana9909",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Sohom Das",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "4th Year, CSE'26",
    image: "/Sohom-Das.jpeg",
    bio: "Sohom Das is from 4th year, CSE'26. He is a passionate designer who has keen interest in cricket also.",
    achievements: "Founder of Webworks Studio",
    socials: [
      {
        name: "Email",
        url: "mailto:sohom.11a.60.17112003@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sohom-das-245791267/",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Ankan Das",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "3rd Year, CSE'27",
    image: "/Ankan-Das.png",
    bio: "I’m Ankan Das, a data science enthusiast with a strong interest in helping fellow students explore advanced concepts in the field. Currently, I contribute to event planning and coordination within our ACM chapter at HITK, aiming to create engaging and impactful learning experiences for the community.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:ankandas2@acm.org",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankan-das-551916204/",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Debajit Guha",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "3rd Year, CSE'27",
    image: "/Debajit-Guha.jpg",
    bio: "Hello geeks! I am Debajit, a 3rd year undergrad, CSE, HITK. I am passionate about image recognition, Deep Learning, programming and currently learning Web Development.Would like to collaborate with industry people and contribute to the betterment of this chapter.",
    achievements:
      "1. Co author of a paper presented in ICAA 2025 and published in Springer LNCS. 2. Pursuing Summer Research internship under SRFP (Summer Research Fellowship Program) offered by Indian Academy of Science, Bangalore. 3. Presented a paper on Lung disease detection using Chest x rays at ARET 2025 by Hinweis Research. (Publication under process).",
    socials: [
      {
        name: "Email",
        url: "mailto:debajit.guha.cse27@heritageit.edu.in",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/debajit-guha-77a0ab28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Debeshee Sen",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "3rd Year, CSE'27",
    image: "/Debeshee-Sen.png",
    bio: "I’m an aspiring Software Engineering and Data Science student at Heritage Institute of Technology, Kolkata. My primary focus lies in Machine Learning, Deep Learning, and the mathematical foundations of ML, where I enjoy solving complex, data driven problems. I also have experience in Full-Stack Web Development, enabling me to build scalable and practical end-to-end solutions. While constantly learning and exploring, I aim to combine strong problem-solving skills with modern technologies to create impactful projects. As a board member of the ACM HITK Chapter, I am committed to driving meaningful contributions in the field of ML and Data Science, while actively organizing and planning impactful events to take the chapter to greater heights.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:debeshee.sen.cse27@heritageit.edu.in",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/debeshee-sen-31857527a",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/DebesheeSen",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Shambaditya Sarkar",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "3rd Year, CSE'27",
    image: "/Shambaditya-Sarkar.jpg",
    bio: "I'm Shambaditya Sarkar, a student much fascinated and learning about AIML like anybody else. I've done a few projects on web development, especially front-end. I often partake in digital art, designs and editing.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:shambaditya.sarkar.cse27@heritageit.edu.in",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shambaditya-sarkar-929443317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi_app",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Souryadip Mallick",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "3rd Year, CSE'27",
    image: "/Souryadip-Mallick.jpg",
    bio: "Computer Science undergraduate at Heritage Institute of Technology with a passion for full-stack web development and programming in Java, C++, Python, and JavaScript. My fields of interest are Data Science and Machine Learning, which I’m currently exploring, and I’m also strengthening my problem-solving skills through Data Structures and Algorithms.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:souryadipmallick@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/souryadip-mallick-03b303294",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/souryadip-official",
        icon: <Github className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Srijit Roy",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "3rd Year, CSE'27",
    image: "/Srijit-Roy.png",
    bio: "Aspiring Web Developer (Frontend Development) and also delving into Machine Learning & algorithms for future ventures.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:rsrijit436@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Srijit27",
        icon: <Github className="h-5 w-5" />
      }
    ],
  },
  {
    type: "student",
    name: "Mehul Roy",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "2nd Year, CSE'28",
    image: "/Mehul-Roy.jpg",
    bio: "I'm a second-year Computer Science and Engineering student. Always curious and eager to learn, I'm diving into front-end while also experimenting with ML models.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:mehulroy6840@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mehul-roy-319b58323",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Sohon Ganguly",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "2nd Year, CSE'28",
    image: "/Sohon-Ganguly.png",
    bio: "Hi, I’m Sohon, a Computer Science undergrad with a deep interest in technology, creative writing, and art. I enjoy blending creativity with logic, whether it’s coding in C, exploring fintech, or contributing to tech communities like ACM through engaging and meaningful initiatives.",
    achievements: null,
    socials: [
      {
        name: "Email",
        url: "mailto:sohan.ganguly.cse28@heritageit.edu.in",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sohon-ganguly-44b508313",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
  {
    type: "student",
    name: "Yogesh Kumar",
    roleAtACMHITK: "Board Member",
    roleAtHITK: "2nd Year, CSE'28",
    image: "/Yogesh-Kumar.jpg",
    bio: "I create AI automations. Python is my first love. Talk to me about LLMs, agents, mcp",
    achievements:
      "Yogesh stood 3rd in ACM brainstorm'25, 1st in Ideatex 2025 in session zero by GDGHITK and is a SIH 24 Finalist",
    socials: [
      {
        name: "Email",
        url: "mailto:fbyogesh111@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yogesh-kumar-299298260/",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Coden-inja",
        icon: <Github className="h-5 w-5" />,
      },
      {
        name: "Website",
        url: "https://yogesh-portfolio-nu-swart.vercel.app/",
        icon: <Globe className="h-5 w-5" />,
      },
    ],
  },
];

export const teamContacts = [
  {
    name: "Sagnik Pramanik",
    role: "Chapter Chair",
    email: "sagnikpramanik95@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/sagnik-pramanik/",
    image: "/Sagnik-Pramanik.jpeg",
  },
  {
    name: "Aryan Ghosh",
    role: "Vice Chair",
    email: "ghosharyan05@gmail.com",
    linkedinUrl: "www.linkedin.com/in/aryan-ghosh-83a26631b",
    image: "/Aryan-Ghosh.png",
  },
  {
    name: "Mohak Sarkar",
    role: "Secretary",
    email: "mohak.sarkar.cse27@heritageit.edu.in",
    linkedinUrl: "https://www.linkedin.com/in/mohak-sarkar-b0522a303/",
    image: "/Mohak-Sarkar.jpg",
  },
  {
    name: "Rohit Kumar Dey",
    role: "Webmaster",
    email: "rohit.dey302003@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/rohit-kumar-dey-3856891a5/",
    image: "/Rohit-Kumar-Dey.jpg",
  },
];
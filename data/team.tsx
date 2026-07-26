import { TeamMember } from '@/types';
import { Linkedin, Mail, Globe, Github } from 'lucide-react';

const base_url = '/current-members';

export const currentTeam: TeamMember[] = [{//done
		type: "faculty",
		name: "Prof. (Dr.) Subhashis Majumder",
		roleAtACMHITK: "Senior Member & Patron",
		roleAtHITK: "Professor and HOD, Department of Computer Science and Engineering",
		image: "/webp/Dr-Subhashis-Majumder.webp",
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
	{//done
		type: "faculty",
		name: "Dr. Anurina Tarafdar",
		roleAtACMHITK: "Faculty Sponsor",
		roleAtHITK: "Assistant Professor, Department of Computer Science & Engineering",
		image: `${base_url}/Dr-Anurina-Tarafdar.webp`,
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
	{//done
		type: "student",
		name: "Aryan Ghosh",
		roleAtACMHITK: "Chair",
		roleAtHITK: "4th Year, CSE'27",
		image: `${base_url}/Aryan-Ghosh.webp`,
		bio: "Aryan is an undergraduate Computer Science student at Heritage Institute of Technology with a strong interest in Artificial Intelligence, Machine Learning, and Full-Stack Development. His work spans deep learning, computer vision, natural language processing, Web3, and scalable software engineering, with a focus on building intelligent, real-world solutions. He is currently an AI Labs Intern at IDfy, working on AI-powered enterprise solutions, and a Software Development Intern at GoKids, contributing to scalable full-stack applications. Alongside his internships, he actively explores research in machine learning and intelligent systems, while enjoying hackathons, technical communities, and emerging technologies. He previously served as the Vice Chair of ACM-HITK (2025–26) and currently leads the chapter as its Chair, fostering technical learning and collaborative innovation.",
		achievements: "Aryan is currently an Intern at AI Labs@IDfy, where he contributes to AI- and machine-learning-driven solutions for enterprise-scale document intelligence and automation. He is also a Software Development Intern at GoKids, leading the complete redevelopment of the organization's digital platform by architecting a modern full-stack application and in-house backend. Alongside his industry work, he is pursuing research in mathematical modelling and machine learning, with ongoing work on nonlinear eco-epidemiological systems currently under review. A passionate hackathon enthusiast, Aryan has won the Hardware Track at StatusCode 2.0 (IIIT Kalyani) among 5,000+ participants with DripTect, secured 1st place at CodeQuest (IEM Kolkata), and is a recipient of the prestigious INSPIRE Scholarship awarded by the Department of Science & Technology, Government of India.",
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
			{
				name: "Website",
				url: "https://aryan-ghosh-portfolio.vercel.app/",
				icon: <Globe className="h-5 w-5" />,
			},
		],
	},
	{//done
		type: "student",
		name: "Sarthak Sharan",
		roleAtACMHITK: "Vice Chairperson",
		roleAtHITK: "2nd Year, DS'29",
		image: `${base_url}/Sarthak-Sharan.webp`,
		bio: "I am a second-year Computer Science and Engineering (Data Science) student with interests in embedded systems, robotics, aerospace engineering, and applied machine learning. Outside academics, I work as a freelance CAD designer and conduct online Fusion 360 training sessions while actively participating in engineering competitions and technical projects. As a member of the ACM Student Chapter, I hope to contribute by organizing technical workshops, hackathons, and project-based learning activities that encourage more students to build practical engineering skills.",
		achievements:
			"Freelance CAD Designer & 3D Printing Specialist, working with domestic and international clients; Qualified for the ISRO Robotics Challenge 2026 Semi-Finals with an autonomous drone project. Currently ranked top ~30 in the country; 1st Place – Ideapolis 2026 (ACM HITK) for a non-invasive blood biomarker scanner; 1st Place – Hacktonix 2026 (Future Institute of Engineering & Management); 1st Place – Water Rocket, NSSC 2025, IIT Kharagpur; Winner of 3 events at Dakshh 2026; 1st place - IOT Bidwars, Srijan 2026, Jadavpur University.",
		socials: [
			{
				name: "Email",
				url: "mailto:sarthaksharan006@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/sarthaksharan/",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/sarthaksharan006",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{//done
		type: "student",
		name: "Mohak Sarkar",
		roleAtACMHITK: "Secretary",
		roleAtHITK: "4th Year, CSE'27",
		image: `${base_url}/Mohak-Sarkar.webp`,
		bio: "I’m Mohak Sarkar, Secretary of ACM HITK. I’ve worked on machine learning projects, full-stack applications, and tech integrations. I’m passionate about applying innovative solutions to real-world problems and contributing meaningfully to the tech community. I am an active researcher.",
		achievements: "Secretary Of ACM HITK Student Chapter.",
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
		name: "Srijit Roy",
		roleAtACMHITK: "Web Master",
		roleAtHITK: "4th Year, CSE'27",
		image: `${base_url}/Srijit-Roy.webp`,
		bio: "I am a final-year B.Tech student in Computer Science at Heritage Institute of Technology with a strong foundation in Computer Science fundamentals and a passion for building scalable, real-world software solutions. My primary interests lie in Full Stack Web Development, Data Structures & Algorithms, and Machine Learning, where I enjoy transforming complex ideas into efficient and user-centric applications. I have hands-on experience with modern technologies including HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Python, PyTorch, Git, GitHub, Docker, and RESTful APIs, while continuously exploring emerging tools and frameworks. Through academic and personal projects, I have strengthened my problem-solving abilities, software engineering practices, and understanding of production-ready development. I aspire to leverage my technical expertise, analytical thinking, and passion for innovation to develop impactful, scalable products that solve meaningful real-world challenges while continuously growing as a software engineer.",
		achievements:
			"Srijit previously served as a Board Member for the ACM HITK Student Chapter (25-26), for which he has been awarded with 'Outstanding Contribution to the Chapter (25-26)'. He acted as the SPOC for Design Team, leveraging design ideas and deliver visually appealing and impactful design motions. He is presently a Research Intern under Dr. Uma Das at IIIT Kalyani, where he is developing and evaluating lightweight deep learning models for satellite-based rainfall reconstruction using INSAT multispectral imagery as part of an ongoing research project. He stood 2nd in CodeQuest, organized as a part of Converge 25' at IEM-Kolkata. He got elected as the Webmaster for ACM HITK Student Chapter (26-27), presently handling and maintaining the ACM HITK website.",
		socials: [
			{
				name: "Email",
				url: "mailto:rsrijit436@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/srijit-roy-2351214h/",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/Srijit27",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Modhura Banerjee",
		roleAtACMHITK: "Treasurer",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Modhura-Banerjee.webp`,
		bio: "I am currently a 3rd-year Computer Science Engineering student with basic knowledge of web development and experience working on web projects during hackathons. I am currently learning deep learning and CNNs while exploring AI through practical projects. I have also been part of the Hult organizing committee, contributing to workshop and team management. I would like to join ACM to connect with like-minded peers, learn, and contribute actively to the community.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:modhura.banerjee@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://linkedin.com/in/modhura-banerjee-84b746332",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/Modhura002",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Debnil Pal",
		roleAtACMHITK: "Membership Head",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Debnil-Pal.webp`,
		bio: "I am Debnil Pal, a B.Tech Computer Science and Engineering student who is passionate about learning new technologies and improving my technical and leadership skills. Through the ACM Student Chapter, I have contributed by helping organize technical events, workshops, and student activities while collaborating with team members to ensure their smooth execution. These experiences have strengthened my communication, teamwork, event management, and organizational abilities.",
		achievements: "Gemini Student Ambassador.",
		socials: [
			{
				name: "Email",
				url: "mailto:debnil.pal.04@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/debnil-pal-960502285",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/DEBNILPAL",
				icon: <Github className="h-5 w-5" />,
			},
			{
				name: "Website",
				url: "https://debnil-portfolio.netlify.app/",
				icon: <Globe className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Abhroneel Chakraborty",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "4th Year, AEIE'27",
		image: `${base_url}/Abhroneel-Chakraborty.webp`,
		bio: "I am a final-year AEIE student passionate about embedded systems, edge computing, AI , ML. My technical contributions include designing end-to-end IoT pipelines, AI pipelines , 3D digital twins for structural health monitoring, and publishing research on explainable AI architectures. As a member of the ACM chapter, I am dedicated to contributing to hardware and software innovation while collaborating on technical workshops and peer-led engineering initiatives.",
		achievements: "SIH'25 FINALIST",
		socials: [
			{
				name: "Email",
				url: "mailto:abhroneel.chakraborty.aeie27@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/abhroneel-chakraborty-2284b9317/",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/neel-09",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Ronil Shah",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "4th Year, CSE'27",
		image: `${base_url}/Ronil-Shah.webp`,
		bio: "As an ACM Student Chapter member, I gained valuable knowledge, skills and connections through various events and activities. Becoming a Board Member would allow me to give back by organizing impactful initiatives and encouraging greater student participation.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:ronil.shah.cse27@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/ronil-shah-0344a3359/",
				icon: <Linkedin className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Sohon Ganguly",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Sohon-Ganguly.webp`,
		bio: "I'm a curious builder who enjoys learning by creating. Whether it's developing AI applications, designing full-stack software, or exploring new technologies, I enjoy tackling challenging problems and continuously improving my skills. I hope to contribute to ACM by sharing knowledge, collaborating on meaningful initiatives, and helping create an engaging environment for students interested in technology.",
		achievements: "Winner, HackHeritage '25 Finalist, Biznez Plan Competition (Srijan '26) Participant, Hult Prize 2026 Developed a full-stack e-commerce platform for an international leather products startup using Node.js, Express.js, TypeScript, PostgreSQL, Prisma, and Next.js.",
		socials: [
			{
				name: "Email",
				url: "mailto:sohan.ganguly.cse28@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://linkedin.com/in/sohon-ganguly-44b508313",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/sohongan-2811",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Mehul Roy",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Mehul-Roy.webp`,
		bio: "I am a student of CSE department, 3rd year. My interests include backend development, cybersecurity and artificial intelligence. I was a board member of the ACM student chapter in the previous year, where I contributed to poster designing and was a part of the organization team for various ACM student chapter events.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:mehul.roy.cse28@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://linkedin.com/in/mehul-roy-319b58323",
				icon: <Linkedin className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Debolina Debnath",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Debolina-Debnath.webp`,
		bio: "I am a CSE student with a strong interest in marketing, design, and creative communication. During my tenure as an ACM board member in 2025–26, I gained valuable experience working with teams and contributing to various initiatives. I enjoy combining technical knowledge with design and promotional strategies to enhance engagement and outreach. I am eager to continue contributing to ACM and take on greater responsibilities this year. With the experience I have gained and a renewed commitment to active participation, I am determined to work hard, contribute consistently, and give my very best to help ACM grow and succeed.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:debolina.debnath.cse28@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Alina Datta",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Alina-Datta.webp`,
		bio: "I am a computer science student with a keen interest in programming, artificial intelligence, and emerging technologies. As a Board Member of the ACM chapter, I would like to help organize events and initiatives that promote technical learning, collaboration, and professional growth within the student community.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:alina.datta.cse28@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/alina-datta-692050376",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/alinadatta",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Ankit Kumar",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Ankit-Kumar.webp`,
		bio: "I am a B.Tech Computer Science and Engineering student at Heritage Institute of Technology with a strong interest in full-stack development. I am passionate about learning new technologies and collaborating with others to solve real-world problems. Through the ACM Student Chapter, I would like to contribute by organizing and managing technical events, supporting technical initiatives, and helping create an engaging learning environment for fellow students.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:ankit.kumar.cse28@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://linkedin.com/in/ankit-kumar-91a82035a",
				icon: <Linkedin className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Rajdeep Mandal",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "3rd Year, DS'28",
		image: `${base_url}/Rajdeep-Mandal.webp`,
		bio: "Passionate about Artificial Intelligence, Machine Learning, and Data Science, I enjoy building technology-driven solutions to real-world problems. I actively participate in hackathons and technical competitions, and as an ACM Board Member, I look forward to contributing to impactful initiatives and fostering a collaborative learning environment.",
		achievements: "App Development Intern at Vigilantia Praesidium Pvt. Ltd. (in association with IIM Calcutta Innovation Park). Winner – BioTexpression 2026. 1st Runner-up – Ureckon 2026; Finalist – COMPOSIT 2026, IIT Kharagpur, and multiple hackathons and innovation competitions with AI-driven healthcare and forensic projects. SEBI Investor Certification Examination – Scored 45/50.",
		socials: [
			{
				name: "Email",
				url: "mailto:rajdeep.mandal.ds28@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://linkedin.com/in/rajdeep-mandal-41661a32a",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/Rajdeepofficial26",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Shrabani Neogi",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "3rd Year, CSE'28",
		image: `${base_url}/Shrabani-Neogi.webp`,
		bio: "I am a dedicated member of the Heritage Institute of Technology ACM Student Chapter, where I serve as a Lead/PoC for the Design, Content Creation & Documentation Team. Additionally, I actively contribute to both the Outreach and PR Team and the Event Management Team. I am passionate about creating engaging content, promoting our chapter's initiatives, and helping organize impactful events for our tech community.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:shrabanineogi2005@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/shrabani-neogi-177652324/",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/shrabani-stack",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Debadrito Batabyal",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "2nd Year, IoTCS'29",
		image: `${base_url}/Debadrito-Batabyal.webp`,
		bio: "I am a sophomore Computer Science student passionate about AI and software development. Excited to learn, collaborate, and contribute to the ACM Student Chapter.",
		achievements: "Hult Prize Campus Participant Built multiple AI-powered projects School Captain (2024–25).",
		socials: [
			{
				name: "Email",
				url: "mailto:debadritobatabyal@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/debadrito-batabyal-b98187258?utm_source=share_via&utm_content=profile&utm_medium=member_android",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/debadritobatabyal-dotcom",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Debmalya Ray",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "2nd Year, CSE'29",
		image: `${base_url}/Debmalya-Ray.webp`,
		bio: "Hi! I'm Debmalya Ray, a CSE undergrad student currently in 2nd year, having a keen interest in artificial intelligence and machine learning field. I enjoy learning new technologies, taking on challenging problems, and connecting with people who share a passion for innovation.",
		achievements: "Debmalya stood 1st in \"Marketing Gimmick\" under HITK E'Summit'25, 2nd in \"Melange\" under Dakshh'26.",
		socials: [
			{
				name: "Email",
				url: "mailto:ray.debmalya25@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/debmalya-ray-b42a07371/",
				icon: <Linkedin className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Manindra Nath Seth",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "2nd Year, IoTCS'29",
		image: `${base_url}/Manindra-Seth.webp`,
		bio: "I am a passionate and creative individual with strong interests in designing, coding, drama, and drawing. I would like to contribute to the chapter through event management, design work, content creation, and outreach/PR activities to help build an engaging and impactful community.",
		achievements: null,
		socials: [
			{
				name: "Email",
				url: "mailto:manindraseth2@gmail.com",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/manindra-nath-seth-36557b376?utm_source=share_via&utm_content=profile&utm_medium=member_android",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/Manindra-NS",
				icon: <Github className="h-5 w-5" />,
			},
			{
				name: "Website",
				url: "https://manindra-portfolio.netlify.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAS1_fpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeOPrDJ7Clqdx1ZI3i3en2xsttTTB9LiML5i-11HyigObqzzwnuntRuLVYbAA_aem_-qt8kEwbDsrTgpq9vNDRcw",
				icon: <Globe className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Aheen Chatterjee",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "2nd Year, CSBS'29",
		image: `${base_url}/Aheen-Chatterjee.webp`,
		bio: "Dakshh 2026 CTF Winner, Session Zero 2026 Muse Winner,  2x Hackathon Winner. Currently leading a 6 person team building opzami.com  I love building things, turning ideas into projects and taking initiative.   As a board member i would love to contribute by organising engaging and impactful tech events.   Looking forward to working together with peers who are equally passionate about technology.",
		achievements: "Dakshh 2026 CTF Winner, Session Zero 2026 Muse Winner.",
		socials: [
			{
				name: "Email",
				url: "mailto:aheen.chatterjee.csbs29@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/aheen-chatterjee-76b189291",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/Aheen-Chatterjee",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
	{
		type: "student",
		name: "Rupsha Sen",
		roleAtACMHITK: "Board Member",
		roleAtHITK: "2nd Year, IoTCS'29",
		image: `${base_url}/Rupsha-Sen.webp`,
		bio: "I am a second-year B.Tech student in Computer Science and Engineering (IoT & Cyber Security) with a strong interest in programming, web development, UI/UX design, and emerging technologies. I enjoy building personal projects that help me apply and improve my technical skills while continuously exploring new tools and technologies. As an ACM student chapter board member, I look forward to contributing to technical events, collaborative initiatives, and creating opportunities that encourage learning and innovation within our community.",
		achievements: "Participant – SnapSyntax 2025 (SRIJAN), Jadavpur University: Competed in a web development challenge focused on HTML/CSS, UI replication, and problem-solving under time constraints. Developed personal web development and UI/UX design projects.",
		socials: [
			{
				name: "Email",
				url: "mailto:rupsha.sen.iotcs29@heritageit.edu.in",
				icon: <Mail className="h-5 w-5" />,
			},
			{
				name: "LinkedIn",
				url: "https://linkedin.com/in/rupsha-sen-b98a50350",
				icon: <Linkedin className="h-5 w-5" />,
			},
			{
				name: "GitHub",
				url: "https://github.com/rupsha777",
				icon: <Github className="h-5 w-5" />,
			},
		],
	},
];

export const teamContacts = [
	{
		name: 'Aryan Ghosh',
		role: 'Chair',
		email: 'ghosharyan05@gmail.com',
		linkedinUrl: 'www.linkedin.com/in/aryan-ghosh-83a26631b',
		image: `${base_url}/Aryan-Ghosh.webp`,
	},
	{
		name: 'Sarthak Sharan',
		role: 'Vice Chairperson',
		email: 'sarthaksharan006@gmail.com',
		linkedinUrl: 'https://www.linkedin.com/in/sarthaksharan/',
		image: `${base_url}/Sarthak-Sharan.webp`,
	},
	{
		name: 'Mohak Sarkar',
		role: 'Secretary',
		email: 'mohak.sarkar.cse27@heritageit.edu.in',
		linkedinUrl: 'https://www.linkedin.com/in/mohak-sarkar-b0522a303/',
		image: `${base_url}/Mohak-Sarkar.webp`,
	},
	{
		name: 'Srijit Roy',
		role: 'Web Master',
		email: 'rsrijit436@gmail.com',
		linkedinUrl: 'https://www.linkedin.com/in/srijit-roy-2351214h/',
		image: `${base_url}/Srijit-Roy.webp`,
	},
];

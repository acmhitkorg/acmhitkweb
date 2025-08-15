import { TeamMember } from "@/types";
import {
  Users,
  Award,
  Heart,
  Lightbulb,
  Linkedin,
  Github,
  Facebook,
  Youtube,
  BookOpenText,
} from "lucide-react";
import { upcomingEvents, pastEvents } from "./events";
import { currentTeam, teamContacts } from "./team";
import { pastMembers } from "./pastMembers";

export { upcomingEvents, pastEvents, currentTeam, teamContacts, pastMembers };

export const faqs = [
  {
    question: "How do I get started with programming?",
    answer:
      "Start with a beginner-friendly language like Python or JavaScript. Use interactive platforms like freeCodeCamp or Codecademy to learn the basics, then practice with small projects.",
  },
  {
    question: "What programming language should I learn first?",
    answer:
      "Python is excellent for beginners due to its simple syntax. JavaScript is great if you're interested in web development. Choose based on your interests: web development (JavaScript), data science (Python), or mobile apps (Java/Kotlin for Android, Swift for iOS).",
  },
  {
    question: "How can I prepare for technical interviews?",
    answer:
      "Practice data structures and algorithms on platforms like LeetCode and HackerRank. Study system design concepts, practice coding on a whiteboard, and prepare for behavioral questions.",
  },
  {
    question: "What are the benefits of joining ACM HITK?",
    answer:
      "Members get access to exclusive workshops, networking opportunities, mentorship programs, career guidance, and hands-on project experience. You'll also be part of a supportive community of like-minded peers.",
  },
  {
    question: "How do I contribute to open source projects?",
    answer:
      "Start by finding beginner-friendly projects on GitHub with 'good first issue' labels. Read the contribution guidelines, fork the repository, make your changes, and submit a pull request.",
  },
  {
    question: "What skills are most in-demand in the tech industry?",
    answer:
      "Currently high-demand skills include cloud computing (AWS, Azure), AI/ML, cybersecurity, full-stack web development, mobile development, and DevOps. Soft skills like communication and problem-solving are equally important.",
  },
];

// Data for /about page
export const goals = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Community",
    description:
      "Building a strong network of tech enthusiasts and professionals",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-teal-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Innovation",
    description: "Fostering creativity and technological advancement",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Education",
    description: "Promoting learning and knowledge sharing in computing",
  },
];

// Data for /join page
export const benefits = [
  {
    icon: BookOpenText,
    title: "Skill Development",
    description:
      "Access to exclusive workshops, coding bootcamps, and hands-on projects to enhance your technical skills.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description:
      "Connect with like-minded peers, industry professionals, alumni, and potential mentors in the tech community.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Recognition & Achievements",
    description:
      "Participate in competitions, hackathons, and showcase your talents on various platforms with certificates.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Contribute to meaningful projects that make a positive difference in society and the local community.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    description:
      "Participate in research projects, innovation challenges, and cutting-edge technology exploration.",
    color: "from-blue-500 to-cyan-500",
  },
];

// Data for /contact page
export const socialMedia = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/acmhitkorg",
    description:
      "Explore our open source projects and contribute to our codebase.",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/acm-hitk-association-for-computing-machinery-at-hitk/",
    description:
      "Connect with us professionally and stay updated with career opportunities.",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/acm.hitk",
    description:
      "Follow us for daily updates, event photos, and behind-the-scenes content.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Youtube",
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCLulcFoKMpsi8xicaRIZunQ",
    description:
      "Follow us for daily updates, event photos, and behind-the-scenes content.",
    color: "from-pink-500 to-rose-500",
  },
];

export const testimonials = [
  {
    name: "Reshma Roychoudhuri",
    image: "/Reshma-Roychoudhuri.jpeg",
    role: "Assistant Professor, Department of Computer Science and Engineering, HITK",
    testimonial:
      "ACM will always have a special place in my heart. The passion and hardwork of the past and current teams, and the quality of the talks sets it apart. I am hoping that the chapter increases it's reach and promotes inclusivity even more in the coming years.",
  },
  {
    name: "Swarnadeep Saha",
    image: "/Swarnadeep-Saha.jpg",
    role: "Mtech(CSE) Student at IIIT Hyderabad",
    testimonial:
      "Learned how to manage different aspects of event organization. Learned how to work closely with professors and other fellow students.",
  },
  {
    name: "Rajarshi Saha",
    image: "/Rajarshi-Saha.jpeg",
    role: "Associate Software Engineer, EY GDS",
    testimonial:
      "I had a great time being a part of the HITK ACM Student Chapter, and I hope the current members enjoy their journey and gain valuable experiences during their tenure. Take the chapter to greater heights, and organize as many events as possible. Wishing you guys all the best!",
  },
  {
    name: "Upasana Roy",
    image: "/Upasana-Roy.jpg",
    role: "SDE 1, Cozeva - Applied Research Works India Private Limited",
    testimonial:
      "Being part of the HITK ACM Student Chapter was an incredible journey! Tech talks gave me the chance to interact with professors and researchers, to know the recent trends and developments in the industry and I even got to present my own ideas. From attending events to organizing events myself, the chapter helped me grow both technically and personally. If you’re a member, don’t hold back. Collaborate, lead, speak up, and make the most of every opportunity.",
  },
  {
    name: "Devjit Sarkar",
    image: "/Devjit-Sarkar.jpg",
    role: "Summer Intern, Hyland",
    testimonial:
      "Being part of the HITK ACM Student Chapter was an overall positive and enriching experience. I had the opportunity to witness several inspiring talks and work alongside passionate peers. A fond memory that stands out is Brainstorm 2025, from collaboratively crafting challenging quiz questions to troubleshooting technical issues on the event day, the teamwork and energy were unforgettable. My advice to current members: stay curious, get involved, and make the most of every opportunity the chapter offers.",
  },
];

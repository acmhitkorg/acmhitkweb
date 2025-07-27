import { Navigation } from "@/components/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { BookOpen, Code, Laptop, Brain, Shield, Database, Globe, ExternalLink, Download, Star } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const learningPaths = [
    {
      title: "Web Development",
      icon: Globe,
      description: "Master modern web technologies from frontend to backend",
      color: "from-blue-500 to-cyan-500",
      resources: [
        { name: "The Odin Project", type: "Free Course", url: "#", rating: 4.9 },
        { name: "freeCodeCamp", type: "Interactive", url: "#", rating: 4.8 },
        { name: "MDN Web Docs", type: "Documentation", url: "#", rating: 4.9 },
        { name: "React Official Tutorial", type: "Tutorial", url: "#", rating: 4.7 }
      ]
    },
    {
      title: "Data Structures & Algorithms",
      icon: Code,
      description: "Build strong problem-solving foundations for technical interviews",
      color: "from-purple-500 to-pink-500",
      resources: [
        { name: "LeetCode", type: "Practice", url: "#", rating: 4.6 },
        { name: "GeeksforGeeks", type: "Tutorial", url: "#", rating: 4.5 },
        { name: "Coursera - Algorithms", type: "Course", url: "#", rating: 4.8 },
        { name: "HackerRank", type: "Practice", url: "#", rating: 4.4 }
      ]
    },
    {
      title: "Artificial Intelligence & ML",
      icon: Brain,
      description: "Explore the cutting-edge world of AI and machine learning",
      color: "from-green-500 to-teal-500",
      resources: [
        { name: "Coursera ML Course", type: "Course", url: "#", rating: 4.9 },
        { name: "Kaggle Learn", type: "Interactive", url: "#", rating: 4.7 },
        { name: "TensorFlow Tutorials", type: "Tutorial", url: "#", rating: 4.6 },
        { name: "Papers With Code", type: "Research", url: "#", rating: 4.8 }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Learn to protect systems and data from digital threats",
      color: "from-red-500 to-orange-500",
      resources: [
        { name: "Cybrary", type: "Course", url: "#", rating: 4.5 },
        { name: "OWASP", type: "Documentation", url: "#", rating: 4.7 },
        { name: "TryHackMe", type: "Interactive", url: "#", rating: 4.8 },
        { name: "Hack The Box", type: "Practice", url: "#", rating: 4.6 }
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      description: "Master database design, optimization, and management",
      color: "from-indigo-500 to-purple-500",
      resources: [
        { name: "SQLBolt", type: "Interactive", url: "#", rating: 4.7 },
        { name: "MongoDB University", type: "Course", url: "#", rating: 4.6 },
        { name: "PostgreSQL Tutorial", type: "Tutorial", url: "#", rating: 4.8 },
        { name: "Database Design Course", type: "Course", url: "#", rating: 4.5 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Laptop,
      description: "Build native and cross-platform mobile applications",
      color: "from-yellow-500 to-orange-500",
      resources: [
        { name: "Flutter Documentation", type: "Documentation", url: "#", rating: 4.7 },
        { name: "React Native Tutorial", type: "Tutorial", url: "#", rating: 4.6 },
        { name: "Android Developers", type: "Documentation", url: "#", rating: 4.8 },
        { name: "iOS Development", type: "Course", url: "#", rating: 4.5 }
      ]
    }
  ]

  const tools = [
    {
      category: "Development Tools",
      items: [
        { name: "Visual Studio Code", description: "Powerful code editor with extensions", type: "Free" },
        { name: "Git & GitHub", description: "Version control and collaboration", type: "Free" },
        { name: "Docker", description: "Containerization platform", type: "Free" },
        { name: "Postman", description: "API development and testing", type: "Freemium" }
      ]
    },
    {
      category: "Design & Prototyping",
      items: [
        { name: "Figma", description: "Collaborative design tool", type: "Freemium" },
        { name: "Adobe XD", description: "UI/UX design and prototyping", type: "Freemium" },
        { name: "Canva", description: "Graphic design platform", type: "Freemium" },
        { name: "Sketch", description: "Digital design toolkit", type: "Paid" }
      ]
    },
    {
      category: "Cloud Platforms",
      items: [
        { name: "AWS", description: "Amazon Web Services cloud platform", type: "Pay-as-use" },
        { name: "Google Cloud", description: "Google's cloud computing services", type: "Pay-as-use" },
        { name: "Microsoft Azure", description: "Microsoft's cloud platform", type: "Pay-as-use" },
        { name: "Heroku", description: "Platform as a service (PaaS)", type: "Freemium" }
      ]
    }
  ]

  const careerResources = [
    {
      title: "Resume & CV Templates",
      description: "Professional templates for tech resumes",
      icon: Download,
      items: [
        "Software Engineer Resume Template",
        "Data Scientist CV Template",
        "UI/UX Designer Portfolio Template",
        "Fresh Graduate Resume Template"
      ]
    },
    {
      title: "Interview Preparation",
      description: "Resources to ace your technical interviews",
      icon: BookOpen,
      items: [
        "System Design Interview Guide",
        "Behavioral Interview Questions",
        "Coding Interview Patterns",
        "Salary Negotiation Tips"
      ]
    },
    {
      title: "Job & Internship Boards",
      description: "Find opportunities in top tech companies",
      icon: ExternalLink,
      items: [
        "LinkedIn Jobs",
        "AngelList (Wellfound)",
        "Glassdoor",
        "Indeed Tech Jobs"
      ]
    }
  ]

  const faqs = [
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

  return (
    <>
      <Navigation />
      <AnimatedBackground />
      
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl animate-pulse" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="animate-in slide-in-from-bottom-10 duration-1000">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Learning Resources
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Curated resources to accelerate your learning journey and advance your tech career.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Learning Paths
              </h2>
              <p className="text-lg text-muted-foreground">
                Structured learning paths for different technology domains.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <GlassCard className="p-6 group relative overflow-hidden h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className={`w-12 h-12 bg-gradient-to-br ${path.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <path.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{path.title}</h3>
                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{path.description}</p>
                      
                      <div className="space-y-3">
                        {path.resources.map((resource, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors duration-200">
                            <div>
                              <p className="font-medium text-sm">{resource.name}</p>
                              <p className="text-xs text-muted-foreground">{resource.type}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                <span className="text-xs text-muted-foreground ml-1">{resource.rating}</span>
                              </div>
                              <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Essential Tools & Technologies
              </h2>
              <p className="text-lg text-muted-foreground">
                Industry-standard tools every developer should know.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {tools.map((category, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <GlassCard className="p-6 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent" />
                    
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
                      
                      <div className="space-y-4">
                        {category.items.map((tool, idx) => (
                          <div key={idx} className="p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-200">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{tool.name}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                tool.type === 'Free' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                                tool.type === 'Freemium' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                              }`}>
                                {tool.type}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{tool.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Guidance */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Career Guidance
              </h2>
              <p className="text-lg text-muted-foreground">
                Resources to help you land your dream job in tech.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {careerResources.map((resource, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <GlassCard className="p-6 text-center group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                      <p className="text-muted-foreground mb-6 text-sm">{resource.description}</p>
                      
                      <div className="space-y-2">
                        {resource.items.map((item, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3" />
                            {item}
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" size="sm" className="mt-6 group-hover:bg-primary/10">
                        Access Resources
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about learning and career development.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <GlassCard className="p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent" />
                    
                    <div className="relative">
                      <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-in slide-in-from-bottom-10 duration-1000 delay-400">
            <GlassCard className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-transparent" />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6">Need Personalized Guidance?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join ACM HITK to get mentorship and personalized learning paths from our experienced members.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Link href="/join">Join Our Community</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Get Mentorship</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </>
  )
}
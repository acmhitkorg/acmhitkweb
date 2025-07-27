import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowRight, Calendar, Users, BookOpen, ExternalLink, Github, Linkedin, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <>
      <Navigation />
      <AnimatedBackground />

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* About Us Brief */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    What is ACM HITK?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We are the student chapter of the Association for Computing Machinery at Heritage Institute of Technology. Our mission is to create an inclusive environment where students can explore cutting-edge technologies, develop professional skills, and build lasting connections in the computing community.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Through workshops, hackathons, guest lectures, and collaborative projects, we empower our members to become innovative leaders in the ever-evolving world of technology.
                  </p>
                  <Button asChild variant="outline" size="lg" className="group">
                    <Link href="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl blur-2xl" />
                  <GlassCard className="relative p-8 text-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">100+</div>
                        <div className="text-sm text-muted-foreground">Members</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">10+</div>
                        <div className="text-sm text-muted-foreground">Events</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">10+</div>
                        <div className="text-sm text-muted-foreground">Workshops</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">5+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us for exciting workshops, hackathons, and networking events designed to enhance your skills and expand your network.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
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
              ].map((event, index) => (
                <GlassCard key={index} className="p-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {event.type}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {event.description}
                  </p>

                  <Button size="sm" variant="outline" className="w-full group">
                    Register Now
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </GlassCard>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/events">
                  View All Events
                  <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Get Involved
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take the next step in your journey with ACM HITK. Connect, learn, and grow with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: "Become a Member",
                  description: "Join our vibrant community and unlock exclusive benefits.",
                  href: "/join",
                  icon: Users
                },
                {
                  title: "Explore Resources",
                  description: "Access curated learning materials and career guidance.",
                  href: "/resources",
                  icon: BookOpen
                },
                {
                  title: "Meet the Team",
                  description: "Get to know our passionate executive board and members.",
                  href: "/team",
                  icon: Users
                },
                {
                  title: "Contact Us",
                  description: "Have questions? We'd love to hear from you.",
                  href: "/contact",
                  icon: ExternalLink
                }
              ].map((item, index) => (
                <GlassCard key={index} className="p-6 text-center group cursor-pointer">
                  <Link href={item.href} className="block">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Link>
                </GlassCard>
              ))}
            </div>

            {/* Social Media Links */}
            <GlassCard className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Follow Us on Social Media</h3>
              <p className="text-muted-foreground mb-6">Stay updated with our latest news and events</p>

              <div className="flex justify-center space-x-4">
                {[
                  { icon: Github, href: "https://github.com/acmhitkorg", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/acm-hitk-association-for-computing-machinery-at-hitk/", label: "LinkedIn" },
                  { icon: Facebook, href: "https://www.facebook.com/acm.hitk", label: "Facebook" },
                  { icon: Youtube, href: "https://www.youtube.com/channel/UCLulcFoKMpsi8xicaRIZunQ", label: "YouTube" }
                ].map((social, index) => (
                  <Button key={index} size="lg" variant="outline" asChild className="w-12 h-12 p-0 rounded-full hover:scale-110 transition-transform duration-300">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </>
  )
}
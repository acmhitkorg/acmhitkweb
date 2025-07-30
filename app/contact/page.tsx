import Link from "next/link"
import { Mail, Send, ExternalLink, Linkedin } from "lucide-react"
import { socialMedia, teamContacts } from "@/data/index";
import { Navigation } from "@/components/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <AnimatedBackground />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl animate-pulse" />

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="animate-in slide-in-from-bottom-10 duration-1000">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions, suggestions, or want to collaborate? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="animate-in slide-in-from-bottom-10 duration-1000 delay-400">
              <GlassCard className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent" />

                <form className="relative space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                        <option>General Inquiry</option>
                        <option>Membership Question</option>
                        <option>Event Information</option>
                        <option>Technical Support</option>
                        <option>Partnership Opportunity</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 text-primary bg-background/50 border-border/50 rounded focus:ring-primary/20"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for updates and events
                    </label>
                  </div>

                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Team Contacts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Contact Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Reach out directly to our leadership team for specific inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamContacts.map((member, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <GlassCard className="p-6 h-full group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 dark:shadow-blue-500/5">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col items-center h-full">
                      {/* Avatar with Hover Effect */}
                      <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="relative w-24 h-24 object-cover rounded-full border-2 border-white/20 shadow-lg group-hover:border-blue-500/30 transition-all duration-500"
                        />
                      </div>

                      {/* Member Info */}
                      <div className="text-center flex-1 flex flex-col">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-4">{member.role}</p>
                        <div className="flex gap-3 justify-center w-full">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="group/button flex-1 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
                          >
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center justify-center gap-2"
                            >
                              <Mail className="h-4 w-4 text-blue-400 group-hover/button:text-blue-500 transition-colors" />
                              <span className="text-sm">Email</span>
                            </a>
                          </Button>

                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="group/button flex-1 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
                          >
                            <Link
                              href={member.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Linkedin className="h-4 w-4 text-blue-400 group-hover/button:text-blue-500 transition-colors" />
                              <span className="text-sm">Message</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Follow Us on Social Media
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay connected and updated with our latest activities and announcements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialMedia.map((social, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <GlassCard className="p-6 text-center group relative overflow-hidden cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                    <Link href={social.url} className="relative block">
                      <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-2">{social.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{social.description}</p>

                      <Button variant="ghost" size="sm" className="mt-4 group-hover:bg-primary/10">
                        {social.name === 'Youtube' ? 'Subscribe' : 'Follow'}
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Quick Answers
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions and their answers to help you quickly.
              </p>
            </div>

            <div className="animate-in slide-in-from-bottom-10 duration-1000 delay-400">
              <GlassCard className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent" />

                <div className="relative grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">General Information</h3>
                    <div className="space-y-3 text-sm">
                      <p><strong>Response Time:</strong> We typically respond within 24-48 hours</p>
                      <p><strong>Best Time to message:</strong> Monday-Friday, 10 AM - 5 PM</p>
                      <p><strong>Office Location:</strong> Department of Computer Science and Engineering, HITK</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                        <Link href="/join">Membership Application</Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                        <Link href="/events">Upcoming Events</Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                        <Link href="/about">About ACM HITK</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
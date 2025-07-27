import { Navigation } from "@/components/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const upcomingEvents = [
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
  ]

  const pastEvents = [
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
  ]

  return (
    <>
      <Navigation />
      <AnimatedBackground />
      
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Events & Activities
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us for exciting workshops, hackathons, seminars, and networking events designed to enhance your skills and expand your professional network.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't miss these exciting opportunities to learn and grow with us.
              </p>
            </div>
            
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <GlassCard key={event.id} className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === 'Workshop' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                          event.type === 'Symposium' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                          event.type === 'Hackathon' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                          'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                        }`}>
                          {event.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === 'Open' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                          event.status === 'Filling Fast' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-3 text-primary" />
                          <span className="font-medium">Speaker:</span>
                          <span className="ml-2">{event.speaker}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-3 text-primary" />
                          <span className="font-medium">Capacity:</span>
                          <span className="ml-2">{event.capacity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-3 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-3 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-3 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full">
                          Add to Calendar
                          <Calendar className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Past Events Archive
              </h2>
              <p className="text-lg text-muted-foreground">
                Take a look at our successful events and the impact we've made in our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <GlassCard key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {event.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} attendees</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      View Photos
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Past Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Event Calendar */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
              <p className="text-muted-foreground mb-6">
                Stay up-to-date with all our events by subscribing to our calendar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Google Calendar
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Outlook Calendar
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Apple Calendar
                </Button>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't Miss Out!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community to get notified about upcoming events and exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                <Link href="/join">Become a Member</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Event Updates</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
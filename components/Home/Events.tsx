import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users } from "lucide-react"
import Link from "next/link"

const Events = () => {
    return (
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
    );
}

export default Events;
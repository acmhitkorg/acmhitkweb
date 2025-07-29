import Link from "next/link"
import { ArrowRight, Calendar, Users } from "lucide-react"
import { upcomingEventsForHomePage } from "@/data/index"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"

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
                    {upcomingEventsForHomePage.map((event, index) => (
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

                            <div className="relative group/button">
                                <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="w-full opacity-50 cursor-not-allowed"
                                    disabled
                                >
                                    Registration Not Open Yet
                                </Button>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover/button:opacity-100 transition-opacity whitespace-nowrap">
                                    Registration details coming soon
                                    <div className="absolute bottom-0 left-1/2 -mb-1 w-2 h-2 bg-gray-800 transform -translate-x-1/2 rotate-45"></div>
                                </div>
                            </div>
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
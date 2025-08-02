import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"
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
                        <GlassCard
                            key={index}
                            className="group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/95 to-blue-50/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10"
                        >
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Subtle noise texture */}
                            <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]" style={{
                                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E")'
                            }} />

                            {/* Event type badge */}
                            <div className={`relative z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm
                              ${event.type === 'Workshop'
                                    ? 'bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-700 border-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/20 dark:border-blue-700/30 dark:text-blue-300'
                                    : event.type === 'Seminar'
                                        ? 'bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-700 border-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/20 dark:border-purple-700/30 dark:text-purple-300'
                                        : 'bg-gradient-to-r from-teal-50 to-teal-100/80 text-teal-700 border-teal-200/50 dark:from-teal-900/30 dark:to-teal-800/20 dark:border-teal-700/30 dark:text-teal-300'
                                }`}>
                                {event.type}
                            </div>

                            {/* Event date */}
                            <div className="relative z-10 flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 mt-3 mb-4 group-has-[.event-date]:hover:text-gray-700 dark:group-has-[.event-date]:hover:text-gray-300 transition-colors">
                                <Calendar className="h-4 w-4 mr-2 text-gray-400/80 dark:text-gray-500/80" />
                                <span className="event-date">{event.date}</span>
                            </div>

                            {/* Event title with gradient */}
                            <h3 className="relative z-10 text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                {event.title}
                            </h3>

                            {/* Event details with colored icons */}
                            <div className="relative z-10 space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-blue-500/80 dark:text-blue-400/80" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-2 text-green-500/80 dark:text-green-400/80" />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            {/* Description with fade effect */}
                            <div className="relative z-10 mb-6 overflow-hidden">
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                    {event.description}
                                </p>
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent dark:opacity-0 group-hover:opacity-0 transition-opacity" />
                            </div>

                            {/* Registration button */}
                            {event.registration_link && event.status === 'Registration Open' ? (
                                <a
                                    href={event.registration_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full group/button border-blue-200/80 dark:border-blue-700/80 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/50 hover:border-blue-300/70 dark:hover:from-blue-900/20 dark:hover:to-blue-800/10 dark:hover:border-blue-600/50 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10"
                                    >
                                        <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent font-medium">
                                            Register Now
                                        </span>
                                        <ExternalLink className="ml-2 h-4 w-4 text-blue-500" />
                                    </Button>
                                </a>
                            ) : (
                                <div className="relative z-10 group/button">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full group/button border-gray-200/80 dark:border-gray-700/80 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/50 hover:border-blue-200/70 dark:hover:from-blue-900/20 dark:hover:to-blue-800/10 dark:hover:border-blue-700/50 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10"
                                        disabled
                                    >
                                        <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent font-medium">
                                            {event.status || 'Registration Coming Soon'}
                                        </span>
                                    </Button>
                                    {!event.status && (
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-xs rounded py-1 px-2 opacity-0 group-hover/button:opacity-100 transition-opacity whitespace-nowrap">
                                            Registration details coming soon
                                            <div className="absolute bottom-0 left-1/2 -mb-1 w-2 h-2 bg-gray-800 dark:bg-gray-200 transform -translate-x-1/2 rotate-45"></div>
                                        </div>
                                    )}
                                </div>
                            )}
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
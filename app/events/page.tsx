'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight, Filter } from 'lucide-react';
import { upcomingEvents, pastEvents } from '@/data/index';
import { Navigation } from '@/components/navigation';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/animated-background';
import { EventModal } from '@/components/Events/EventModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Helper function to extract unique years from events
const getUniqueYears = (events: typeof pastEvents) => {
  const years = new Set<number>();
  events.forEach(event => {
    const year = new Date(event.date).getFullYear();
    years.add(year);
  });
  return Array.from(years).sort((a, b) => b - a); // Sort in descending order
};

type EventType = typeof pastEvents[number] & { year?: number };

export default function EventsPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  // Add year to each past event for filtering
  const enhancedPastEvents = useMemo(() => 
    pastEvents.map(event => ({
      ...event,
      year: new Date(event.date).getFullYear()
    })),
    []
  );

  // Get unique years from past events
  const availableYears = useMemo(
    () => getUniqueYears(enhancedPastEvents),
    [enhancedPastEvents]
  );

  // Filter events based on selected year
  const filteredPastEvents = useMemo(
    () => 
      selectedYear === 'all' 
        ? enhancedPastEvents 
        : enhancedPastEvents.filter(event => event.year === selectedYear),
    [enhancedPastEvents, selectedYear]
  );

  const handleEventClick = (event: EventType) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <Navigation />
      <AnimatedBackground />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl" />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Events & Activities
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us for exciting workshops, hackathons, seminars, and networking events designed to enhance your skills and expand your professional network.
            </p>
          </div>
        </section>

        {/* Events Tabs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs 
              defaultValue="upcoming" 
              className="w-full"
              onValueChange={(value) => setActiveTab(value as 'upcoming' | 'past')}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                <div className="text-center sm:text-left">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    {activeTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {activeTab === 'upcoming' 
                      ? "Don't miss these exciting opportunities to learn and grow with us."
                      : "Take a look at our successful events and the impact we've made in our community."}
                  </p>
                </div>
                
                <TabsList className="bg-background/50 backdrop-blur-sm">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
              </div>

              {/* Upcoming Events Tab */}
              <TabsContent value="upcoming" className="space-y-8">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <GlassCard key={event.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              event.type === 'Workshop' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                              event.type === 'Competition' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                              event.type === 'Seminar' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                              'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                            }`}>
                              {event.type}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              event.status === 'Open' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                              event.status === 'Filling Fast' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                              'bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300'
                            }`}>
                              {event.status}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground mb-4">{event.description}</p>

                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.speaker || 'Speaker TBA'}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.capacity}</span>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-1/3 flex flex-col justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="relative group/button">
                              <Button 
                                className="w-full bg-gradient-to-r from-blue-400 to-teal-400 cursor-not-allowed"
                                disabled
                              >
                                Registration Not Open Yet
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover/button:opacity-100 transition-opacity whitespace-nowrap">
                                Registration details coming soon
                                <div className="absolute bottom-0 left-1/2 -mb-1 w-2 h-2 bg-gray-800 transform -translate-x-1/2 rotate-45"></div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              className="w-full opacity-50 cursor-not-allowed"
                              disabled
                            >
                              Add to Calendar
                              <Calendar className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No upcoming events scheduled at the moment. Please check back later!</p>
                  </div>
                )}
              </TabsContent>

              {/* Past Events Tab */}
              <TabsContent value="past" className="space-y-6">
                {availableYears.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2 items-center">
                    <Filter className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm font-medium mr-2">Filter by year:</span>
                    <Button
                      variant={selectedYear === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedYear('all')}
                      className="text-xs"
                    >
                      All Years
                    </Button>
                    {availableYears.map((year) => (
                      <Button
                        key={year}
                        variant={selectedYear === year ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedYear(year)}
                        className="text-xs"
                      >
                        {year}
                      </Button>
                    ))}
                  </div>
                )}

                {filteredPastEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredPastEvents.map((event) => (
                      <GlassCard 
                        key={event.id} 
                        className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              event.type === 'Workshop' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                              event.type === 'Competition' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30' :
                              'bg-green-100 text-green-700 dark:bg-green-900/30'
                            }`}>
                              {event.type}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(event.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          
                          <div className="mt-auto pt-4 border-t border-border/50">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{event.attendees} attendees</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-primary hover:text-primary/80"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEventClick(event);
                                }}
                              >
                                View Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No past events found for the selected year.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
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

        {/* Event Modal */}
        <EventModal 
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          event={selectedEvent}
        />
      </main>
    </>
  )
}
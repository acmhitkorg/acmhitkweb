'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react';
import { upcomingEvents, pastEvents } from '@/data/index';
import { Navigation } from '@/components/navigation';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/animated-background';
import { EventModal } from '@/components/Events/EventModal';

// Define the event type based on the actual data structure
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  speaker: string;
  attendees?: number;
  photos?: string[];
  status?: string;
  capacity?: string;
  abstract?: string;
  year?: number;
}

// Helper function to extract unique years from events
const getUniqueYears = (events: Event[]) => {
  const years = new Set<number>();
  events.forEach(event => {
    const year = new Date(event.date).getFullYear();
    years.add(year);
  });
  return Array.from(years).sort((a, b) => b - a); // Sort in descending order
};

export default function EventsPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Format and enhance past events with year for filtering
  const enhancedPastEvents = useMemo(() => 
    (pastEvents as unknown as Event[]).map(event => ({
      ...event,
      year: new Date(event.date).getFullYear(),
      time: event.time || 'TBA',
      speaker: event.speaker || 'Speaker TBA',
      attendees: event.attendees || 0,
      photos: event.photos || []
    })),
    []
  );

  // Format upcoming events
  const formattedUpcomingEvents = useMemo(() => 
    (upcomingEvents as unknown as Event[]).map(event => ({
      ...event,
      time: event.time || 'TBA',
      speaker: event.speaker || 'Speaker TBA',
      attendees: 0,
      photos: []
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
    () => selectedYear === 'all' 
      ? enhancedPastEvents 
      : enhancedPastEvents.filter(event => event.year === selectedYear),
    [enhancedPastEvents, selectedYear]
  );

  const handleEventClick = (event: Event) => {
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

        {/* Upcoming Events Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't miss these exciting opportunities to learn and grow with us.
              </p>
            </div>

            {formattedUpcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {formattedUpcomingEvents.map((event) => (
                  <GlassCard 
                    key={event.id} 
                    className="group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/95 to-blue-50/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E")'
                    }} />
                    
                    {/* Event type badge with gradient */}
                    <div className={`relative z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 border backdrop-blur-sm
                      ${
                        event.type === 'Workshop' 
                          ? 'bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-700 border-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/20 dark:border-blue-700/30 dark:text-blue-300'
                          : event.type === 'Seminar'
                            ? 'bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-700 border-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/20 dark:border-purple-700/30 dark:text-purple-300'
                            : 'bg-gradient-to-r from-teal-50 to-teal-100/80 text-teal-700 border-teal-200/50 dark:from-teal-900/30 dark:to-teal-800/20 dark:border-teal-700/30 dark:text-teal-300'
                      }`}>
                      {event.type}
                    </div>

                    <h3 className="relative z-10 text-xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300">
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
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-purple-500/80 dark:text-purple-400/80" />
                        <span className="font-medium">{event.speaker}</span>
                      </div>
                    </div>

                    {/* Description with fade effect */}
                    <div className="relative z-10 mb-6 overflow-hidden">
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                        {event.description}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent dark:opacity-0 group-hover:opacity-0 transition-opacity" />
                    </div>

                    {/* Action button with glass effect */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group/button border-gray-200/80 dark:border-gray-700/80 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/50 hover:border-blue-200/70 dark:hover:from-blue-900/20 dark:hover:to-blue-800/10 dark:hover:border-blue-700/50 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10"
                      onClick={() => handleEventClick(event)}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent font-medium">
                        View Details
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 text-blue-500 dark:text-blue-400 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </GlassCard>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-medium text-muted-foreground">No upcoming events scheduled</h3>
                <p className="text-muted-foreground mt-2">Check back later for updates on our next events!</p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Past Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Take a look at our successful events and the impact we've made in our community.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-end mb-8">
              <Button
                variant={selectedYear === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedYear('all')}
                className="text-sm"
              >
                All Years
              </Button>
              {availableYears.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                  className="text-sm"
                >
                  {year}
                </Button>
              ))}
            </div>

            {filteredPastEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPastEvents.map((event) => (
                  <GlassCard key={event.id} className="group relative overflow-hidden p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-gray-50/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-sm border border-gray-100/60 dark:border-gray-700/50">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50/30 via-transparent to-blue-50/10 dark:from-gray-800/10 dark:to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E")'
                    }} />
                    
                    <div className="relative z-10 flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm
                        ${
                          event.type === 'Workshop' 
                            ? 'bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-700 border-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/20 dark:border-blue-700/30 dark:text-blue-300'
                            : event.type === 'Seminar'
                              ? 'bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-700 border-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/20 dark:border-purple-700/30 dark:text-purple-300'
                              : 'bg-gradient-to-r from-teal-50 to-teal-100/80 text-teal-700 border-teal-200/50 dark:from-teal-900/30 dark:to-teal-800/20 dark:border-teal-700/30 dark:text-teal-300'
                      }`}>
                        {event.type}
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 group-has-[.event-date]:hover:text-gray-700 dark:group-has-[.event-date]:hover:text-gray-300 transition-colors">
                        <Calendar className="h-3.5 w-3.5 mr-1.5 text-gray-400/80 dark:text-gray-500/80" />
                        <span className="event-date">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                    
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
                      {event.speaker && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-purple-500/80 dark:text-purple-400/80" />
                          <span className="font-medium">{event.speaker}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Description with fade effect */}
                    <div className="relative z-10 mb-6 overflow-hidden">
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                        {event.description}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent dark:opacity-0 group-hover:opacity-0 transition-opacity" />
                    </div>
                    
                    {/* Action button with glass effect */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group/button border-gray-200/80 dark:border-gray-700/80 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/50 hover:border-blue-200/70 dark:hover:from-blue-900/20 dark:hover:to-blue-800/10 dark:hover:border-blue-700/50 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10"
                      onClick={() => handleEventClick(event)}
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent font-medium">
                        View Details
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 text-blue-500 dark:text-blue-400 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </GlassCard>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-medium text-muted-foreground">No events found</h3>
                <p className="text-muted-foreground mt-2">Try selecting a different year or check back later for updates.</p>
              </div>
            )}
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
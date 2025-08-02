'use client';

import { X, ExternalLink, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    type: string;
    cardDescription: string;
    description: string;
    speaker: string;
    location: string;
    status?: string;
    capacity?: string;
    registration_link?: string;
    registration_deadline?: string;
    photos?: string[];
    bannerImage?: string;
    attendees?: number;
  } | null;
};


export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!event) return null;

  console.log(event.registration_deadline)

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4"
        hideCloseButton
      >
        <DialogHeader className="px-1 sm:px-0">
          <div className="flex justify-between items-start gap-4">
            <DialogTitle className="text-xl sm:text-2xl break-words pr-2">
              {event.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-9 w-9 flex-shrink-0"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted-foreground mt-2">
            <span className={`px-2 py-0.5 bg-primary/10 text-primary rounded-full whitespace-nowrap`}>
              {event.type}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">{event.date}</span>
            {event.location && (
              <>
                <span className="hidden sm:inline">•</span>
                <span className="whitespace-nowrap">{event.location}</span>
              </>
            )}
            {event.attendees && (
              <>
                <span>•</span>
                <span className="whitespace-nowrap">{event.attendees} attendees</span>
              </>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4 px-1 sm:px-0">
          {/* Banner Image at the top */}
          {event.bannerImage && (
            <div className="relative inline-block max-w-full -mx-1 sm:-mx-0">
              <Image
                src={event.bannerImage}
                alt={event.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto', maxHeight: '80vh' }}
                className="rounded-lg"
                priority
                onError={(e) => {
                  const container = (e.target as HTMLElement).parentElement;
                  if (container) container.style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/30 p-4 rounded-lg">
              {event.speaker && event.speaker !== "" && (
                <div className="flex items-start space-x-2">
                  <Users className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Speakers</h4>
                    <p className="text-muted-foreground text-sm">{event.speaker}</p>
                  </div>
                </div>
              )}
              {event.date && (
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Date</h4>
                    <p className="text-muted-foreground text-sm">
                      {format(new Date(event.date), 'MMMM d, yyyy')}
                      {event.time && ` • ${event.time}`}
                    </p>
                  </div>
                </div>
              )}
              {event.location && event.location !== "TBA" && (
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Location</h4>
                    <p className="text-muted-foreground text-sm">{event.location}</p>
                  </div>
                </div>
              )}
              {event.capacity && (
                <div className="flex items-start space-x-2">
                  <Users className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Capacity</h4>
                    <p className="text-muted-foreground text-sm">{event.capacity}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base mb-2">About the Event</h4>
                {event.description ? <div className="prose prose-sm dark:prose-invert prose-p:text-muted-foreground prose-ul:list-disc prose-ul:pl-5 prose-li:my-1 max-w-none">
                  <div
                    className="space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: event.description
                        .replace(/\n\s*\n/g, '</p><p>')
                        .replace(/\n/g, ' ')
                    }}
                  />
                </div> : <div>{event.cardDescription}</div>}
              </div>

              <div className="mt-6">
                {event.registration_link && event.registration_deadline && (
                  <div className="w-full">
                    {new Date() < new Date(event.registration_deadline) ? (
                      <Button
                        asChild
                        className="w-full"
                        disabled={event.status !== 'Registration Open'}
                      >
                        <Link
                          href={event.registration_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          {event.status === 'Registration Open' ? 'Register Now' : event.status || 'Registration Closed'}
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full" variant="outline" disabled>
                        Registration Closed
                      </Button>
                    )}
                    <p
                      className={`mt-2 text-sm ${new Date() > new Date(event.registration_deadline)
                        ? 'text-red-500 dark:text-red-400'
                        : 'text-muted-foreground'
                        }`}
                    >
                      {new Date() > new Date(event.registration_deadline)
                        ? 'Registration is now closed'
                        : `Closes: ${format(parseISO(event.registration_deadline), 'MMMM d, yyyy, hh:mm a')} IST`
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

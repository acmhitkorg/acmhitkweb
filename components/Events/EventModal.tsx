'use client';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    date: string;
    type: string;
    description: string;
    attendees?: number;
    photos?: string[];
    abstract?: string;
    speaker?: string;
    location?: string;
  } | null;
};

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!event) return null;

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
          {event.photos?.[0] && (
            <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden bg-muted">
              <Image
                src={event.photos[0]}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 95vw, 48rem"
                priority
              />
            </div>
          )}

          <div className="space-y-4">
            {event.speaker !== "" && (
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base">Speaker</h4>
                <p className="text-muted-foreground text-sm sm:text-base">{event.speaker}</p>
              </div>
            )}

            <div>
              <h4 className="font-medium text-foreground text-sm sm:text-base">About the Event</h4>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {event.abstract || event.description}
              </p>
            </div>

            {event.photos && event.photos.length > 1 && (
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base mb-2">Gallery</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {event.photos.slice(1).map((photo, idx) => (
                    <div key={idx} className="aspect-square relative rounded-md overflow-hidden">
                      <Image
                        src={photo}
                        alt={`${event.title} - Photo ${idx + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 45vw, 30vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

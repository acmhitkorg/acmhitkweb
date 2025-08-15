"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useBanner } from "@/context/BannerContext";
import { Event } from "@/types";

export function UpcomingEventBanner({ event }: { event: Event }) {
    const { setBannerVisible } = useBanner();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const dismissedBanner = localStorage.getItem(`banner-dismissed`);
        if (event && event.registration_deadline && event.registration_deadline > new Date().toISOString()) {
            if (dismissedBanner === 'true') {
                setIsVisible(false);
                setBannerVisible(false);
            } else {
                setIsVisible(true);
                setBannerVisible(true);
            }
        } else {
            setIsVisible(false);
            setBannerVisible(false);
        }
    }, [event, setBannerVisible]);

    const handleDismiss = () => {
        localStorage.setItem(`banner-dismissed`, 'true');
        setIsVisible(false);
        setBannerVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="w-full fixed top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="w-full relative flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 py-2.5">
                    {/* Event Info */}
                    <div className="w-full flex justify-between text-center md:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-[0.6rem] md:text-xs font-medium text-white/90">
                                🚀 Upcoming Event
                            </div>
                            <h3 className="text-base font-semibold line-clamp-1">
                                {event.title}
                            </h3>
                        </div>

                        <div className="hidden md:flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-white/90">
                            <span className="inline-flex items-center gap-1.5">
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {event.date}
                            </span>
                            <span className="hidden sm:inline-block text-white/40">•</span>
                            <span className="inline-flex items-center gap-1.5">
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {event.time}
                            </span>
                            <span className="hidden sm:inline-block text-white/40">•</span>
                            <span className="inline-flex items-center gap-1.5">
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {event.location}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex-shrink-0 flex items-center gap-2">
                            {event.registration_link && (
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white backdrop-blur-sm whitespace-nowrap transition-all duration-200 hover:scale-[1.03] active:scale-95"
                                >
                                    <Link href={event.registration_link} target="_blank"
                                        rel="noopener noreferrer">
                                        Register Now
                                        <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </Button>
                            )}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white/80 hover:bg-white/10 hover:text-white h-8 w-8 rounded-full transition-colors"
                                onClick={handleDismiss}
                                aria-label="Dismiss banner"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

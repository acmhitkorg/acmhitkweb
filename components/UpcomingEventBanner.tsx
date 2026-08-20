'use client';
import { EventModal } from '@/components/Events/EventModal';
import { Button } from '@/components/ui/button';
import { useBanner } from '@/context/BannerContext';
import { Event } from '@/types';
import { X, Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function UpcomingEventBanner({ event }: { event: Event }) {
	const { setBannerVisible } = useBanner();
	const [isVisible, setIsVisible] = useState(true);
	const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
	const [isMobile, setIsMobile] = useState(false);

	const handleEventClick = (event: Event) => {
		setSelectedEvent(event);
	};

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	useEffect(() => {
		const dismissedBanner = localStorage.getItem(`banner-dismissed`);
		if (event && event.date && event.date > new Date().toISOString()) {
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

	/* ─── Mobile Popup ─── */
	if (isMobile) {
		return (
			<>
				{/* Backdrop */}
				<div
					className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
					onClick={handleDismiss}
					aria-hidden="true"
				/>

				{/* Popup card */}
				<div
					role="dialog"
					aria-label="Upcoming Event"
					className="fixed bottom-0 left-0 right-0 z-50 mx-3 mb-4 rounded-2xl overflow-hidden shadow-2xl"
					style={{ maxWidth: 'calc(100vw - 1.5rem)' }}
				>
					{/* Gradient header */}
					<div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-4 pt-4 pb-3">
						<div className="flex items-start justify-between gap-3">
							<div className="flex flex-col gap-1.5 flex-1 min-w-0">
								<span className="inline-flex w-fit items-center px-2.5 py-0.5 rounded-full bg-white/15 text-[0.65rem] font-semibold text-white tracking-wide uppercase">
									🚀 Upcoming Event
								</span>
								<h3 className="text-base font-bold text-white leading-snug line-clamp-2">
									{event.title}
								</h3>
							</div>

							<button
								onClick={handleDismiss}
								aria-label="Dismiss banner"
								className="flex-shrink-0 mt-0.5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
							>
								<X className="h-4 w-4" />
							</button>
						</div>

						{/* Meta row */}
						<div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] text-white/80">
							{event.date && (
								<span className="inline-flex items-center gap-1">
									<Calendar className="h-3 w-3" />
									{event.date}
								</span>
							)}
							{event.time && (
								<span className="inline-flex items-center gap-1">
									<Clock className="h-3 w-3" />
									{event.time}
								</span>
							)}
							{event.location && (
								<span className="inline-flex items-center gap-1">
									<MapPin className="h-3 w-3" />
									{event.location}
								</span>
							)}
						</div>
					</div>

					{/* Action row */}
					<div className="bg-white dark:bg-zinc-900 px-4 py-3 flex items-center gap-2">
						{event.registration_link ? (
							<Link
								href={event.registration_link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-4 py-2.5 transition-all duration-200"
							>
								Register Now
								<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</Link>
						) : (
							<button
								onClick={() => handleEventClick(event)}
								className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-4 py-2.5 transition-all duration-200"
							>
								View Details
								<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</button>
						)}

						<button
							onClick={handleDismiss}
							className="inline-flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 text-sm px-3 py-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all duration-200"
						>
							Dismiss
						</button>
					</div>
				</div>

				<EventModal
					isOpen={!!selectedEvent}
					onClose={() => setSelectedEvent(null)}
					event={selectedEvent}
				/>
			</>
		);
	}

	/* ─── Desktop Banner ─── */
	return (
		<div className="w-full fixed top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow-lg">
			<div className="container mx-auto px-4">
				<div className="w-full relative flex flex-row items-center justify-between gap-3 py-2.5">
					{/* Event Info */}
					<div className="flex items-center gap-3 min-w-0">
						<div className="inline-flex shrink-0 items-center px-2.5 py-1 rounded-full bg-white/10 text-xs font-medium text-white/90">
							🚀 Upcoming Event
						</div>
						<h3 className="text-sm font-semibold truncate">
							{event.title}
						</h3>
					</div>

					{/* Date / Time / Location */}
					<div className="hidden md:flex items-center gap-x-4 text-xs text-white/90 shrink-0">
						{event.date && (
							<span className="inline-flex items-center gap-1.5">
								<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								{event.date}
							</span>
						)}
						{event.time && (
							<>
								<span className="text-white/40">•</span>
								<span className="inline-flex items-center gap-1.5">
									<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{event.time}
								</span>
							</>
						)}
						{event.location && (
							<>
								<span className="text-white/40">•</span>
								<span className="inline-flex items-center gap-1.5">
									<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									{event.location}
								</span>
							</>
						)}
					</div>

					{/* Action Buttons */}
					<div className="flex-shrink-0 flex items-center gap-2">
						{event.registration_link ? (
							<Button
								asChild
								variant="outline"
								size="sm"
								className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white backdrop-blur-sm whitespace-nowrap transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
							>
								<Link
									href={event.registration_link}
									target="_blank"
									rel="noopener noreferrer"
								>
									Register Now
									<svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</Link>
							</Button>
						) : (
							<Button
								asChild
								variant="outline"
								size="sm"
								className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white backdrop-blur-sm whitespace-nowrap transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
								onClick={() => handleEventClick(event)}
							>
								<span>
									View Details
									<svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</span>
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
			<EventModal
				isOpen={!!selectedEvent}
				onClose={() => setSelectedEvent(null)}
				event={selectedEvent}
			/>
		</div>
	);
}

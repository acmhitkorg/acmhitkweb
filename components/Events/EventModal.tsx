'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { formatCurrency } from '@/lib/utils';
import { Event } from '@/types';
import { format, parseISO } from 'date-fns';
import { X, ExternalLink, Calendar, Clock, MapPin, Users, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type EventModalProps = {
	isOpen: boolean;
	onClose: () => void;
	event: Event | null;
};

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
	const getFileType = (url: string) => {
		const ext = url.split('.').pop()?.split('?')[0]?.toUpperCase();
		return ext || 'FILE';
	};

	const getFileTypeStyle = (type: string) => {
		switch (type) {
			case 'PDF':
				return 'bg-gradient-to-r from-red-50 to-red-100/80 text-red-700 border-red-200/50 dark:from-red-900/30 dark:to-red-800/20 dark:border-red-700/30 dark:text-red-300';

			case 'PPT':
			case 'PPTX':
				return 'bg-gradient-to-r from-orange-50 to-orange-100/80 text-orange-700 border-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/20 dark:border-orange-700/30 dark:text-orange-300';

			case 'DOC':
			case 'DOCX':
				return 'bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-700 border-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/20 dark:border-blue-700/30 dark:text-blue-300';

			default:
				return 'bg-gradient-to-r from-gray-50 to-gray-100/80 text-gray-700 border-gray-200/50 dark:from-gray-900/30 dark:to-gray-800/20 dark:border-gray-700/30 dark:text-gray-300';
		}
	};

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
						<div
							className={`relative z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm
                              ${
									event.type === 'Workshop'
										? 'bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-700 border-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/20 dark:border-blue-700/30 dark:text-blue-300'
										: event.type === 'Seminar'
											? 'bg-gradient-to-r from-purple-50 to-purple-100/80 text-purple-700 border-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/20 dark:border-purple-700/30 dark:text-purple-300'
											: 'bg-gradient-to-r from-teal-50 to-teal-100/80 text-teal-700 border-teal-200/50 dark:from-teal-900/30 dark:to-teal-800/20 dark:border-teal-700/30 dark:text-teal-300'
								}`}
						>
							{event.type}
						</div>
						<span className="hidden sm:inline">•</span>
						<span className="whitespace-nowrap">{event.date}</span>
						{event.location && (
							<>
								<span className="hidden sm:inline">•</span>
								<span className="whitespace-nowrap">{event.location}</span>
							</>
						)}
						{event.attendees && event.attendees > 0 && (
							<>
								<span className="hidden sm:inline">•</span>
								<span className="whitespace-nowrap">
									{event.attendees} attendees
								</span>
							</>
						)}
					</div>
				</DialogHeader>

				<div className="space-y-6 py-4 px-1 sm:px-0">
					{/* Banner Image at the top */}
					{Array.isArray(event?.bannerImages) && event.bannerImages.length === 1 && (
						<div className="relative inline-block max-w-full -mx-1 sm:-mx-0">
							<Image
								src={event.bannerImages[0]}
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
					{Array.isArray(event?.bannerImages) && event.bannerImages.length > 1 && (
						<Carousel opts={{ align: 'start' }} className="relative">
							<CarouselContent>
								{event.bannerImages.map((image, index) => (
									<CarouselItem key={index} className="basis-full">
										<Image
											src={image}
											alt={event.title}
											width={1200}
											height={600}
											className="w-full h-auto rounded-lg"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							{/* Controls at bottom center */}
							<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
								<CarouselPrevious className="static translate-y-0" />
								<CarouselNext className="static translate-y-0" />
							</div>
						</Carousel>
					)}

					<div className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/30 p-4 rounded-lg">
							{event.speaker && event.speaker !== '' && (
								<div className="flex items-start space-x-2">
									<Users className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
									<div>
										<h4 className="font-medium text-foreground text-sm">
											Speakers
										</h4>
										<p className="text-muted-foreground text-sm">
											{event.speaker}
										</p>
									</div>
								</div>
							)}
							{event.date && (
								<div className="flex items-start space-x-2">
									<Calendar className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
									<div>
										<h4 className="font-medium text-foreground text-sm">
											Date
										</h4>
										<p className="text-muted-foreground text-sm">
											{event.displayDate}
											{event.time && ` • ${event.time}`}
										</p>
									</div>
								</div>
							)}
							{event.location && event.location !== 'TBA' && (
								<div className="flex items-start space-x-2">
									<MapPin className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
									<div>
										<h4 className="font-medium text-foreground text-sm">
											Location
										</h4>
										<p className="text-muted-foreground text-sm">
											{event.location}
										</p>
									</div>
								</div>
							)}
							{event.capacity && (
								<div className="flex items-start space-x-2">
									<Users className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
									<div>
										<h4 className="font-medium text-foreground text-sm">
											Capacity
										</h4>
										<p className="text-muted-foreground text-sm">
											{event.capacity}
										</p>
									</div>
								</div>
							)}
							{event.prizepool && event.price_currency && (
								<div className="flex items-start space-x-2">
									<Trophy className="h-5 w-5 mt-0.5 text-amber-500 flex-shrink-0" />
									<div>
										<h4 className="font-medium text-foreground text-sm">
											Prize Pool
										</h4>
										<p className="text-muted-foreground text-sm font-medium">
											{formatCurrency(event.prizepool, event.price_currency)}
										</p>
									</div>
								</div>
							)}
						</div>

						<div className="space-y-4">
							<div>
								<h4 className="font-medium text-foreground text-sm sm:text-base mb-2">
									About the Event
								</h4>
								{event.description ? (
									<div className="prose prose-sm dark:prose-invert prose-p:text-muted-foreground prose-ul:list-disc prose-ul:pl-5 prose-li:my-1 max-w-none">
										<div
											className="space-y-4"
											dangerouslySetInnerHTML={{
												__html: event.description
													.replace(/\n\s*\n/g, '</p><p>')
													.replace(/\n/g, ' '),
											}}
										/>
									</div>
								) : (
									<div>{event.cardDescription}</div>
								)}
							</div>

							{event.attachments && event.attachments.length > 0 && (
								<div className="space-y-3">
									<h4 className="font-medium text-foreground text-sm sm:text-base">
										Attachments
									</h4>

									<div className="flex flex-col gap-2">
										{event.attachments.map((file, index) => (
											<a
												key={index}
												href={file.url}
												target="_blank"
												rel="noopener noreferrer"
												className="w-full"
											>
												<Button
													variant="outline"
													className="w-full justify-between items-center"
												>
													<div className="flex items-center gap-2 min-w-0">
														<span className="truncate">
															{file.name}
														</span>

														<span
															className={`text-[10px] px-2 py-0.5 rounded-full border backdrop-blur-sm font-medium shrink-0 ${getFileTypeStyle(
																getFileType(file.url)
															)}`}
														>
															{getFileType(file.url)}
														</span>
													</div>
													<ExternalLink className="h-4 w-4 ml-2" />
												</Button>
											</a>
										))}
									</div>
								</div>
							)}

							<div className="mt-6">
								{event.registration_link && event.registration_deadline && (
									<div className="w-full">
										{new Date() < new Date(event.registration_deadline) ? (
											<Button
												asChild
												className="w-full"
												disabled={event.status !== 'open'}
											>
												<Link
													href={event.registration_link}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center justify-center gap-2"
												>
													{event.status === 'open'
														? 'Register Now'
														: 'Registration Closed'}
													<ExternalLink className="h-4 w-4" />
												</Link>
											</Button>
										) : (
											<Button className="w-full" variant="outline" disabled>
												Registration Closed
											</Button>
										)}
										<p
											className={`mt-2 text-sm ${
												new Date() > new Date(event.registration_deadline)
													? 'text-red-500 dark:text-red-400'
													: 'text-muted-foreground'
											}`}
										>
											{new Date() > new Date(event.registration_deadline)
												? 'Registration is now closed'
												: `Closes: ${format(parseISO(event.registration_deadline), 'MMMM d, yyyy, hh:mm a')} IST`}
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

'use client'
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import Image from "next/image"
import { gallerySections } from "@/data/gallery-data"

export default function PhotoGallery() {
	const [selectedYearIndex, setSelectedYearIndex] = useState(0)
	const [selectedEventIndex, setSelectedEventIndex] = useState(0)
	const selectedSection = gallerySections[selectedYearIndex]
	const event = selectedSection.events[selectedEventIndex]

	return (
		<div className="min-h-screen">
			<Navigation />
			<AnimatedBackground />

			<main className="min-h-screen pt-24">
				{/* Hero Section */}
				<section className="py-12 px-4 sm:px-6 lg:px-8 relative">
					<div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl animate-pulse" />

					<div className="max-w-4xl mx-auto text-center relative">
						<div className="animate-in slide-in-from-bottom-10 duration-1000">
							<h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
								Photo Gallery
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed">
								Moments captured from our events and activities
							</p>
						</div>
					</div>
				</section>

				{/* Gallery Section */}
				<section className="relative z-10 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Year Tabs */}
					<div className="flex flex-wrap justify-center gap-3 mb-12">
						{gallerySections.map((section, index) => (
							<button
								key={section.year}
								onClick={() => {
									// console.log("Selected year index:", index)
									setSelectedYearIndex(index)
									setSelectedEventIndex(0)
								}}
								className={`px-5 py-2.5 text-sm sm:text-base font-semibold rounded-full border transition-all duration-300
${selectedYearIndex === index
										? "bg-blue-600 text-white border-blue-600 shadow-sm"
										: "bg-transparent text-foreground border-muted-foreground hover:bg-blue-50 hover:text-blue-700"
									}`}
							>
								{section.year}
							</button>
						))}
					</div>

					<div className="flex flex-wrap justify-center gap-1.5 mb-8">
						<h4 className="w-full text-center text-base text-muted-foreground mb-3">
							Events in {selectedSection.year}
						</h4>
						{selectedSection.events.map((event, index) => (
							<button
								key={event.name}
								onClick={() => setSelectedEventIndex(index)}
								className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300
${selectedEventIndex === index
										? "bg-teal-600 text-white border-teal-600 shadow-sm"
										: "bg-muted/40 text-foreground border-muted-foreground hover:bg-teal-50 hover:text-teal-700"
									}`}
							>
								{event.name}
							</button>
						))}
					</div>


					{/* Selected Year Gallery */}
					<div className="animate-in fade-in duration-500 mb-14">
						<h3 className="text-xl font-semibold mb-4 text-center text-foreground">
							{event.date} - {event.name}
						</h3>
						<div key={`${selectedSection.year}-${event.name}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{event.images.map((image, imageIndex) => (
								<div
									key={`${event.path}-${image}`}
									className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-64"
								>
									<Image
										src={`/photo-gallery${event.path}/${image}`}
										alt={`${event.name} - Image ${imageIndex + 1}`}
										fill
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										priority={selectedYearIndex === 0 && selectedEventIndex === 0 && imageIndex < 4}
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

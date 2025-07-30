import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import Image from "next/image"

// Organize images by year/event
const gallerySections = [
    {
        year: "2024-25",
        events: [
            {
                name: "March 2025 - Brainstorm Session",
                path: "/ACM-Pics-2024_25/Geo-Tagged-Pic/10th March BrainStorm_25",
                images: [
                    "20250310_41311PM_ByGPSMapCamera.jpg",
                    "20250310_41327PM_ByGPSMapCamera.jpg",
                    "20250310_41331PM_ByGPSMapCamera.jpg",
                    "20250310_41508pm_ByGPSMapCamera.jpg",
                    "20250310_41511pm_ByGPSMapCamera.jpg",
                    "20250310_41517pm_ByGPSMapCamera.jpg",
                    "20250310_41520pm_ByGPSMapCamera.jpg",
                    "20250310_41527pm_ByGPSMapCamera.jpg",
                    "20250310_41534pm_ByGPSMapCamera.jpg",
                    "20250310_41553pm_ByGPSMapCamera.jpg",
                    "20250310_41556pm_ByGPSMapCamera.jpg",
                    "20250310_41620pm_ByGPSMapCamera.jpg",
                    "20250310_41622pm_ByGPSMapCamera.jpg",
                    "20250310_41629pm_ByGPSMapCamera.jpg"
                ]
            },
            {
                name: "November 2024 - ACM Annual Regional Meet",
                path: "/ACM-Pics-2024_25/ACM ARM",
                images: [
                    "arm-img3.jpg",
                    "arm-img2.jpg",
                    "arm-img1.jpg",
                    "arm-img0.jpg",
                ]
            }
        ]
    },
    {
        year: "2023-24",
        events: [
            {
                name: "May 2024 - Tanmoy Chakraborty Session",
                path: "/ACM-Pics-2023_24/Tanmoy Chakraborty talk on LLMs",
                images: ["Tanmoy-Chakraborty-talk.JPG",
                    "Tanmoy-Chakraborty-talk-1.JPG"]
            },
            {
                name: "April 2024 - Generative AI Workshop",
                path: "/ACM-Pics-2023_24/16_April_2024",
                images: [
                    "Generative AI Pic1.jpeg",
                    "Generative AI Pic2.jpeg"
                ]
            },
            {
                name: "April 2024 - Sourav Sir Session",
                path: "/ACM-Pics-2023_24/15_April_2024",
                images: [
                    "Sourav Sir ACM 1.jpg",
                    "Sourav Sir ACM 2.jpg",
                    "Sourav Sir ACM 3.jpg",
                    "Sourav Sir ACM 4.jpg",
                    "Sourav Sir Presentation.jpeg",
                    "Sourav Sir Presentation1.jpeg",
                    "Sourav Sir Presentation2.jpeg"
                ]
            },
            {
                name: "February 2024 - Brainstorm Session",
                path: "/ACM-Pics-2023_24/26_Feb_2024 Brainstorm",
                images: [
                    "1.jpg",
                    "2.jpg",
                    "IMG-20240226-WA0003.jpg",
                    "IMG-20240226-WA0005.jpg",
                    "IMG-20240226-WA0006.jpg",
                    "IMG-20240226-WA0007.jpg",
                    "IMG-20240226-WA0008.jpg"
                ]
            },
            {
                name: "February 2024 - TIFR Visit",
                path: "/ACM-Pics-2023_24/09-Feb-2024",
                images: [
                    "09-02-2024_TIFR_1.jpeg",
                    "09-02-2024_TIFR_2.jpeg",
                    "09-02-2024_TIFR_3.jpeg"
                ]
            },
            {
                name: "December 2023 - Michael Chen Talk",
                path: "/ACM-Pics-2023_24/14th Dec_2023_ Michael Chen",
                images: [
                    "Michael_s Talk_1.jpg",
                    "Michael_s Talk_2.jpg",
                    "Michael_s Talk_3.jpg"
                ]
            },
            {
                name: "September 2023 - Ashmi Banerjee Session",
                path: "/ACM-Pics-2023_24/27-SeP Ashmi",
                images: [
                    "20230927_41347PMByGPSMapCamera.jpg",
                    "20230927_41353PMByGPSMapCamera.jpg",
                    "20230927_41405PMByGPSMapCamera.jpg"
                ]
            }
        ]
    },
    {
        year: "2022-23",
        events: [
            {
                name: "ACM Events 2022-23",
                path: "/ACM-Pics-2022_23",
                images: [
                    "10_02_2023.jpg",
                    "1666162499885.jpg",
                    "20220916_25154PMByGPSMapCamera.jpg",
                    "20230310_30414pmByGPSMapCamera.jpg",
                    "20230310_33558pmByGPSMapCamera.jpg",
                    "504acc41-ae28-469c-b001-e366cbc1227a.jpg",
                    "6d872639-0099-4d47-8079-82ddfd0c3097.jpg",
                    "ed4cf317-214f-42cf-b14f-a47003c5c29e.jpg"
                ]
            }
        ]
    }
]

export default function PhotoGallery() {

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
                <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {gallerySections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-16">
                            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                {section.year}
                            </h2>

                            {section.events.map((event, eventIndex) => (
                                <div key={eventIndex} className="mb-12">
                                    <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                                        {event.name}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {event.images.map((image, imageIndex) => (
                                            <div
                                                key={imageIndex}
                                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-64"
                                            >
                                                <div className="w-full h-full">
                                                    <Image
                                                        src={`/photo-gallery${event.path}/${image}`}
                                                        alt={`${event.name} - Image ${imageIndex + 1}`}
                                                        fill
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                        priority={sectionIndex === 0 && eventIndex === 0 && imageIndex < 4}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                    <p className="text-white text-sm font-medium truncate">
                                                        {event.name}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}

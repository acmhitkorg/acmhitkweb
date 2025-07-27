import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const HeroSection = () => {
    return (
        <section className="h-screen flex justify-center items-center relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl" />

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-pulse">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping" />
                        Now Accepting New Members
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-10 duration-1000">
                        Innovate. Collaborate. Grow.
                    </h1>

                    <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-10 duration-1000 delay-200">
                        The official ACM Student Chapter of Heritage Institute of Technology, fostering a vibrant community of computing enthusiasts through innovation, learning, and collaboration.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-10 duration-1000 delay-400">
                        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            <Link href="/join">
                                Join Our Community
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                            <Link href="/events">
                                View Upcoming Events
                                <Calendar className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>);
}

export default HeroSection;
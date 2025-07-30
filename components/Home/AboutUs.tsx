import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const AboutUs = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <GlassCard className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                What is ACM HITK?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                We are the student chapter of the Association for Computing Machinery at Heritage Institute of Technology. Our mission is to create an inclusive environment where students can explore cutting-edge technologies, develop professional skills, and build lasting connections in the computing community.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Through workshops, hackathons, guest lectures, and collaborative projects, we empower our members to become innovative leaders in the ever-evolving world of technology.
                            </p>
                            <Button asChild variant="outline" size="lg" className="group">
                                <Link href="/about">
                                    Learn More About Us
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl blur-2xl" />
                            <GlassCard className="relative p-8">
                                <h3 className="text-lg font-semibold text-center mb-6 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                                    Our Impact
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="flex flex-col items-center p-4 rounded-lg bg-background/50 dark:bg-foreground/5 hover:bg-foreground/5 dark:hover:bg-foreground/10 transition-colors">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">100+</div>
                                        <div className="text-sm text-muted-foreground mt-1">Members</div>
                                    </div>
                                    <div className="flex flex-col items-center p-4 rounded-lg bg-background/50 dark:bg-foreground/5 hover:bg-foreground/5 dark:hover:bg-foreground/10 transition-colors">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">12+</div>
                                        <div className="text-sm text-muted-foreground mt-1">Seminars</div>
                                    </div>
                                    <div className="flex flex-col items-center p-4 rounded-lg bg-background/50 dark:bg-foreground/5 hover:bg-foreground/5 dark:hover:bg-foreground/10 transition-colors">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">7+</div>
                                        <div className="text-sm text-muted-foreground mt-1">Workshops</div>
                                    </div>
                                </div>
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    And counting! Join our growing community.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    )
}

export default AboutUs
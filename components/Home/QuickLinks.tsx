import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { Users, ExternalLink } from "lucide-react"
import Link from "next/link"
import { socialMedia } from "@/data/index"

const QuickLinks = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                        Get Involved
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Take the next step in your journey with ACM HITK. Connect, learn, and grow with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            title: "Become a Member",
                            description: "Join our vibrant community and unlock exclusive benefits.",
                            href: "/join",
                            icon: Users
                        },
                        {
                            title: "Meet the Team",
                            description: "Get to know our passionate executive board and members.",
                            href: "/team",
                            icon: Users
                        },
                        {
                            title: "Contact Us",
                            description: "Have questions? We'd love to hear from you.",
                            href: "/contact",
                            icon: ExternalLink
                        }
                    ].map((item, index) => (
                        <GlassCard key={index} className="p-6 text-center group cursor-pointer">
                            <Link href={item.href} className="block">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </Link>
                        </GlassCard>
                    ))}
                </div>

                {/* Social Media Links */}
                <GlassCard className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">Follow Us on Social Media</h3>
                    <p className="text-muted-foreground mb-6">Stay updated with our latest news and events</p>

                    <div className="flex justify-center space-x-4">
                        {socialMedia.map((social, index) => (
                            <Button key={index} size="lg" variant="outline" asChild className="w-12 h-12 p-0 rounded-full hover:scale-110 transition-transform duration-300">
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <social.icon className="h-5 w-5" />
                                    <span className="sr-only">{social.name}</span>
                                </a>
                            </Button>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
export default QuickLinks;
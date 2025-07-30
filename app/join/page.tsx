import Link from "next/link"
import { CheckCircle, ArrowRight, ExternalLink, Star, Mail } from "lucide-react"
import { benefits } from "@/data/index"
import { Navigation } from "@/components/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { Testimonials } from "@/components/Testimonials"

export default function JoinPage() {
  return (
    <>
      <Navigation />
      <AnimatedBackground />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl animate-pulse" />

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="animate-in slide-in-from-bottom-10 duration-1000">
              {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-pulse">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping" />
                Membership Applications Open
              </div> */}

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Join ACM HITK
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Become part of a vibrant community of computing enthusiasts and accelerate your journey in technology.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Why Join ACM HITK?
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover the incredible benefits and opportunities that await you as a member.
              </p>
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <GlassCard className="p-6 text-center group relative overflow-hidden h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="relative">
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-in slide-in-from-bottom-10 duration-1000 delay-400">
            <GlassCard className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-transparent" />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join hundreds of students who have transformed their careers through ACM HITK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Link href="/join">
                      <span>Join Our Community</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">
                      <span>Have Questions?</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    Questions about membership? Contact us directly:
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="ghost" size="sm" className="group">
                      <Link className="flex items-center" href="mailto:acmhitk.studentchapter@gmail.com">
                        <Mail className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                        <span>acmhitk.studentchapter@gmail.com</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </>
  )
}
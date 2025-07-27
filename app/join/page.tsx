import Link from "next/link"
import { CheckCircle, ArrowRight, ExternalLink, Star } from "lucide-react"
import { benefits, membershipTiers, joinSteps, testimonials } from "@/data/index"
import { Navigation } from "@/components/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-pulse">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping" />
                Membership Applications Open
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Join ACM HITK
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Become part of a vibrant community of computing enthusiasts and accelerate your journey in technology.
              </p>

              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Apply for Membership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
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

        {/* Membership Tiers */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 min-h-fit">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Membership Plan
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our community and unlock exclusive benefits and opportunities
              </p>
            </div>

            <div className="flex justify-center">
              {membershipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="w-full max-w-md animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <GlassCard className="flex flex-col justify-center items-center gap-6 pt-10 px-8 pb-8">
                    {tier.popular && (
                      <div className="relative transform z-10">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md inline-flex items-center whitespace-nowrap">
                          <Star className="h-3 w-3 mr-1.5" fill="currentColor" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent" />
                    <div className="relative text-center space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                        <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                        <p className="text-muted-foreground">{tier.description}</p>
                      </div>

                      <div className="space-y-4 text-left">
                        {tier.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                        size="lg"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                How to Join
              </h2>
              <p className="text-lg text-muted-foreground">
                Follow these simple steps to become a member of ACM HITK.
              </p>
            </div>

            <div className="space-y-8">
              {joinSteps.map((step, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <GlassCard className="p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent" />

                    <div className="relative flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{step.step}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                What Our Members Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from our successful alumni and current members.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <GlassCard className="p-6 text-center group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      <div className="mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-20 h-20 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.year}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Link href="/join">Apply for Membership</Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Have Questions?</Link>
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    Questions about membership? Contact us directly:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="ghost" size="sm" className="group">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                      membership@acmhitk.org
                    </Button>
                    <Button variant="ghost" size="sm" className="group">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                      WhatsApp: +91 98765 43210
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
"use client"

import { useEffect, useRef, useCallback } from "react"
import { testimonials } from "@/data/index"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonialRefs = useRef<Array<HTMLDivElement | null>>([])

  const setTestimonialRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    testimonialRefs.current[index] = el
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRefs = testimonialRefs.current
    currentRefs.forEach((ref) => ref && observer.observe(ref))

    return () => {
      currentRefs.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Alumni Experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our past members about their journey with ACM HITK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={setTestimonialRef(index)}
              className="opacity-0 translate-y-4 transition-all duration-500 ease-out"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <Card className="h-full group overflow-hidden transition-all duration-300 hover:shadow-lg border-border/30 hover:border-blue-500/30 dark:hover:border-teal-500/30 flex flex-col">
                <div className="relative h-32 bg-gradient-to-r from-blue-500/10 to-teal-500/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 w-28 h-28">
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-0.5">
                        <div className="h-full w-full rounded-full bg-background p-0.5">
                          <Avatar className="h-full w-full border-2 border-background shadow-lg group-hover:scale-105 transition-transform duration-500">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-2xl text-white">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-16 pb-6 px-6 flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto">
                    <Quote className="h-7 w-7 mx-auto text-blue-500/30 dark:text-teal-500/30 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-foreground/80 dark:text-foreground/80 leading-relaxed italic text-sm md:text-base">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <h4 className="text-lg font-bold text-foreground">{testimonial.name}</h4>
                    <div className="mt-1">
                      <p className="text-sm text-muted-foreground font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

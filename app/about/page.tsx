import Link from "next/link"
import { Target, Eye, BookOpen, Lightbulb, Handshake } from "lucide-react"
import Image from "next/image";
import { goals } from "@/data"
import { Navigation } from "@/components/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AnimatedBackground />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl" />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              About ACM HITK
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empowering the next generation of computing professionals through innovation, collaboration, and continuous learning.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <GlassCard className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To create an inclusive and dynamic environment where students can explore cutting-edge technologies,
                  develop professional skills, engage in meaningful research, and build lasting connections within the
                  global computing community. We strive to bridge the gap between academic learning and industry requirements.
                </p>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading student organization that nurtures innovative thinking, promotes excellence in
                  computing education, and produces future leaders who will drive technological advancement and
                  positive change in society. We envision a community where every member thrives and contributes meaningfully.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* What is ACM */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  What is ACM?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The Association for Computing Machinery (ACM) is the world's largest educational and scientific
                  computing society, advancing computing as a science and profession.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Educational Excellence</h3>
                  <p className="text-muted-foreground">
                    Promoting the highest standards in computing education and research worldwide.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
                  <p className="text-muted-foreground">
                    Fostering innovation and breakthrough discoveries in computing technologies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                  <p className="text-muted-foreground">
                    Connecting computing professionals and students across the globe.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* How It All Started */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                How It All Started
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The beginning of an extraordinary journey in technology and community building
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 p-8 rounded-2xl backdrop-blur-sm">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    ACM is the world's largest educational & scientific computing society. ACM Student Chapters provide unique opportunities for networking, mentoring, and bonding over common interests. They provide support both within the student community and to local communities outside the institution.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    ACM Student Chapter at HITK was founded by <span className="font-medium text-foreground">Prof. (Dr.) Subhashis Majumdar</span>, HOD CSE & Dean UG Affairs at HITK and <span className="font-medium text-foreground">Prof. (Dr.) Partha Basuchowdhuri</span>, Former Associate Professor, CSE at HITK on <span className="font-medium text-foreground">18th December 2011</span>.
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex items-center">
                <div className="relative w-full h-64 md:h-full overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/about-us-img0.png"
                    alt="ACM HITK Founding Members"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {goals.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500/5 to-teal-500/5 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gratitude Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Our Gratitude
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are deeply grateful to the visionary leaders and institutions whose unwavering support and guidance have been instrumental in shaping ACM HITK's journey. Their belief in our mission to foster computing excellence continues to inspire us.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-teal-500/10 p-8 rounded-2xl backdrop-blur-sm mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Our heartfelt thanks to our founders, <span className="font-medium text-foreground">Prof. (Dr.) Subhashis Majumdar</span> and <span className="font-medium text-foreground">Prof. (Dr.) Partha Basuchowdhuri</span>, for their vision and dedication in establishing the ACM Student Chapter at HITK on <span className="font-medium text-foreground">18th December 2011</span>. Their leadership laid the foundation for our vibrant computing community.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are equally grateful to the leadership of <Link href='https://heritageit.edu/' className="font-medium text-foreground">Heritage Institute of Technology</Link> and <span className="font-medium text-foreground">Kalyan Bharti Trust</span> for their continuous support and for providing an environment that encourages technological innovation and academic excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <Image
                    src="/PKAgarwal-CEO-KBT.jpg"
                    alt="Shri P. K. Agarwal"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Shri P. K. Agarwal</h3>
                <p className="text-sm text-muted-foreground">CEO</p>
                <p className="text-sm text-muted-foreground">Kalyan Bharti Trust</p>
              </div>

              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <Image
                    src="/Mr-BasabChaudhuri4-Principal.jpg"
                    alt="Prof. (Dr.) Basab Chaudhuri"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Prof. (Dr.) Basab Chaudhuri</h3>
                <p className="text-sm text-muted-foreground">Principal</p>
                <p className="text-sm text-muted-foreground">Heritage Group of Institutions</p>
              </div>

              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <Image
                    src="/Dr-Subhashis-Majumder.png"
                    alt="Prof. (Dr.) Subhashis Majumder"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Prof. (Dr.) Subhashis Majumder</h3>
                <p className="text-sm text-muted-foreground">HOD, CSE Department</p>
                <p className="text-sm text-muted-foreground">Dean UG Affairs, HITK</p>
                <p className="text-xs text-muted-foreground mt-1">Co-founder, ACM HITK</p>
              </div>

              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <Image
                    src="/Dr-Partha-Basuchowdhuri.png"
                    alt="Prof. (Dr.) Partha Basuchowdhuri"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Prof. (Dr.) Partha Basuchowdhuri</h3>
                <p className="text-sm text-muted-foreground">Former Associate Professor, CSE</p>
                <p className="text-sm text-muted-foreground">Heritage Institute of Technology</p>
                <p className="text-xs text-muted-foreground mt-1">Co-founder, ACM HITK</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Culture */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Our Values & Culture
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The principles that guide us and the culture that defines our community.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                  <ul className="space-y-3">
                    {[
                      "Innovation and creativity in problem-solving",
                      "Inclusivity and diversity in all our activities",
                      "Continuous learning and professional growth",
                      "Collaboration and teamwork",
                      "Ethical practices and social responsibility",
                      "Excellence in everything we do"
                    ].map((value, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Culture</h3>
                  <p className="text-muted-foreground mb-4">
                    At ACM HITK, we foster a culture of openness, curiosity, and mutual support. We believe that
                    the best innovations come from diverse perspectives and collaborative efforts.
                  </p>
                  <p className="text-muted-foreground">
                    Our members are encouraged to take initiative, experiment with new ideas, and learn from
                    both successes and failures. We celebrate achievements together and support each other
                    through challenges, creating lasting bonds that extend beyond college.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards an exciting journey of learning, growth, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                <Link href="/join">Join ACM HITK</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

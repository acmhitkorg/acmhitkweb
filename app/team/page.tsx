import Link from "next/link"
import { currentTeam } from "@/data/index"
import { Navigation } from "@/components/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <AnimatedBackground />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl animate-pulse" />

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="animate-in slide-in-from-bottom-10 duration-1000">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Meet Our Team
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The passionate individuals driving innovation and excellence at ACM HITK.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Sponsor */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Faculty Sponsor
              </h2>
              <p className="text-lg text-muted-foreground">
                Our guiding mentor and academic leader.
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-10 duration-1000 delay-400">
              <GlassCard className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-transparent" />
                <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      <img
                        src={currentTeam.facultySponsor.image}
                        alt={currentTeam.facultySponsor.name}
                        className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{currentTeam.facultySponsor.name}</h3>
                    <p className="text-primary font-semibold mb-1">{currentTeam.facultySponsor.roleAtACMHITK}</p>
                    <p className="text-muted-foreground text-sm mb-4">{currentTeam.facultySponsor.roleAtHITK}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{currentTeam.facultySponsor.bio}</p>

                    <div className="flex gap-3 mt-6">
                      {currentTeam.facultySponsor.socials.map((social, index) => (
                        <Button
                          key={index}
                          asChild
                          variant="ghost"
                          size="icon"
                          className="w-10 h-10 rounded-full hover:bg-primary/10"
                        >
                          <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            {social.icon}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Current Board Members */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Current Board Members
              </h2>
              <p className="text-lg text-muted-foreground">
                The dedicated leaders shaping our chapter's future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="animate-in slide-in-from-bottom-10 duration-1000"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <GlassCard className="p-6 text-center group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-32 h-32 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-1">{member.roleAtACMHITK}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.roleAtHITK}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                    <div className="flex justify-center gap-3 mt-auto pt-4">
                      {member.socials.map((social, index) => (
                        <Button
                          key={index}
                          asChild
                          variant="ghost"
                          size="icon"
                          className="w-10 h-10 rounded-full hover:bg-primary/10"
                        >
                          <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            {social.icon}
                          </Link>
                        </Button>
                      ))}
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
                <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're always looking for passionate individuals to join our leadership team and make a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Link href="/join">Become a Member</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Leadership</Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </>
  )
}
import { alumni } from "@/data/index"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { TeamMemberCard } from "@/components/TeamMemberCard"
import { TeamMember } from "@/types"

export default function AlumniPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AnimatedBackground />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-transparent blur-3xl animate-pulse" />

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="animate-in slide-in-from-bottom-10 duration-1000">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Our Alumni
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The brilliant minds who have been part of the ACM HITK legacy.
              </p>
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Distinguished Alumni
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Former members who have contributed to our chapter's success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alumnus) => (
              <div key={alumnus.id} className="w-full">
                <TeamMemberCard member={alumnus} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

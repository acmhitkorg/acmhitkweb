import { pastMembers } from "@/data/index"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { TeamMemberCard } from "@/components/TeamMemberCard"
import { TeamMember } from "@/types"

export default function PastMembersPage() {
  // Filter alumni into faculty and students
  const alumniFaculty = pastMembers.filter(member => member.type === 'alumni_faculty');
  const alumniStudents = pastMembers.filter(member => member.type === 'alumni_student');

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
                Our Past Members
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The brilliant minds who have been part of the ACM HITK legacy.
              </p>
            </div>
          </div>
        </section>

        {/* Alumni Faculty Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Alumni Faculty
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Former faculty members who have guided and mentored our chapter
            </p>
          </div>

          {alumniFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumniFaculty.map((member) => (
                <div key={member.id} className="w-full">
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No alumni faculty members to display.</p>
          )}
        </section>

        {/* Alumni Students Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
              Alumni Students
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Former student members who have contributed to our chapter's success
            </p>
          </div>

          {alumniStudents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumniStudents.map((member) => (
                <div key={member.id} className="w-full">
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No alumni students to display.</p>
          )}
        </section>
      </main>
    </div>
  )
}

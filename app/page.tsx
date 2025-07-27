import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import HeroSection from "@/components/Home/HeroSection"
import Events from "@/components/Home/Events"
import AboutUs from "@/components/Home/AboutUs"
import QuickLinks from "@/components/Home/QuickLinks"

export default function Home() {
  return (
    <>
      <Navigation />
      <AnimatedBackground />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />
        {/* About Us Brief */}
        <AboutUs />
        {/* Upcoming Events */}
        <Events />
        {/* Quick Links */}
        <QuickLinks />
      </main>
    </>
  )
}
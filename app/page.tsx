import AboutUs from '@/components/Home/AboutUs';
import Events from '@/components/Home/Events';
import HeroSection from '@/components/Home/HeroSection';
import QuickLinks from '@/components/Home/QuickLinks';
import { AnimatedBackground } from '@/components/animated-background';
import { Navigation } from '@/components/navigation';

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
	);
}

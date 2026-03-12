import ContactClient from '@/components/ContactContent';
import { AnimatedBackground } from '@/components/animated-background';
import { Navigation } from '@/components/navigation';
import { Suspense } from 'react';

export default function ContactPage() {
	return (
		<>
			<Navigation />
			<AnimatedBackground />

			<main className="min-h-screen pt-24">
				<Suspense fallback={null}>
					<ContactClient />
				</Suspense>
			</main>
		</>
	);
}

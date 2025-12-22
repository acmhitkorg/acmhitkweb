import { Suspense } from "react";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import ContactClient from "@/components/ContactContent";

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

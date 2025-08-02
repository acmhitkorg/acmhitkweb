import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from "@/lib/utils";
import { Toaster } from '@/components/ui/toaster';
import { UpcomingEventBanner } from "@/components/UpcomingEventBanner";
import { upcomingEvents } from "@/data";
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { BannerProvider } from "@/context/BannerContext"; // Added import statement for BannerProvider

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'ACM HITK - Heritage Institute of Technology ACM Student Chapter',
  description: 'The official ACM Student Chapter of Heritage Institute of Technology, fostering a vibrant community of computing enthusiasts.',
  icons: { icon: '/acmhitk.ico' }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the first upcoming event that hasn't happened yet
  const currentDate = new Date();
  const upcomingEvent = upcomingEvents.find(event => {
    const eventDate = new Date(event.registration_deadline || event.date);
    return eventDate >= currentDate;
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <BannerProvider>
          {upcomingEvent && <UpcomingEventBanner event={upcomingEvent} />}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </BannerProvider>
      </body>
    </html>
  );
}
export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode; // For Lucide icons
}

export interface TeamMember {
    id: number;
    type: "faculty" | "student" | "alumni";
    name: string;
    roleAtACMHITK: string;
    roleAtHITK: string;
    image: string;
    bio: string;
    achievements: string | null;
    socials: SocialLink[];
}
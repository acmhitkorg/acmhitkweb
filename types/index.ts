export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode; // For Lucide icons
}
/*
For type,
faculty and student are for current members
alumni_faculty and alumni_student are for past members
**/
export interface TeamMember {
    type?: "faculty" | "student" | "alumni_faculty" | "alumni_student";
    name: string;
    roleAtACMHITK: string;
    roleAtHITK: string;
    currentRole?: string;
    image: string;
    bio: string;
    achievements: string | null;
    socials: SocialLink[];
}
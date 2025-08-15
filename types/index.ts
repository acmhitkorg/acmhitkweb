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

export interface Event {
    title: string;
    date: string;
    time?: string;
    location: string;
    type: string;
    cardDescription: string;
    description?: string;
    status?: string;
    registration_deadline?: string;
    registration_link?: string;
    bannerImage?: string;
    speaker?: string;
    capacity?: string;
    attendees?: number;
    photos?: string[];
    image?: string;
    pictures?: string[];
}
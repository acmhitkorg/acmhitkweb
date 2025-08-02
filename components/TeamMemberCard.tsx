'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { Mail, Github, Linkedin, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from 'react';
import { TeamMember, SocialLink } from "@/types";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, roleAtACMHITK, roleAtHITK, currentRole, image, bio, achievements, socials } = member;

  return (
    <Dialog>
      <div className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 dark:shadow-blue-500/5">
        <Card className="p-6 h-full group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 dark:shadow-blue-500/5 border border-border/50 hover:border-blue-500/50">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col items-center h-full">
            {/* Avatar with Hover Effect */}
            <div className="relative mb-7 group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-blue-500/30 transition-all duration-500">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Member Info */}
            <div className="text-center flex-1 flex flex-col w-full">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {name}
              </h3>
              <p className="text-primary font-medium mb-2">{roleAtACMHITK}</p>
              {roleAtHITK && member.type === "student" && (
                <p className="text-sm text-muted-foreground mb-4">{roleAtHITK}</p>
              )}
              {currentRole && (member.type === "alumni_faculty" || member.type === "alumni_student") && (
                <p className="text-sm text-muted-foreground mb-4">{currentRole}</p>
              )}

              {/* Social Links */}
              <div className="mt-auto pt-4 w-full">
                <div className="flex items-center justify-between w-full">
                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    {socials.map((social, index) => {
                      return (
                        <Link
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-muted"
                          title={social.name}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {social.icon}
                        </Link>
                      );
                    })}
                  </div>

                  {/* View More Button */}
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-sm h-8 px-3 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all group/button"
                    >
                      View More
                      <ArrowRight className="ml-1 h-3 w-3 opacity-70 group-hover/button:translate-x-0.5 transition-transform" />
                    </Button>
                  </DialogTrigger>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <DialogContent className="max-h-[90vh] w-[95vw] max-w-4xl p-0 overflow-hidden border-0 bg-transparent">
        <div className="relative bg-card/80 backdrop-blur-lg rounded-xl overflow-hidden border border-border/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row h-[80vh]">
            {/* Image Section */}
            <div className="relative md:w-1/3 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center p-8 space-y-8">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:border-blue-500/30 transition-all duration-500">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center h-10 w-10 rounded-full transition-all",
                      "bg-muted hover:bg-muted/80 text-foreground/90 hover:text-foreground",
                      "border border-border/50 hover:border-blue-500/30 hover:shadow-md"
                    )}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 overflow-y-auto p-8">
              <DialogTitle className="sr-only">{name} - {roleAtACMHITK}</DialogTitle>

              <div className="space-y-1 mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {name}
                </h2>
                <p className="text-primary text-lg font-medium">{roleAtACMHITK}</p>
                {roleAtHITK && (
                  <p className="text-muted-foreground">{roleAtHITK}</p>
                )}
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">About</h3>
                  <p className="text-muted-foreground leading-relaxed">{bio}</p>
                </div>

                {achievements && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Achievements/Contributions</h3>
                    <p className="text-muted-foreground leading-relaxed">{achievements}</p>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

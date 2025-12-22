"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type SmartImageProps = ImageProps & {
  selectedYearIndex?: number;
  selectedEventIndex?: number;
  imageIndex?: number;
  gallery?: boolean;
};

function SmartImage({
  unoptimized,
  selectedYearIndex,
  selectedEventIndex,
  imageIndex,
  className,
  gallery = false,
  ...props
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const DEV_DELAY =
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_IMAGE_DEBUG === "true";

  return (
    <div
      className={`${gallery ? "group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-64 " : ""}`}
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-shimmer" />
      )}
      <Image
        {...props}
        fill
        unoptimized={unoptimized}
        className={cn(
          className,
          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => {
          if (DEV_DELAY) setTimeout(() => setLoaded(true), 1000);
          else setLoaded(true);
        }}
        priority={
          selectedYearIndex === 0 &&
          selectedEventIndex === 0 &&
          imageIndex !== undefined &&
          imageIndex < 4
        }
      />
    </div>
  );
}

export default SmartImage;

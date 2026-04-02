// src/atoms/Video.tsx
import { cn } from "@/lib/cn";

interface VideoProps {
  src: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

export default function Video({
  src,
  className,
  width = "100%",
  height = "auto",
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  poster,
  priority = false,
  loading = "lazy",
  objectFit = "cover",
}: VideoProps) {
  const baseClasses = cn(
    "w-full flex justify-center items-center rounded-lg overflow-hidden shadow-md",
    "bg-muted", // خلفية احتياطية
    className
  );

  return (
    <div className={baseClasses}>
      <video
        src={src}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        poster={poster}
        preload={priority ? "auto" : loading}
        playsInline
        className={cn(
          "w-full h-auto max-w-full",
          `object-${objectFit}`,
          "transition-all duration-300 hover:shadow-lg",
          priority && "loading-none"
        )}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
        <source src={src} type="video/ogg" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
    </div>
  );
}
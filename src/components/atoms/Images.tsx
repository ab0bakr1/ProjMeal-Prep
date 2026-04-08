import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazyLoad?: boolean;
}
export default function Images({
  src,
  alt,
  className,
  width = 100,
  height = 100,
  priority = false,
  lazyLoad = false,
}: Props) {
  const baseClasses = "w-full  flex justify-center items-center";
  return (
    <div className={cn(baseClasses)}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={width}
        height={height}
        priority={priority}
        className={cn(className)}
        loading={lazyLoad ? "lazy" : "eager"}
      />
    </div>
  );
}

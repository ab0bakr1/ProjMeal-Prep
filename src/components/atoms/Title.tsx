import { cn } from "@/lib/cn";
interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  variant?: "black" | "gray" | "primary" | "disabled" | "span" | string;
  center?: boolean;
  className?: string;
}
export default function Title({
  children,
  size = "md",
  variant = "black",
  center = false,
  className = "p-0 capitalize font-semibold",
}: Props) {
  const sizes = {
    sm: "text-sm md:text-base",
    md: "text-lg md:text-2xl",
    lg: "text-xl md:text-3xl",
    xl: "text-2xl md:text-4xl",      // هنا سيصبح الـ xl أصغر في الموبايل
    xxl: "text-3xl md:text-5xl",
    xxxl: "text-4xl md:text-6xl",
  };
  const variants = {
    black: "ds-text-primary",
    gray: "ds-text-secondary",
    primary: "ds-text-alt",
    disabled: "ds-text-disabled",
    span: "ds-text-span",
    [variant]: `ds-text-${variant}`,
  };
  return (
    <>
      <h2
        className={cn(
          sizes[size],
          variants[variant],
          center ? "text-center" : "",
          className,
        )}
      >
        {children}
      </h2>
    </>
  );
}

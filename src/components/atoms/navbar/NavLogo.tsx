import Link from "next/link";
import Title from "../Title";
import Images from "../Images";
import Logo from "../../../../public/assets/images/logo.png";
import { cn } from "@/lib/cn";

interface Props {
  size?: "sm" | "lg";
}

export default function NavLogo({ size = "sm" }: Props) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 ds-hover"
    >
      <Images src={Logo} alt="MishMeal Logo" width={size === "lg" ? 50 : 40} height={size === "lg" ? 50 : 40} />
      <Title 
        className={cn("m-0 ds-font-heading ds-font-bold", size === "lg" ? "ds-text-2xl" : "ds-text-xl")} 
        variant="primary"
      >
        MishMeal
      </Title>
    </Link>
  );
}
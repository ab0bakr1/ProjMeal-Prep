import Link from "next/link";
import Title from "../Title";
interface Props {
  size?: "sm" | "lg";
}

export default function NavLogo({ size = "sm" }: Props) {
  return (
    <Link
      href="/"
      className={`text-light font-bold ${size === "lg" ? "text-4xl" : "text-2xl"}`}
    >
      <Title className="font-bold">
        Survey <span className="ds-text-alt">Land</span>
      </Title>
    </Link>
  );
}

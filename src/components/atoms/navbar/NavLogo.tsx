import Link from "next/link";
import Title from "../Title";
import Images from "../Images";
import Logo from "../../../../public/assets/images/logo.png";
interface Props {
  size?: "sm" | "lg";
}

export default function NavLogo({ size = "sm" }: Props) {
  return (
    <Link
      href="/"
      className={`text-light font-bold ${size === "lg" ? "text-4xl" : "text-2xl"}`}
    >
      <Images src={Logo} alt="logo" width={60} height={60} />
      <Title className="m-0" variant="primary">MishMeal</Title>
    </Link>
  );
}

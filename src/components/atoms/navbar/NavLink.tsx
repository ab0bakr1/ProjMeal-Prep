import Link from "next/link";
import { cn } from "@/lib/cn";

interface Props {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ to, children, onClick, className = "" }: Props) {
  return (
    <Link
      href={to}
      onClick={onClick}
      className={cn(
        "ds-text-secondary ds-font-medium ds-hover hover:ds-text-primary relative py-2 block",
        className
      )}
    >
      {children}
    </Link>
  );
}
import { ThemeToggle } from "@/components/atoms/ThemeButton";
import NavLink from "../../atoms/navbar/NavLink";
import Button from "@/components/atoms/Button";

interface RouteItem {
  id: number;
  path: string;
  key: string;
}

interface MobileNavLinksProps {
  mainRoutes: RouteItem[];
  dropdownRoutes: RouteItem[];
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavbar: () => void;
}

export default function MobileNavLinks({
  mainRoutes,

  closeNavbar,
}: MobileNavLinksProps) {
  return (
    <ul className="text-dark dark:text-light mt-4 flex flex-col items-center gap-2 px-2 text-lg font-medium">
      {mainRoutes.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.path}
            onClick={closeNavbar}
            className="text-2xl md:text-2xl"
          >
            {item.key}
          </NavLink>
        </li>
      ))}

      <div className="flex flex-col px-4 mt-4 gap-2">
        <ThemeToggle />
        <Button variant="secondary" size="md" isRounded={true}>
          login
        </Button>
        <Button className="text-white" isRounded={true} size="md">
          Sign Up
        </Button>
      </div>
    </ul>
  );
}

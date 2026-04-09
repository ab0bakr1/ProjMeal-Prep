"use client";
import { useEffect, useState } from "react";
import { ListMinus } from "../../../public/assets/icons/icons";
import { Routes } from "@/utils/routes";
import { cn } from "../../lib/cn";
import NavLogo from "../atoms/navbar/NavLogo";
import NavIconButton from "../atoms/navbar/NavIconButton";
import DesktopNavLinks from "../molecules/navbar/DesktopNavLinks";
import MobileNavHeader from "../molecules/navbar/MobileNavHeader";
import MobileNavLinks from "../molecules/navbar/MobileNavLinks";
import { ThemeToggle } from "../atoms/ThemeButton";
import CTA from "../molecules/CTA";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainRoutes = Routes.filter((r) => r.id <= 5);
  const dropdownRoutes = Routes.filter((r) => r.id > 5);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNavbar = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "ds-bg-primary-900 ds-shadow-md h-16" : "bg-transparent h-20"
      )}
    >
      <div className="ds-container h-full flex items-center justify-between">
        <NavLogo color="secondary"/>

        <DesktopNavLinks
          mainRoutes={mainRoutes}
          dropdownRoutes={dropdownRoutes}
          dropdownOpen={dropdownOpen}
          toggleDropdown={() => setDropdownOpen((p) => !p)}
          closeNavbar={closeNavbar}
        />

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <CTA CTA="HomePage.Hero.CTA" />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <NavIconButton onClick={() => setOpen(true)}>
            <ListMinus size={24} className="ds-text-primary" />
          </NavIconButton>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "ds-bg fixed top-0 right-0 z-[60] h-screen w-full transition-transform duration-500 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <MobileNavHeader onClose={closeNavbar} />
        <MobileNavLinks
          mainRoutes={mainRoutes}
          dropdownRoutes={dropdownRoutes}
          dropdownOpen={dropdownOpen}
          toggleDropdown={() => setDropdownOpen((p) => !p)}
          closeNavbar={closeNavbar}
        />
      </div>
    </nav>
  );
}
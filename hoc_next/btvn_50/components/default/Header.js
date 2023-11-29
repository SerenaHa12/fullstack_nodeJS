"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import ThemeToggler from "./ThemeTogger";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import SearchToggle from "./SearchToggle";
import ProfileToggle from "./ProfileToggle";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className={`${
        header
          ? "py-4 bg-[rgba(51,51,51,.75)] text-zinc-100 shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 text-zinc-100 transition-all bg-[rgba(51,51,51,.75)] ${pathname === "/" && "bg-[rgba(51,51,51,.75)]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <Nav
            containerStyles="hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          <div className="flex gap-2">
            <ThemeToggler />
            <SearchToggle />
            <ProfileToggle />
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

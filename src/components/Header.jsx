import React, { useState } from "react";
import { useHeaderVisibility } from "../hooks/useHeaderVisibility";
import MobileNav from "../components/MobileNav";
import { IconContext } from "react-icons/lib";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isHeaderVisible = useHeaderVisibility();

  return (
    <header
      className={`bg-background z-50 fixed top-0 w-full bg-opacity-30 transition-transform ease-in-out duration-500 transform p-4 py-[18px] min-h-[68px] border-b-[1px] border-solid border-border shadow-md ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <IconContext.Provider value={{ size: "28px" }}>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </IconContext.Provider>
    </header>
  );
};

export default Header;

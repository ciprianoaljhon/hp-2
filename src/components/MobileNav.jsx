import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useToggle } from "../hooks/useToggle";
import Logo from "../assets/Logo";
import { NavLink } from "react-router-dom";

function MobileNav() {
  const [showNav, setShowNav] = useToggle(false);
  const [darkTheme, setDarkTheme] = useToggle(false);

  return (
    <nav
      className={
        "flex flex-col justify-between items-center px-4 relative overflow-hidden " +
        (showNav ? "h-56" : "h-[30px] ")
      }
    >
      <div className="flex items-center justify-between w-full self-center">
        <Logo />
        <button className="w-max" onClick={setShowNav}>
          {showNav ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      <ul className="drop-nav flex flex-col absolute top-12 w-full text-center text-2xl gap-y-4">
        <NavLink to="/home">
          <h6>Home </h6>
        </NavLink>
        <NavLink to="/collections">
          <h6>Collections </h6>
        </NavLink>
        <NavLink to="/cart">
          <h6>Cart </h6>
        </NavLink>
        <NavLink to="/account">
          <h6>My Account </h6>
        </NavLink>
      </ul>
    </nav>
  );
}

export default MobileNav;

import React from "react";
import { NavLink } from "react-router-dom";
import { CiShoppingCart, CiDark, CiLight, CiUser } from "react-icons/ci";
import SearchBar from "../components/SearchBar";
import Logo from "../assets/Logo";
import { useTheme } from "../hooks/ThemeContext";
function DesktopNav() {
  const { toggleDarkTheme, darkTheme } = useTheme();
  return (
    <nav className="flex items-center w-full gap-x-4">
      <Logo></Logo>
      <div id="page-links" className="flex gap-x-4 ">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/collections">Collections</NavLink>
      </div>
      <SearchBar className="mx-auto w-1/2" />
      <div className="flex justify-center items-center gap-x-2">
        <button onClick={() => toggleDarkTheme()}>
          {darkTheme ? <CiLight /> : <CiDark />}
        </button>
        <NavLink to={`/cart`}>
          <CiShoppingCart />
        </NavLink>
        <NavLink to="/account">
          <CiUser />
        </NavLink>
      </div>
    </nav>
  );
}

export default DesktopNav;

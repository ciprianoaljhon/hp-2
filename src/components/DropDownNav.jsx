import React from "react";

const DropdownNav = () => {
  const navLinks = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Cart", link: "/cart" },
    { text: "My Account", link: "/account" },
  ];

  return (
    <div className="absolute top-full left-0 bg-white shadow-md rounded mt-2 transition-opacity opacity-100">
      <ul className="list-none p-0 m-0">
        {navLinks.map((link, index) => (
          <li key={index} className="py-2 px-4">
            <NavLink
              to={link.link}
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownNav;

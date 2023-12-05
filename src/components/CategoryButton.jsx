import React from "react";
import { NavLink } from "react-router-dom";
import useCardColors from "../hooks/useCardColors";
import { useTheme } from "../hooks/ThemeContext";

function CategoryButton({ category = "default" }) {
  const colors = useCardColors();
  const current = colors[category.toLowerCase()];
  const { darkTheme } = useTheme();

  return (
    <>
      {current ? (
        <NavLink
          to="/collections"
          className={`category-btn w-56 h-48 p-8 text-left hover:scale-110 hover:shadow-2xl `}
          style={{
            transition: "transform 0.2s ease",
            backgroundColor: darkTheme ? "transparent" : current?.color,
            border: darkTheme ? `2px solid ${current?.color} ` : "none",
          }}
        >
          <button className="flex flex-col items-center w-full ">
            {current.icon}
            <h5 className="responsive-txt-800 line-clamp-2 text-ellipsis text-textPrimary px-2 break-words ">
              {category}
            </h5>
            <p className="text-sm hover:underline">See More</p>
          </button>
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
}

export default CategoryButton;

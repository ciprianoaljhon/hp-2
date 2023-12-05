import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar({ className }) {
  return (
    <div id="search-bar" className={"flex items-center relative " + className}>
      <input
        placeholder="Search..."
        className={"px-2 py-1 w-full  bg-background2 text-textPrimary  "}
      />
      <IoIosSearch
        className=" absolute right-1 cursor-pointer child:text-primary"
        size={24}
      ></IoIosSearch>
    </div>
  );
}

export default SearchBar;

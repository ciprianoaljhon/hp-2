import { useEffect, useState } from "react";

export const useHeaderVisibility = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    let scrollThreshold = 350;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (
        prevScrollPos > currentScrollPos ||
        currentScrollPos < scrollThreshold
      ) {
        setHeaderVisibility(true);
      } else {
        setHeaderVisibility(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isHeaderVisible;
};

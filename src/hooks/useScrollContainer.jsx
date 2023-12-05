import { useEffect, useRef, useState } from "react";

export const useScroll = (scrollBack = false) => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const totalSubContainers = containerRef?.current?.childNodes.length || 2;
  const scrollToSubContainer = (i = 0) => {
    let nextIndex;
    if (scrollBack) {
      nextIndex = (index + i + totalSubContainers) % totalSubContainers;
    } else {
      const newIndex = index + i;
      nextIndex =
        newIndex >= 0 && newIndex < totalSubContainers ? newIndex : index;
    }
    setIndex(nextIndex);
    const subContainer = containerRef.current?.childNodes[nextIndex];
    subContainer.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "end",
    });
  };
  return { containerRef, index, scrollToSubContainer, totalSubContainers };
};

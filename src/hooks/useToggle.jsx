import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  function toggleState() {
    setState(!state);
  }

  return [state, toggleState];
};

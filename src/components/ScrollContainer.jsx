import React, { forwardRef, useRef, useState } from "react";

const SubContainer = ({ children }) => (
  <div
    className={`sub-container w-full h-full snap-center overflow-hidden `}
    style={{
      width: "100%",
    }}
  >
    {children}
  </div>
);

const ScrollContainer = ({ forwardRefs, elements }) => {
  return (
    <div
      className="scroll-container overflow-x-scroll overflow-y-hidden w-full h-full flex child:shrink-0 snap-mandatory snap-x hide-scrollbar "
      ref={forwardRefs}
    >
      {elements.map((el, index) => (
        <SubContainer
          key={index}
          color={index % 2 === 0 ? "lightblue" : "lightgreen"}
          index={index}
        >
          {el}
        </SubContainer>
      ))}
    </div>
  );
};

export default ScrollContainer;

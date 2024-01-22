import React from "react";

const TextBubble = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default TextBubble;

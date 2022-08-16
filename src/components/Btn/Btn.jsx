import React from "react";
import "../Btn/Btn.css";
const Btn = ({ text, type, onTouch }) => {
  const btnstyle = {
    backgroundColor: type === "arlert" ? "red" : "green",
  };
  return (
    <button style={btnstyle} className='btn' onClick={onTouch}>
      {text}
    </button>
  );
};

export default Btn;

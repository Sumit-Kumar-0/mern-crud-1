import React from "react";
import "./Button.css";

function Button({ text, className, type, onClick }) {
  return (
    <button onClick={onClick} className={`button ${className}`} type={type}>
      {text}
    </button>
  );
}
export default Button;

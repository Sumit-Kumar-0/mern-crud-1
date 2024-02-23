import React, { useEffect, useRef } from "react";
import "./style/MyToaster.css";

export default function MyToaster({ text, className }) {
  const toastRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      toastRef.current.style.opacity = 0;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={toastRef} className={`my-toaster ${className}`}>
      <p>{text}</p>
      <div className="bottom-line"></div>
    </div>
  );
}

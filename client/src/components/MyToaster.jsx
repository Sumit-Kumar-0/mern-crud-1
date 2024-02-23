import React, { useEffect, useRef, useState } from "react";
import "./style/MyToaster.css";

export default function MyToaster({ text, className }) {
  const toasterRef = useRef(null);
  const bottomLineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const pauseAnimation = () => {
      if (toasterRef.current && bottomLineRef.current) {
        toasterRef.current.style.animationPlayState = "paused";
        bottomLineRef.current.style.animationPlayState = "paused";
      }
    };

    const resumeAnimation = () => {
      if (toasterRef.current && bottomLineRef.current) {
        toasterRef.current.style.animationPlayState = "running";
        bottomLineRef.current.style.animationPlayState = "running";
      }
    };

    const timer = setTimeout(() => {
      if (!isHovered && toasterRef.current) {
        toasterRef.current.remove();
      }
    }, 3000);

    if (toasterRef.current) {
      toasterRef.current.addEventListener("mouseenter", pauseAnimation);
      toasterRef.current.addEventListener("mouseleave", resumeAnimation);
    }

    return () => {
      clearTimeout(timer);
      if (toasterRef.current) {
        toasterRef.current.removeEventListener("mouseenter", pauseAnimation);
        toasterRef.current.removeEventListener("mouseleave", resumeAnimation);
      }
    };
  }, [isHovered]);

  return (
    <div
      ref={toasterRef}
      className={`my-toaster ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{text}</p>
      <div ref={bottomLineRef} className="bottom-line"></div>
    </div>
  );
}

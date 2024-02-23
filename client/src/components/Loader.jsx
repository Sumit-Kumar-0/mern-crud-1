import React, { useEffect, useState } from "react";
import "./style/Loader.css";

export default function Loader() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="loader">
      <div className="loading"></div>
      <p className="loader-count">{count}%</p>
    </div>
  );
}

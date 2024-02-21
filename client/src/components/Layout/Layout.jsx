import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="maic-container">{children}</main>
    </div>
  );
}

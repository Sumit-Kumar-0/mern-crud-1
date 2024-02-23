import "./App.css";
import "../src/components/style/Common.css";
import React from "react";
import AllUsers from "./components/AllUsers";
import CreateUser from "./components/CreateUser";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="app-containner">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<AllUsers />} />
          <Route path="/addnew" element={<CreateUser />} />
          <Route path="/:userId" element={<EditUser />} />
          <Route path="/*" element={<NotFound />} />/
        </Routes>
      </div>
    </div>
  );
}

export default App;

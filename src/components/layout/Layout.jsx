import React from "react";
import "./layout.css";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout_content">
        <TopNav />
        <div className="layout_content-main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout-wrap">
      <Navbar />

      <div className="main-layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

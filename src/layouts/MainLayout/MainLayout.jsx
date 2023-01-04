import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

import Navbar from "../../components/Navbar";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout-wrap">
      <Navbar />

      <div className="main-layout-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

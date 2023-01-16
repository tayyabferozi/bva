import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

import Navbar from "../../components/Navbar";
import "./MainLayout.scss";

const MainLayout = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <div className="main-layout-wrap">
      <Navbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />

      <div className="main-layout-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

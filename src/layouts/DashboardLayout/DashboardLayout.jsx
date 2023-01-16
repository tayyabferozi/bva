import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import GridContainer from "../../components/GridContainer";
import "./DashboardLayout.scss";

const links = [
  {
    label: "My lots",
    link: "/dashboard/my-lots",
  },
  {
    label: "My won lots",
    link: "/dashboard/my-won-lots",
  },
  {
    label: "My purchases",
    link: "/dashboard/my-purchases",
  },
  {
    label: "My deliveries",
    link: "/dashboard/my-deliveries",
  },
  {
    label: "My archive",
    link: "/dashboard/my-archive",
  },
  {
    label: "Personal information",
    link: "/dashboard/personal-information",
  },
  {
    label: "My settings",
    link: "/dashboard/my-settings",
  },
];

const DashboardLayout = () => {
  return (
    <div id="dashboard-layout">
      <GridContainer className="pt-2">
        <div className="col-md-4 col-lg-3">
          <div className="navigation">
            <strong>My BVA</strong>

            <div className="links">
              {links.map((el, idx) => {
                return (
                  <NavLink key={"dashboard-nav-link" + idx} to={el.link}>
                    {el.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <Outlet />
        </div>
      </GridContainer>
    </div>
  );
};

export default DashboardLayout;

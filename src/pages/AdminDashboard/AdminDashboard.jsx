import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = ({ label, subHeading, children }) => {
  return (
    <div id="main">
      <div className="page-heading">
        <div className="d-flex justify-content-between align-item-center">
          <h3 className="main-page-title">{label}</h3>

          <Link to="/admin/login" className="text-white">
            <h5>Logout</h5>
          </Link>
        </div>
        {subHeading && <p className="text-subtitle text-muted">{subHeading}</p>}
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default AdminDashboard;

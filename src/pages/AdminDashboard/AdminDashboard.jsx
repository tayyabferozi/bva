import React from "react";

const AdminDashboard = ({ label, children }) => {
  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>
      <div className="page-heading">
        <h3>{label}</h3>
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default AdminDashboard;

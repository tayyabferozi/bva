import React from "react";
import {
  faCarSide,
  faMotorcycle,
  faPalette,
  faScrewdriverWrench,
  faPlugCircleMinus,
  faCouch,
  faRing,
  faHouse,
  faEllipsis,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AdminDashboard from "../../../AdminDashboard";

const categories = [
  {
    id: 1,
    icon: faCarSide,
    name: "Vehicles",
  },
  { id: 2, icon: faMotorcycle, name: "Bikes & Scooters" },
  { id: 3, icon: faPalette, name: "Art" },
  { id: 4, icon: faScrewdriverWrench, name: "Tools" },
  {
    id: 5,
    icon: faPlugCircleMinus,
    name: "Consumer Electronics",
  },
  {
    id: 6,
    icon: faCouch,
    name: "Home furnishings",
  },
  {
    id: 7,
    icon: faRing,
    name: "Jewels and Watches",
  },
  { id: 8, icon: faUtensils, name: "Catering" },
  { id: 9, icon: faHouse, name: "Real Estate" },
  {
    id: 10,
    icon: faEllipsis,
    name: "All cat.",
  },
];

const AllCategories = () => {
  return (
    <AdminDashboard label="All Categories">
      {" "}
      <section className="section">
        <div className="row" id="table-head">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Categories</h4>
              </div>
              <div className="card-content">
                {/* <!-- table head dark --> */}
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th>IMG</th>
                        <th>NAME</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((el, idx) => {
                        return (
                          <tr key={"all-auctions-item" + idx}>
                            <td>
                              <FontAwesomeIcon icon={el.icon} size="xl" />
                              {/* <img
                                style={{ width: 50 }}
                                src={el.img}
                                alt={el.name}
                              /> */}
                            </td>
                            <td className="text-bold-500">{el.name}</td>
                            <td>
                              <div className="">
                                <a href="#0" className="btn icon btn-danger">
                                  <i className="bi bi-x"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminDashboard>
  );
};

export default AllCategories;

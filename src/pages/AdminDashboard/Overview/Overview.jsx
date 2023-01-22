import React from "react";

import AdminDashboard from "../AdminDashboard";
import Doughnut from "./Auctions";
import Reach from "./Reach";

const Overview = () => {
  return (
    <AdminDashboard label="Overview">
      <section className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-4 py-4-5">
                  <div className="d-flex gap-3">
                    <div className="d-flex justify-content-start">
                      <div className="stats-icon purple mb-2">
                        <i className="iconly-boldShow"></i>
                      </div>
                    </div>
                    <div className="">
                      <h6 className="text-muted font-semibold">
                        Total transactions
                      </h6>
                      <h6 className="font-extrabold mb-0">$ 112.00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-4 py-4-5">
                  <div className="d-flex gap-3">
                    <div className="d-flex justify-content-start">
                      <div className="stats-icon green mb-2">
                        <i className="iconly-boldAdd-User"></i>
                      </div>
                    </div>
                    <div className="">
                      <h6 className="text-muted font-semibold">New Users</h6>
                      <h6 className="font-extrabold mb-0">100</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-4 py-4-5">
                  <div className="d-flex gap-3">
                    <div className="d-flex justify-content-start">
                      <div className="stats-icon blue mb-2">
                        <i className="iconly-boldProfile"></i>
                      </div>
                    </div>
                    <div className="">
                      <h6 className="text-muted font-semibold">Total Users</h6>
                      <h6 className="font-extrabold mb-0">26</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body px-4 py-4-5">
                  <div className="d-flex gap-3">
                    <div className="d-flex justify-content-start">
                      <div className="stats-icon red mb-2">
                        <i className="iconly-boldBuy"></i>
                      </div>
                    </div>
                    <div className="">
                      <h6 className="text-muted font-semibold">
                        Total Auctions
                      </h6>
                      <h6 className="font-extrabold mb-0">26</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-12 col-lg-6">
              <div className="card h-100 ">
                <div className="card-header">
                  <h4>Reach</h4>
                </div>
                <div className="card-body d-flex align-items-center h-100">
                  <div className="w-100">
                    <Reach />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card h-100">
                <div className="card-header">
                  <h4>Auctions</h4>
                </div>
                <div className="card-body d-flex align-items-center h-100">
                  <div className="w-100">
                    <Doughnut />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminDashboard>
  );
};

export default Overview;

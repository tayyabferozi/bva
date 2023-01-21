import React from "react";
import AdminDashboard from "../AdminDashboard";

const winners = [
  {
    name: "Michael Right",
    amount: "15",
    date: "21/1/2023"
  },
  {
    name: "Morgan Vanblum",
    amount: "15",
    date: "21/1/2023"
  },
  {
    name: "Tiffani Blogz",
    amount: "15",
    date: "21/1/2023"
  },
  {
    name: "Ashley Boul",
    amount: "15",
    date: "21/1/2023"
  },
  {
    name: "Mikkey Mice",
    amount: "15",
    date: "21/1/2023"
  },
];

const Winners = () => {
  return (
    <AdminDashboard label="Winners">
      <section className="section">
        <div className="row" id="table-head">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">All Auction Winners</h4>
              </div>
              <div className="card-content">
                {/* <!-- table head dark --> */}
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th>NAME</th>
                        <th>Highest Bid</th>
                        <th>Date</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {winners.map((el, idx) => {
                        return (
                          <tr key={"winner" + idx}>
                            <td className="text-bold-500">{el.name}</td>
                            <td>${el.amount}</td>
                            <td>{el.date}</td>
                            <td>
                              <div className="">
                                {/* <a href="#0" className="btn icon btn-primary">
                                  <i className="bi bi-pencil"></i>
                                </a> */}
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

export default Winners;

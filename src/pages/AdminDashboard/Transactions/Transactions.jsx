import React from "react";
import AdminDashboard from "../AdminDashboard";

const transactions = [
  {
    name: "2 Ledstralers 50w",
    amount: "15",
  },
  {
    name: "10 Rolmeetbanden - 10 meter",
    amount: "15",
  },
  {
    name: "Michelin luchtcompressor 24 ...",
    amount: "15",
  },
  {
    name: "Youngmans 31089818 multifunctioneel pla...",
    amount: "15",
  },
  {
    name: "20 Kunststof duimstokken a 1mtr",
    amount: "15",
  },
];

const Transactions = () => {
  return (
    <AdminDashboard label="All transactions">
      <section className="section">
        <div className="row" id="table-head">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Credit/Debit card transactions</h4>
              </div>
              <div className="card-content">
                {/* <!-- table head dark --> */}
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th>NAME</th>
                        <th>Highest Bid</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((el, idx) => {
                        return (
                          <tr key={"transactions" + idx}>
                            <td className="text-bold-500">{el.name}</td>
                            <td>${el.amount}</td>
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

export default Transactions;

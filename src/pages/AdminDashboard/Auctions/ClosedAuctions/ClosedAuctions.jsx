import React from "react";

import AdminDashboard from "../../AdminDashboard";

const auctions = [
  {
    img: "/assets/imgs/1.jpg",
    name: "10 Rolmeetbanden - 10 meter",
    amount: "15",
  },
  {
    img: "/assets/imgs/1.jpg",
    name: "20 Kunststof duimstokken a 1mtr",
    amount: "15",
  },
  {
    img: "/assets/imgs/1.jpg",
    name: "Michelin luchtcompressor 24 ...",
    amount: "15",
  },
  {
    img: "/assets/imgs/1.jpg",
    name: "Youngmans 31089818 multifunctioneel pla...",
    amount: "15",
  },
  {
    img: "/assets/imgs/1.jpg",
    name: "2 Ledstralers 50w",
    amount: "15",
  },
];

const ClosedAuctions = () => {
  return (
    <AdminDashboard label="Closed Auctions">
      <section className="section">
        <div className="row" id="table-head">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Auctions</h4>
              </div>
              <div className="card-content">
                {/* <!-- table head dark --> */}
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th>IMG</th>
                        <th>NAME</th>
                        <th>Highest Bid</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {auctions.map((el, idx) => {
                        return (
                          <tr key={"closed-auctions-item" + idx}>
                            <td>
                              <img
                                style={{ width: 50 }}
                                src={el.img}
                                alt={el.name}
                              />
                            </td>
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

export default ClosedAuctions;

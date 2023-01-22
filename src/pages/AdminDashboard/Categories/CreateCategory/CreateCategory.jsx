import React from "react";

import AdminDashboard from "../../../AdminDashboard";

const CreateCategory = () => {
  return (
    <AdminDashboard label="Create Category">
      {" "}
      <section id="multiple-column-form">
        <div className="row match-height">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Category Details</h4>
              </div>
              <div className="card-content">
                <div className="card-body">
                  <form className="form">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label
                            htmlFor="formFileMultiple"
                            className="form-label"
                          >
                            Auction Images
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFileMultiple"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="product-name-column">
                            Name (English)
                          </label>
                          <input
                            type="text"
                            id="product-name-column"
                            className="form-control"
                            placeholder="Product Name"
                            name="fname-column"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12 text-end">
                        <div className="form-group">
                          <label htmlFor="min-bid-column">الاسم (عربي)</label>
                          <input
                            type="number"
                            id="name-arabic-column"
                            className="form-control text-end"
                            placeholder="الاسم (عربي)"
                            name="name-arabic-column"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary me-1 mb-1"
                      >
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-light-secondary me-1 mb-1"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminDashboard>
  );
};

export default CreateCategory;

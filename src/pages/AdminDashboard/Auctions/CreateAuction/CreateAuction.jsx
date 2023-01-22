import React from "react";
import AdminDashboard from "../../AdminDashboard";

const CreateAuctions = () => {
  return (
    <AdminDashboard label="Create New Auction">
      <section id="multiple-column-form">
        <div className="row match-height">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Auction Details (English)</h4>
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
                            multiple
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="product-name-column">Name</label>
                          <input
                            type="text"
                            id="product-name-column"
                            className="form-control"
                            placeholder="Product Name"
                            name="fname-column"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="min-bid-column">
                            Minimum Bid Amount
                          </label>
                          <input
                            type="number"
                            id="min-bid-column"
                            className="form-control"
                            placeholder="Min Bid Amount"
                            name="min-bid-column"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="delivery-column">
                            Delivery Time (days)
                          </label>
                          <input
                            type="number"
                            id="delivery-column"
                            className="form-control"
                            placeholder="delivery"
                            name="delivery-column"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="closing-date-floating">
                            Closing Date
                          </label>
                          <input
                            type="datetime-local"
                            id="closing-date-floating"
                            className="form-control"
                            name="closing-date-floating"
                            placeholder="Closing Date"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="company-column">Company</label>
                          <input
                            type="text"
                            id="company-column"
                            className="form-control"
                            name="company-column"
                            placeholder="Company"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-column">Email</label>
                          <input
                            type="email"
                            id="email-id-column"
                            className="form-control"
                            name="email-id-column"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group col-12">
                        <div className="form-check">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="checkbox5"
                              className="form-check-input"
                            />
                            <label htmlFor="checkbox5">
                              Free Home Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="card-header text-end">
                  <h4 className="card-title">تفاصيل المزاد (عربي)</h4>
                </div>

                <div className="card-body">
                  <form className="form text-end">
                    <div className="row flex-row-reverse">
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="product-name-column">اسم</label>
                          <input
                            type="text"
                            id="product-name-column"
                            className="form-control"
                            placeholder="اسم المنتج"
                            name="fname-column"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="min-bid-column">
                            الحد الأدنى لمبلغ المزايدة
                          </label>
                          <input
                            type="number"
                            id="min-bid-column"
                            className="form-control"
                            placeholder="الحد الأدنى لمبلغ المزايدة"
                            name="min-bid-column"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="delivery-column">
                            تاريخ التسليم او الوصول
                          </label>
                          <input
                            type="number"
                            id="delivery-column"
                            className="form-control"
                            placeholder="تاريخ التسليم او الوصول"
                            name="delivery-column"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="closing-date-floating">
                            الموعد النهائي
                          </label>
                          <input
                            type="datetime-local"
                            id="closing-date-floating"
                            className="form-control"
                            name="closing-date-floating"
                            placeholder="الموعد النهائي"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="company-column">شركة</label>
                          <input
                            type="text"
                            id="company-column"
                            className="form-control"
                            name="company-column"
                            placeholder="شركة"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label htmlFor="email-id-column">
                            البريد الإلكتروني
                          </label>
                          <input
                            type="email"
                            id="email-id-column"
                            className="form-control"
                            name="email-id-column"
                            placeholder="البريد الإلكتروني"
                          />
                        </div>
                      </div>
                      <div className="form-group col-12">
                        <div className="form-check-reverse">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="checkbox5"
                              className="form-check-input"
                            />
                            <label htmlFor="checkbox5">
                              توصيل مجاني للمنزل
                            </label>
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

export default CreateAuctions;

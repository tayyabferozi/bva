import React from "react";

import AdminDashboard from "../../AdminDashboard";

const Ticket = () => {
  return (
    <AdminDashboard label="Chat" subHeading="Our take on a chat conversation.">
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="media d-flex align-items-center">
                  {/* <div className="avatar me-3">
                      <img src="assets/images/faces/1.jpg" alt="" />
                      <span className="avatar-status bg-success"></span>
                    </div> */}
                  <div className="name flex-grow-1">
                    <h6 className="mb-0">Fred</h6>
                    {/* <span className="text-xs">Online</span> */}
                  </div>
                  <button className="btn btn-sm">
                    <i data-feather="x"></i>
                  </button>
                </div>
              </div>
              <div className="card-body pt-4 bg-grey">
                <div className="chat-content">
                  <div className="chat">
                    <div className="chat-body">
                      <div className="chat-message">
                        Hi Alfy, how can i help you?
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-body">
                      <div className="chat-message">
                        I&apos;m looking for the best admin dashboard template
                      </div>
                      <div className="chat-message">
                        With bootstrap certainly
                      </div>
                    </div>
                  </div>
                  <div className="chat">
                    <div className="chat-body">
                      <div className="chat-message">
                        I recommend you to use Mazer Dashboard
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-body">
                      <div className="chat-message">
                        That&quot;s great! I like it so much :)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="message-form d-flex flex-direction-column align-items-center">
                  <a href="http://" className="black">
                    <i data-feather="smile"></i>
                  </a>
                  <div className="d-flex flex-grow-1 ml-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message.."
                    />
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

export default Ticket;

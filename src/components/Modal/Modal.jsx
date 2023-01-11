import React from "react";
import { XCircleFillIcon } from "@primer/octicons-react";

import "./Modal.scss";

const Modal = ({ closeModal, children }) => {
  return (
    <div className="c-modal">
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal-main">
        <div className="modal-inner">
          <div className="close" onClick={closeModal}>
            <XCircleFillIcon size={30} fill={"#007aff"} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

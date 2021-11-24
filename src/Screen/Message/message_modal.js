import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { MessageContext } from "../../Context/message_context";
import { formatter } from "../../Utils/formatter";
import Moment from "react-moment";
export const MessageModal = () => {
  const {
    messageState: { message },
    showMessageModal,
    setShowMessageModal,
  } = useContext(MessageContext);

  const handleCloseModal = () => {
    setShowMessageModal(false);
  };

  return (
    <Modal
      show={showMessageModal}
      onHide={handleCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // className=""
      // dialogClassName="rounded-25"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row mb-14">
          <div className="col-6">
            <p className="modal-title mt-2 ">
              <strong className="title-content">
                Fullname: {message.name}
              </strong>
            </p>
            <p className="modal-title mt-2 ">
              <strong className="title-content">Email: {message.email}</strong>
            </p>
          </div>
          <div className="col-5 justify-content-center">
            <p className="modal-title mt-2">
              <strong className="title-content">Date:</strong>
              <Moment format="DD/MM/YYYY"> {message.createdAt}</Moment>
            </p>
          </div>
        </div>
        <div className="row mb-14">
          <p className="modal-title mt-18">{message.message}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleCloseModal}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

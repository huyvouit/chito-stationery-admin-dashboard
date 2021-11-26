import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { OrderContext } from "../../Context/order_context";
import { formatter } from "../../Utils/formatter";
import Moment from "react-moment";
export const OrderModal = () => {
  const {
    orderState: { order },
    showOrderModal,
    setShowOrderModal,
  } = useContext(OrderContext);

  const handleCloseModal = () => {
    setShowOrderModal(false);
  };

  return (
    <Modal
      show={showOrderModal}
      onHide={handleCloseModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // className=""
      // dialogClassName="rounded-25"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detail Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row mb-14">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="modal-title mt-2">
              <strong className="title-content">ID:</strong> {order._id}
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="modal-title mt-2">
              <strong className="title-content">Date:</strong>{" "}
              <Moment format="DD/MM/YYYY">{order.createdAt}</Moment>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="modal-title mt-2">
              <strong className="title-content">Fullname:</strong>{" "}
              {order.customerName}
            </p>
          </div>
          {order.customerEmail && (
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="modal-title mt-2">
                <strong className="title-content">Email:</strong>{" "}
                {order.customerEmail}
              </p>
            </div>
          )}
          <div className="col-lg-5 col-md-6 col-sm-12">
            <p className="modal-title mt-2">
              <strong className="title-content">Total:</strong>{" "}
              {formatter.format(order.totalCost.$numberDecimal)}
            </p>
          </div>
        </div>
        <div className="col-12 table-scoroll">
          <table className=" table table-borderless table-hover table-custom ">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {order["productList"].map((item) => {
                return (
                  <tr key={item._id}>
                    <td className="d-flex justify-content-center align-items-center ">
                      <img
                        className="admin-img me-3"
                        src={item.image}
                        alt={item.image}
                      />
                      <p className="mb-0">{item.productName}</p>
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {formatter.format(item.totalPriceByItem.$numberDecimal)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn-common secondary-btn"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

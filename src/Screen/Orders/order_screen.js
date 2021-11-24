import React, { useContext, useState, useEffect } from "react";
import ava from "../../Assets/Image/ava.jpg";
import { OrderContext } from "../../Context/order_context";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { Pagination } from "../../Utils/pagination";
import Moment from "react-moment";
import { formatter } from "../../Utils/formatter";
import "./Order.css";
import { OrderModal } from "./order_modal";

export const OrdersScreen = (props) => {
  const {
    orderState: { order, orders, ordersLoading, maxPage },
    getAllOrder,
    findOrder,
    setShowOrderModal,
  } = useContext(OrderContext);

  const [query, setQuery] = useState(queryString.parse(props.location.search));

  useEffect(() => {
    const params = Object.keys(query).length > 0 ? query : { page: 1 };
    getAllOrder(params);
  }, [query]);

  let history = useHistory();
  const handlePageClick = (data) => {
    history.push(`/orders?page=${data.selected + 1}`);
    setQuery({ page: data.selected + 1 });
  };

  const handleShowModal = (id) => {
    findOrder(id);
    setShowOrderModal(true);
  };

  let body = null;

  if (ordersLoading) {
    body = (
      <div className="spinner-container">
        <div className="spinner-border text-dark " role="status"></div>;
      </div>
    );
  } else if (orders.length === 0) {
    body = (
      <>
        <p>No connect to database</p>
      </>
    );
  } else {
    body = (
      <div className="order">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="title mb-36 mt-30">Orders</div>
            </div>
            <div className="col-12">
              <div className=" box shadow-sm">
                <table
                  className=" table table-borderless table-hover table-custom"
                  style={{ marginBottom: "0" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((item) => {
                        return (
                          <tr
                            key={item._id}
                            onClick={() => handleShowModal(item._id)}
                          >
                            <td>{item._id}</td>
                            <td>
                              <Moment format="DD/MM/YYYY">
                                {item.createdAt}
                              </Moment>
                            </td>
                            {item.customerEmail ? (
                              <td>{item.customerEmail}</td>
                            ) : (
                              <td>No</td>
                            )}
                            <td>{item.productList.length}</td>
                            <td>
                              {formatter.format(item.totalCost.$numberDecimal)}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination
            pageCount={maxPage}
            handleClick={handlePageClick}
            query={query}
          />
          {/* <!-- Modal --> */}

          {/* <div
            className="modal fade "
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content rounded-25">
                <div className="modal-body ">
                  <div className="row mb-14">
                    <div className="col-4">
                      <p className="modal-title mt-2">
                        <strong className="title-content">ID:</strong> #0001
                      </p>
                      <p className="modal-title mt-2">
                        <strong className="title-content">Date:</strong>{" "}
                        31/10/2021
                      </p>
                    </div>

                    <div className="col-7">
                      <p className="modal-title mt-2">
                        <strong className="title-content">User:</strong>{" "}
                        sweetlatte@gmail.com
                      </p>
                      <p className="modal-title mt-2">
                        <strong className="title-content">Total:</strong>{" "}
                        999,999 VND
                      </p>
                    </div>
                    <div className="col-1 text-align-center mt-2">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
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
                        <tr>
                          <td className="d-flex justify-content-center align-items-center ">
                            <img
                              className="admin-img me-1"
                              src={ava}
                              alt="arrow-right"
                            />
                            <p className="mb-0">A Cup of Latte</p>
                          </td>
                          <td>9</td>
                          <td>80,000 VND</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
  return (
    <>
      {body}
      {order !== null && <OrderModal />}
    </>
  );
};

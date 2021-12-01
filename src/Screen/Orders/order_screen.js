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
                              <td>Guest</td>
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

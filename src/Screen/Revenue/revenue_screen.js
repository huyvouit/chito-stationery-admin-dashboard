import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../Assets/icon/chevron-right.svg";
import { OrderContext } from "../../Context/order_context";
import { RevenueContext } from "../../Context/revenue_context";
import { formatter } from "../../Utils/formatter";
import Moment from "react-moment";
import "./Revenue.css";

export const RevenueScreen = () => {
  const {
    revenueState: { revenueWeek, revenueMonth, revenueLoading },
    getAllRevenue,
  } = useContext(RevenueContext);
  const {
    orderState: { orders, ordersLoading },
    getAllOrder,
  } = useContext(OrderContext);

  useEffect(() => {
    getAllRevenue();
    getAllOrder({ page: 1 });
  }, []);
  let body = null;

  if (revenueLoading) {
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
      <div className="revenue">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="title mb-36 mt-30">Revenue</div>
            </div>
          </div>
          <div className="row justify-content-end mb-2">
            <Link className="admin-link col-1" to="/orders">
              <div className="d-flex more">
                <div className="admin-more">More</div>
                <img
                  className="more-arrow"
                  src={arrowRight}
                  alt="arrow-right"
                />
              </div>
            </Link>
          </div>
          <div className="row ">
            <div className="col-4">
              <div className="revenue-week ">
                <div className="revenue-title">This week</div>
                <div className="revenue-money">
                  {" "}
                  {formatter.format(revenueWeek)}
                </div>
              </div>
              <div className="revenue-month">
                <div className="revenue-title">This month</div>
                <div className="revenue-money">
                  {" "}
                  {formatter.format(revenueMonth)}
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className=" box shadow-sm ">
                <table className=" table table-borderless table-custom">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Email</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="ellipsis">
                              <span>{item._id}</span>
                            </td>
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
        </div>
      </div>
    );
  }
  return <>{body}</>;
};

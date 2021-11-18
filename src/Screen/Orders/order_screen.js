import React from "react";
import ava from "../../Assets/Image/ava.jpg";
import "./Order.css";

export const OrdersScreen = () => {
  return (
    <div className="order">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title mb-36 mt-30">Orders</div>
          </div>
          <div className=" box shadow-sm">
            <table className=" table table-borderless table-hover table-custom">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">User</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
                <tr>
                  <td>#0001</td>
                  <td>31/10/2021</td>
                  <td>sweetlatte@gmail.com</td>
                  <td>9</td>
                  <td>999,999 VND</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
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
                      <strong className="title-content">Total:</strong> 999,999
                      VND
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
                <div className="col-11">
                  <table className=" table table-borderless table-hover table-custom">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <div className="table-wrapper-scroll-y my-custom-scrollbar ">
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
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../Assets/icon/chevron-right.svg";
import "./Revenue.css"

export const RevenueScreen = () => {
  return (
    <div className="revenue">
      <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="title mb-36 mt-30">Products</div>
        </div>
      </div>
      <div className="row justify-content-end mb-18">
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
            <div className="revenue-money">+999,999 VND</div>
          </div>
          <div className="revenue-month">
            <div className="revenue-title">This month</div>
            <div className="revenue-money">+9,999,999 VND</div>
          </div>
        </div>
        <div className="col-8">
          <div className=" box shadow-sm ">
            <table className=" table table-borderless table-custom">
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
      </div>
      </div>
    </div>
  );
};

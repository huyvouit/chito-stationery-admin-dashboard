import React from "react";
import "./dashboard.css";
import arrowRight from "../../Assets/icon/chevron-right.svg"
import ava from "../../Assets/Image/ava.jpg"
import { Link } from "react-router-dom";

export const DashboardScreen = () => {
  return <div className="dashboard">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="title mb-36 mt-30">Hi Latte!</div>
        </div>
        <div className="col-8">
          <div className="row mb-27">
            <div className="col-9">
              <Link className="admin-link" to="/revenue">
                <div className="dashboard-subtitle mb-9">Revenue</div>
              </Link>
              <Link className="admin-link" to="/revenue">
                <div className="d-flex box shadow-sm">
                  <div className="col-6">
                      <div className="rev-week">
                        <div className="mb-18">This week</div>
                        <div className="rev-money">+999,999 VND</div>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="rev-month">
                        <div className="mb-18">This month</div>
                        <div className="rev-money">+9,999,999 VND</div>
                      </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-3">
              <Link className="admin-link" to="/orders">
                <div className="dashboard-subtitle mb-9">Orders</div>
              </Link>
              <Link className="admin-link" to="/orders">
                <div className="box shadow-sm ord-total">
                  <div className="mb-18">Total</div>
                  <div className="ord-number">+99</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <Link className="admin-link col-11" to="/products">
              <div className="dashboard-subtitle mb-9">Products</div>
            </Link>
            <Link className="admin-link col-1" to="/products">
              <div className="d-flex more">
                <div className="admin-more">More</div>
                <img className="more-arrow" src={arrowRight} />
              </div>
            </Link>
          </div>
          <div className="box shadow-sm">
            <table class="table table-borderless table-custom">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row col-12">#0001</th>
                  <td>
                    <img className="admin-img" src={ava}/>
                  </td>
                  <td>A Cup of Latte</td>
                  <td className="col-3">80,000 VND</td>
                  <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                </tr>
                <tr>
                  <th scope="row col-12">#0001</th>
                  <td>
                    <img className="admin-img" src={ava}/>
                  </td>
                  <td>A Cup of Latte</td>
                  <td className="col-3">80,000 VND</td>
                  <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                </tr>
                <tr>
                  <th scope="row col-12">#0001</th>
                  <td>
                    <img className="admin-img" src={ava}/>
                  </td>
                  <td>A Cup of Latte</td>
                  <td className="col-3">80,000 VND</td>
                  <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                </tr>
                <tr>
                  <th scope="row col-12">#0001</th>
                  <td>
                    <img className="admin-img" src={ava}/>
                  </td>
                  <td>A Cup of Latte</td>
                  <td className="col-3">80,000 VND</td>
                  <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="col-4 right-col">
          <div className="mb-27">
            <div className="row col-12">
              <Link className="col-10 admin-link" to="/customers">
                <div className="dashboard-subtitle mb-9">New Customers</div>
              </Link>
              <Link className="col-2 admin-link" to="/customers">
                <div className="d-flex more">
                  <div className="admin-more">More</div>
                  <img className="more-arrow" src={arrowRight} />
                </div>
              </Link>
            </div>
            <div className="box shadow-sm">
              <div className="mb-14">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                    <img className="admin-img" src={ava}/>
                  </div>
                  <div className="col-9">
                    <div>
                      <div className="mb-6 cus-name">Sweet Latte</div>
                      <div>sweetlatte2710@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-14">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                    <img className="admin-img" src={ava}/>
                  </div>
                  <div className="col-9">
                    <div>
                      <div className="mb-6 cus-name">Sweet Latte</div>
                      <div>sweetlatte2710@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-14">
                <div className="row col-12 align-items-center">
                  <div className="col-3">
                    <img className="admin-img" src={ava}/>
                  </div>
                  <div className="col-9">
                    <div>
                      <div className="mb-6 cus-name">Sweet Latte</div>
                      <div>sweetlatte2710@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-9">
                <div className="row col-12">
                  <div className="col-3">
                    <img className="admin-img" src={ava}/>
                  </div>
                  <div className="col-9">
                    <div>
                      <div className="mb-9 cus-name">Sweet Latte</div>
                      <div>sweetlatte2710@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="row col-12">
              <Link className="col-10 admin-link" to="/messages">
                <div className="dashboard-subtitle mb-9">New Messages</div>
              </Link>
              <Link className="col-2 admin-link" to="/messages">
                <div className="d-flex more">
                  <div className="admin-more">More</div>
                  <img className="more-arrow" src={arrowRight} />
                </div>
              </Link>
            </div>
            <div className="box shadow-sm">
              <div className="mb-18">
                <div className="row mb-9 mes-info">
                  <div className="col-9 cus-name">Sweet Latte</div>
                  <div className="col-3 text-sm">27/10/2021</div>
                </div>
                <div>
                  I want to buy a cup of sweet latte and some sour candy. 
                  Please wrap this for me because although again sweet candy, ...
                </div>
              </div>
              <div className="mb-18">
                <div className="row mb-9 mes-info">
                  <div className="col-9 cus-name">Sweet Latte</div>
                  <div className="col-3 text-sm">27/10/2021</div>
                </div>
                <div>
                  I want to buy a cup of sweet latte and some sour candy. 
                  Please wrap this for me because although again sweet candy, ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
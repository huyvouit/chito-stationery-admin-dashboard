import React from "react";
import { Link } from "react-router-dom";
import "./products.css";

import ava from "../../Assets/Image/ava.jpg";
import edit from "../../Assets/icon/edit.svg";
import remove from "../../Assets/icon/trash-2.svg";

export const ProductScreen = () => {
  return (
    <div className="products">
      <div className="container-fluid">
        <div className="row col-12 align-items-baseline">
          <div className="col-10">
            <div className="title mb-36 mt-30">Products</div>
          </div>
          <div className="col-2">
            <button className="product-add-btn shadow-sm">+ New product</button> 
          </div>
        </div>
        <div className="row">
          <div className="box shadow-sm">
            <table class="table table-borderless table-hover table-custom">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#0001</td>
                    <td>
                      <img className="admin-img" src={ava} alt="ava" />
                    </td>
                    <td>A Cup of Latte</td>
                    <td>80,000 VND</td>
                    <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                    <td>
                      <div>
                        <button className="float-btn mr-9 shadow">
                          <img src={edit} alt="edit-btn" />
                        </button>
                        <button className="float-btn shadow" >
                          <img src={remove} alt="remove-btn" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#0001</td>
                    <td>
                      <img className="admin-img" src={ava} alt="ava" />
                    </td>
                    <td>A Cup of Latte</td>
                    <td>80,000 VND</td>
                    <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                    <td>
                      <div>
                        <button className="float-btn mr-9 shadow">
                          <img src={edit} alt="edit-btn" />
                        </button>
                        <button className="float-btn shadow" >
                          <img src={remove} alt="remove-btn" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#0001</td>
                    <td>
                      <img className="admin-img" src={ava} alt="ava" />
                    </td>
                    <td>A Cup of Latte</td>
                    <td>80,000 VND</td>
                    <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                    <td>
                      <div>
                        <button className="float-btn mr-9 shadow">
                          <img src={edit} alt="edit-btn" />
                        </button>
                        <button className="float-btn shadow" >
                          <img src={remove} alt="remove-btn" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#0001</td>
                    <td>
                      <img className="admin-img" src={ava} alt="ava" />
                    </td>
                    <td>A Cup of Latte</td>
                    <td>80,000 VND</td>
                    <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                    <td>
                      <div>
                        <button className="float-btn mr-9 shadow">
                          <img src={edit} alt="edit-btn" />
                        </button>
                        <button className="float-btn shadow" >
                          <img src={remove} alt="remove-btn" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#0001</td>
                    <td>
                      <img className="admin-img" src={ava} alt="ava" />
                    </td>
                    <td>A Cup of Latte</td>
                    <td>80,000 VND</td>
                    <td className="col-3">I want to buy a cup of sweet latte and some sour...</td>
                    <td>
                      <div>
                        <button className="float-btn mr-9 shadow">
                          <img src={edit} alt="edit-btn" />
                        </button>
                        <button className="float-btn shadow" >
                          <img src={remove} alt="remove-btn" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-30 page-nav-custom">
              <li class="page-item shadow"><a class="page-nav-number" href="#">1</a></li>
              <li class="page-item shadow"><a class="page-nav-number" href="#">2</a></li>
              <li class="page-item shadow"><a class="page-nav-number" href="#">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

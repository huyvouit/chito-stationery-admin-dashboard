import React from "react";
import { Link } from "react-router-dom";
import "./products.css";

import ava from "../../Assets/Image/ava.jpg";
import camera from "../../Assets/icon/camera.svg";
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
            <button className="product-add-btn shadow-sm" data-bs-toggle="modal" data-bs-target="#modal-add-product">
              + New product
            </button>
          </div>
        </div>
        <div className="row">
          <div className="box shadow-sm">
            <table className="table table-borderless table-hover table-custom">
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
                  <td className="col-3">
                    I want to buy a cup of sweet latte and some sour...
                  </td>
                  <td>
                    <div>
                      <button className="float-btn mr-15 shadow" data-bs-toggle="modal" data-bs-target="#modal-edit-product">
                        <img src={edit} alt="edit-btn" />
                      </button>
                      <button className="float-btn shadow" data-bs-toggle="modal" data-bs-target="#modal-remove-product">
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
                  <td className="col-3">
                    I want to buy a cup of sweet latte and some sour...
                  </td>
                  <td>
                    <div>
                      <button className="float-btn mr-15 shadow">
                        <img src={edit} alt="edit-btn" />
                      </button>
                      <button className="float-btn shadow">
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
                  <td className="col-3">
                    I want to buy a cup of sweet latte and some sour...
                  </td>
                  <td>
                    <div>
                      <button className="float-btn mr-15 shadow">
                        <img src={edit} alt="edit-btn" />
                      </button>
                      <button className="float-btn shadow">
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
                  <td className="col-3">
                    I want to buy a cup of sweet latte and some sour...
                  </td>
                  <td>
                    <div>
                      <button className="float-btn mr-15 shadow">
                        <img src={edit} alt="edit-btn" />
                      </button>
                      <button className="float-btn shadow">
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
                  <td className="col-3">
                    I want to buy a cup of sweet latte and some sour...
                  </td>
                  <td>
                    <div>
                      <button className="float-btn mr-15 shadow">
                        <img src={edit} alt="edit-btn" />
                      </button>
                      <button className="float-btn shadow">
                        <img src={remove} alt="remove-btn" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-30 page-nav-custom">
              <li className="page-item shadow-sm">
                <a className="page-nav-number" href="#">
                  1
                </a>
              </li>
              <li className="page-item shadow-sm">
                <a className="page-nav-number" href="#">
                  2
                </a>
              </li>
              <li className="page-item shadow-sm">
                <a className="page-nav-number" href="#">
                  3
                </a>
              </li>
            </ul>
        </nav>

{/* Modal Add Product */}
        <div
          className="modal fade"
          id="modal-add-product"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content modal-custom width-custom">
              <div className="modal-body">
                <div className="row mb-27">

                  <div className="col-11">
                    <div className="row">
                      <div className="align-items-baseline">
                        <img className="admin-img mr-15" src={ava} alt="ava" />
                        
                          <button className="btn-common add-img-btn mr-15">
                            <img className="add-img-btn-icon" src={camera} alt="add-img"/>
                            Add image
                          </button>
                        
                        
                      </div>
                    </div> 
                    
                  </div>

                  <div className="col-1 text-align-right mt-2">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                </div>
                <div>
                    <div className="product-input-label mb-9">NAME</div>
                    <input className="input-common mb-18" type="text"/>
                    <div className="product-input-label mb-9">PRICE</div>
                    <input className="input-common mb-18" number="text"/>
                    <div className="product-input-label mb-9">DESCRIPTION</div>
                    <input className="input-common mb-18" type="text"/>
                </div>
              </div>
              <div class="modal-footer modal-footer-custom">
                <button type="button" class="btn-common secondary-btn" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn-common primary-btn">Add</button>
              </div>
            </div>
          </div>
        </div>

{/* Modal Edit Product */}
        <div
          className="modal fade"
          id="modal-edit-product"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content modal-custom width-custom">
              <div className="modal-body">
                <div className="row mb-27">

                  <div className="col-11">
                    <div className="row col-12 align-items-center">
                      <div className="col-2">
                        <img className="admin-img mr-15" src={ava} alt="ava" />
                      </div>
                      <div className="col-10">
                        <div className="modal-title pl-15">ID: #0001</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-1 text-align-right mt-2">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                </div>
                <div>
                    <div className="product-input-label mb-9">NAME</div>
                    <input className="input-common mb-18" type="text"/>
                    <div className="product-input-label mb-9">PRICE</div>
                    <input className="input-common mb-18" type="number"/>
                    <div className="product-input-label mb-9">DESCRIPTION</div>
                    <input className="input-common mb-18" type="text"/>
                </div>
              </div>
              <div class="modal-footer modal-footer-custom">
                <button type="button" class="btn-common secondary-btn" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn-common primary-btn">Save</button>
              </div>
            </div>
          </div>
        </div>

{/* Modal Remove Product */}
        <div
          className="modal fade"
          id="modal-remove-product"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content modal-custom">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">DELETE CONFIRMATION</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Do you really want to delete "A Cup of Latte" (ID: #0001)?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-common primary-btn shadow-sm" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn-common secondary-btn shadow-sm">Delete</button>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

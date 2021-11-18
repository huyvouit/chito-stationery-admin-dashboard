import React from "react";
import ava from "../../Assets/Image/ava.jpg";

export const ProductScreen = () => {
  return (
    <div className="customers">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title mb-36 mt-30">Products</div>
          </div>
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
                    <td>I want to buy a cup of sweet latte and some sour...</td>
                    <td className="col-12">
                      <button className="col-6">hi</button>
                      <button className="col-6">hi</button>
                    </td>
                  </tr>
                </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-30 page-nav-custom">
              <li class="page-item"><a class="page-nav-number" href="#">1</a></li>
              <li class="page-item"><a class="page-nav-number" href="#">2</a></li>
              <li class="page-item"><a class="page-nav-number" href="#">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

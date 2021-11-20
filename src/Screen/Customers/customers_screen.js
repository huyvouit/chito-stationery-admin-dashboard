import React from "react";
import "./customers.css";

export const CustomerScreen = () => {
  return (
    <div className="customers">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title mb-36 mt-30">Customers</div>
          </div>
          <div className="col-12">
            <div className="box shadow-sm">
              <table className="table table-borderless table-hover table-custom">
                <thead>
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Orders</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>sweetlatte@gmail.com</td>
                    <td>Sweet Latte</td>
                    <td>0900998877</td>
                    <td className="col-4">
                      I want to buy a cup of sweet latte and some sour...
                    </td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination */}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Message.css"

export const MessageScreen = () => {
  return (
    <div className="message">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title mb-36 mt-30">Message</div>
          </div>
          <div className=" box shadow-sm">
            <table className=" table table-borderless table-hover table-custom">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Email</th>
                  <th scope="col">Full name</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                <tr role="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <td>06/11/2021</td>
                  <td>littlestarinthesky@gmail.com</td>
                  <td>Little Star</td>
                  <td className="col-3 text-overfolow">
                  Like anything, chocolate is best enjoyed in moderation.
                  If you choose chocolate wisely, it actually has some health benefits,
                  but eating too much candy has negative effects on your health.
                  Candies are mostly made from sugar which has to be boiled at a special temperature.
                  Beside sugar, ingredients like flavorings, nuts, gelatin, egg whites,
                  milk-based ingredients and butter are used for candy making.
                  </td>
                </tr>
                <tr role="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <td>06/11/2021</td>
                  <td>littlestarinthesky@gmail.com</td>
                  <td>Little Star</td>
                  <td className="col-3">Candies are delightful treat desired and
                    craved by every person around the globe craved by around the globe...</td>
                </tr>
                <tr>
                  <td>06/11/2021</td>
                  <td>littlestarinthesky@gmail.com</td>
                  <td>Little Star</td>
                  <td className="col-3">Candies are delightful treat desired and
                    craved by every person around the globe craved by around the globe...</td>
                </tr>
                <tr>
                  <td>06/11/2021</td>
                  <td>littlestarinthesky@gmail.com</td>
                  <td>Little Star</td>
                  <td className="col-3">Candies are delightful treat desired and
                    craved by every person around the globe craved by around the globe...</td>
                </tr>
                <tr>
                  <td>06/11/2021</td>
                  <td>littlestarinthesky@gmail.com</td>
                  <td>Little Star</td>
                  <td className="col-3">Candies are delightful treat desired and
                    craved by every person around the globe craved by around the globe...</td>
                </tr>
                <tr>
                  <td>06/11/2021</td>
                  <td>littlestarinthesky@gmail.com</td>
                  <td>Little Star</td>
                  <td className="col-3">Candies are delightful treat desired and
                    craved by every person around the globe craved by around the globe...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered ">
          <div className="modal-content rounded-25 ">
            <div className="modal-body">
              <div className="row mb-14">
                <div className="col-6">
                  <p className="modal-title mt-2 "><strong className="title-content">Little Star</strong></p>
                  <p className="modal-title mt-2 "><strong className="title-content">littlestarinthesky@gmail.com</strong></p>
                </div>
                <div className="col-5 justify-content-center">
                  <p className="modal-title mt-2"><strong className="title-content">Datre:</strong> 06/11/2021</p>
                </div>
                <div className="col-1 text-align-center mt-2">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </div>
              <div className="row mb-14">
                <p className="modal-title mt-18">Like anything, chocolate is best enjoyed in moderation.
                  If you choose chocolate wisely, it actually has some health benefits,
                  but eating too much candy has negative effects on your health.
                  Candies are mostly made from sugar which has to be boiled at a special temperature.
                  Beside sugar, ingredients like flavorings, nuts, gelatin, egg whites,
                  milk-based ingredients and butter are used for candy making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

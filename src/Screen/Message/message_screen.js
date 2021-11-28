import React, { useContext, useState, useEffect } from "react";
import { MessageContext } from "../../Context/message_context";
import "./Message.css";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { Pagination } from "../../Utils/pagination";
import Moment from "react-moment";
import { MessageModal } from "./message_modal";
export const MessageScreen = (props) => {
  const {
    messageState: { message, messages, messagesLoading, maxPage },
    getAllMessage,
    findMessage,
    setShowMessageModal,
  } = useContext(MessageContext);

  const [query, setQuery] = useState(queryString.parse(props.location.search));
  console.log("query,", query);

  useEffect(() => {
    const params = Object.keys(query).length > 0 ? query : { page: 1 };
    console.log("params", params);
    getAllMessage(params);
  }, [query]);

  let history = useHistory();
  const handlePageClick = (data) => {
    history.push(`/messages?page=${data.selected + 1}`);
    setQuery({ page: data.selected + 1 });
  };

  const handleShowModal = (id) => {
    setShowMessageModal(true);
    findMessage(id);
  };

  let body = null;

  if (messagesLoading) {
    body = (
      <div className="spinner-container">
        <div className="spinner-border text-dark " role="status"></div>;
      </div>
    );
  } else if (messages.length === 0) {
    body = (
      <>
        <p>No connect to database</p>
      </>
    );
  } else {
    body = (
      <div className="message">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="title mb-36 mt-30">Message</div>
            </div>
            <div className="col-12">
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
                    {messages &&
                      messages.map((item) => {
                        return (
                          <tr
                            className="col-12"
                            key={item._id}
                            onClick={() => handleShowModal(item._id)}
                          >
                            <td className="col-2">
                              <Moment format="DD/MM/YYYY">
                                {item.createdAt}
                              </Moment>
                            </td>
                            <td className="col-3">{item.email}</td>
                            <td className="col-2 ellipsis"><span className="set-height">{item.name}</span></td>
                            <td className="text-limit">{item.message}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          pageCount={maxPage}
          handleClick={handlePageClick}
          query={query}
        />

        {/* <!-- Modal --> */}
        {/* <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered ">
          <div className="modal-content rounded-25 ">
            <div className="modal-body">
              <div className="row mb-14">
                <div className="col-6">
                  <p className="modal-title mt-2 ">
                    <strong className="title-content">Little Star</strong>
                  </p>
                  <p className="modal-title mt-2 ">
                    <strong className="title-content">
                      littlestarinthesky@gmail.com
                    </strong>
                  </p>
                </div>
                <div className="col-5 justify-content-center">
                  <p className="modal-title mt-2">
                    <strong className="title-content">Datre:</strong> 06/11/2021
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
              <div className="row mb-14">
                <p className="modal-title mt-18">
                  Like anything, chocolate is best enjoyed in moderation. If you
                  choose chocolate wisely, it actually has some health benefits,
                  but eating too much candy has negative effects on your health.
                  Candies are mostly made from sugar which has to be boiled at a
                  special temperature. Beside sugar, ingredients like
                  flavorings, nuts, gelatin, egg whites, milk-based ingredients
                  and butter are used for candy making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    );
  }
  return (
    <>
      {body}
      {message !== null && <MessageModal />}
    </>
  );
};

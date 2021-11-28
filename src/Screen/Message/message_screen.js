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

  useEffect(() => {
    const params = Object.keys(query).length > 0 ? query : { page: 1 };
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
                            <td className="col-2 ellipsis">
                              <span className="set-height">{item.name}</span>
                            </td>
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

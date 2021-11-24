import React, { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../../Context/customer_context";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import "./customers.css";
import { Pagination } from "../../Utils/pagination";

export const CustomerScreen = (props) => {
  const {
    customerState: { customers, customersLoading, maxPage },
    getAllCustomer,
  } = useContext(CustomerContext);

  const [query, setQuery] = useState(queryString.parse(props.location.search));
  console.log("query,", query);

  useEffect(() => {
    const params = Object.keys(query).length > 0 ? query : { page: 1 };
    console.log("params", params);
    getAllCustomer(params);
  }, [query]);

  let history = useHistory();
  const handlePageClick = (data) => {
    history.push(`/customers?page=${data.selected + 1}`);
    setQuery({ page: data.selected + 1 });
  };

  let body = null;

  if (customersLoading) {
    body = (
      <div className="spinner-container">
        <div className="spinner-border text-dark " role="status"></div>;
      </div>
    );
  } else if (customers.length === 0) {
    body = (
      <>
        <p>No connect to database</p>
      </>
    );
  } else {
    body = (
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
                    {customers &&
                      customers.map((item) => {
                        return (
                          <tr key={item._id}>
                            {item.email ? (
                              <td>{item.email}</td>
                            ) : (
                              <td>No data</td>
                            )}
                            {item.fullname ? (
                              <td>{item.fullname}</td>
                            ) : (
                              <td>No data</td>
                            )}
                            {item.phone ? (
                              <td>{item.phone}</td>
                            ) : (
                              <td>No data</td>
                            )}

                            {item.address ? (
                              <td className="text-limit">{item.address}</td>
                            ) : (
                              <td>No data</td>
                            )}

                            {item.orders >= 0 ? (
                              <td>{item.orders}</td>
                            ) : (
                              <td>No data</td>
                            )}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination
              pageCount={maxPage}
              handleClick={handlePageClick}
              query={query}
            />
          </div>
        </div>
      </div>
    );
  }
  return <>{body}</>;
};

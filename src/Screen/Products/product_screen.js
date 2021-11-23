import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import queryString from "query-string";
import { formatter } from "../../Utils/formatter";
import edit from "../../Assets/icon/edit.svg";
import remove from "../../Assets/icon/trash-2.svg";
import { productContext } from "../../Context/product_context";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

export const ProductScreen = (props) => {
  const [query, setQuery] = useState(queryString.parse(props.location.search));
  console.log("query,", query);
  const {
    productState: { product, products, productsLoading, maxPage },
    getProducts,
  } = useContext(productContext);

  useEffect(() => {
    const params = Object.keys(query).length > 0 ? query : { page: 1 };
    console.log("params", params);
    getProducts(params);
  }, [query]);

  //handle select page for paginate
  let history = useHistory();
  const handlePageClick = (data) => {
    history.push(`/products?page=${data.selected + 1}`);
    setQuery({ page: data.selected + 1 });
  };

  let body = null;

  if (productsLoading) {
    body = (
      <div className="spinner-container">
        <div className="spinner-border text-dark " role="status"></div>;
      </div>
    );
  } else if (products.length === 0) {
    body = (
      <>
        <p>No connect to database</p>
      </>
    );
  } else {
    body = (
      <div className="products">
        <div className="container-fluid">
          <div className="row col-12 align-items-baseline">
            <div className="col-10">
              <div className="title mb-36 mt-30">Products</div>
            </div>
            <div className="col-2">
              <button
                className="product-add-btn shadow-sm"
                data-bs-toggle="modal"
                data-bs-target="#modal-add-product"
              >
                + New product
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="box shadow-sm">
                <table
                  className="table table-borderless table-hover table-custom"
                  style={{ marginBottom: "0" }}
                >
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
                    {products &&
                      products.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>
                              <img
                                className="admin-img"
                                src={item.image}
                                alt={item.productName}
                              />
                            </td>
                            <td>{item.productName}</td>
                            <td>
                              {formatter.format(item.price.$numberDecimal)}
                            </td>
                            <td className="col-3">
                              <p
                                className="text-limit"
                                style={{ marginBottom: "0" }}
                              >
                                {item.description}
                              </p>
                            </td>
                            <td>
                              <div>
                                <button
                                  className="float-btn mr-15 shadow"
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit-product"
                                >
                                  <img src={edit} alt="edit-btn" />
                                </button>
                                <button
                                  className="float-btn shadow"
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-remove-product"
                                >
                                  <img src={remove} alt="remove-btn" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <ReactPaginate
            pageCount={maxPage}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            breakLabel="..."
            nextLabel={">"}
            previousLabel={"<"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link page-nav-number"}
            containerClassName={
              "pagination justify-content-center mt-3 page-nav-custom"
            }
            pageClassName={"page-item"}
            pageLinkClassName={"page-link page-nav-number"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link page-nav-number"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link page-nav-number"}
            activeLinkClassName={"page-active"}
            disabledClassName={"disabled"}
            forcePage={query?.page - 1 || 0}
          />
        </div>
      </div>
    );
  }

  return <>{body}</>;
  // return (
  //   <div className="products">
  //     <div className="container-fluid">
  //       <div className="row col-12 align-items-baseline">
  //         <div className="col-10">
  //           <div className="title mb-36 mt-30">Products</div>
  //         </div>
  //         <div className="col-2">
  //           <button
  //             className="product-add-btn shadow-sm"
  //             data-bs-toggle="modal"
  //             data-bs-target="#modal-add-product"
  //           >
  //             + New product
  //           </button>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-12">
  //           <div className="box shadow-sm">
  //             <table className="table table-borderless table-hover table-custom">
  //               <thead>
  //                 <tr>
  //                   <th scope="col">ID</th>
  //                   <th scope="col">Image</th>
  //                   <th scope="col">Name</th>
  //                   <th scope="col">Price</th>
  //                   <th scope="col">Description</th>
  //                   <th scope="col">Action</th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 <tr>
  //                   <td>#0001</td>
  //                   <td>
  //                     <img className="admin-img" src={ava} alt="ava" />
  //                   </td>
  //                   <td>A Cup of Latte</td>
  //                   <td>80,000 VND</td>
  //                   <td className="col-3">
  //                     I want to buy a cup of sweet latte and some sour...
  //                   </td>
  //                   <td>
  //                     <div>
  //                       <button
  //                         className="float-btn mr-15 shadow"
  //                         data-bs-toggle="modal"
  //                         data-bs-target="#modal-edit-product"
  //                       >
  //                         <img src={edit} alt="edit-btn" />
  //                       </button>
  //                       <button
  //                         className="float-btn shadow"
  //                         data-bs-toggle="modal"
  //                         data-bs-target="#modal-remove-product"
  //                       >
  //                         <img src={remove} alt="remove-btn" />
  //                       </button>
  //                     </div>
  //                   </td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Pagination */}

  //       {/* Modal Add Product */}
  //       <div
  //         className="modal fade"
  //         id="modal-add-product"
  //         tabindex="-1"
  //         aria-labelledby="exampleModalLabel"
  //         aria-hidden="true"
  //       >
  //         <div className="modal-dialog modal-lg modal-dialog-centered">
  //           <div className="modal-content modal-custom width-custom">
  //             <div className="modal-body">
  //               <div className="row mb-27">
  //                 <div className="col-11">
  //                   <div className="row">
  //                     <div className="align-items-baseline">
  //                       <img className="admin-img mr-15" src={ava} alt="ava" />

  //                       <button className="btn-common add-img-btn mr-15">
  //                         <img
  //                           className="add-img-btn-icon"
  //                           src={camera}
  //                           alt="add-img"
  //                         />
  //                         Add image
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 <div className="col-1 text-align-right mt-2">
  //                   <button
  //                     type="button"
  //                     className="btn-close"
  //                     data-bs-dismiss="modal"
  //                     aria-label="Close"
  //                   ></button>
  //                 </div>
  //               </div>
  //               <div>
  //                 <div className="product-input-label mb-9">NAME</div>
  //                 <input className="input-common mb-18" type="text" />
  //                 <div className="product-input-label mb-9">PRICE</div>
  //                 <input className="input-common mb-18" number="text" />
  //                 <div className="product-input-label mb-9">DESCRIPTION</div>
  //                 <input className="input-common mb-18" type="text" />
  //               </div>
  //             </div>
  //             <div className="modal-footer modal-footer-custom">
  //               <button
  //                 type="button"
  //                 className="btn-common secondary-btn"
  //                 data-bs-dismiss="modal"
  //               >
  //                 Cancel
  //               </button>
  //               <button type="button" className="btn-common primary-btn">
  //                 Add
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Modal Edit Product */}
  //       <div
  //         className="modal fade"
  //         id="modal-edit-product"
  //         tabindex="-1"
  //         aria-labelledby="exampleModalLabel"
  //         aria-hidden="true"
  //       >
  //         <div className="modal-dialog modal-lg modal-dialog-centered">
  //           <div className="modal-content modal-custom width-custom">
  //             <div className="modal-body">
  //               <div className="row mb-27">
  //                 <div className="col-11">
  //                   <div className="row col-12 align-items-center">
  //                     <div className="col-2">
  //                       <img className="admin-img mr-15" src={ava} alt="ava" />
  //                     </div>
  //                     <div className="col-10">
  //                       <div className="modal-title pl-15">ID: #0001</div>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 <div className="col-1 text-align-right mt-2">
  //                   <button
  //                     type="button"
  //                     className="btn-close"
  //                     data-bs-dismiss="modal"
  //                     aria-label="Close"
  //                   ></button>
  //                 </div>
  //               </div>
  //               <div>
  //                 <div className="product-input-label mb-9">NAME</div>
  //                 <input className="input-common mb-18" type="text" />
  //                 <div className="product-input-label mb-9">PRICE</div>
  //                 <input className="input-common mb-18" type="number" />
  //                 <div className="product-input-label mb-9">DESCRIPTION</div>
  //                 <input className="input-common mb-18" type="text" />
  //               </div>
  //             </div>
  //             <div className="modal-footer modal-footer-custom">
  //               <button
  //                 type="button"
  //                 className="btn-common secondary-btn"
  //                 data-bs-dismiss="modal"
  //               >
  //                 Cancel
  //               </button>
  //               <button type="button" className="btn-common primary-btn">
  //                 Save
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Modal Remove Product */}
  //       <div
  //         className="modal fade"
  //         id="modal-remove-product"
  //         tabindex="-1"
  //         aria-labelledby="exampleModalLabel"
  //         aria-hidden="true"
  //       >
  //         <div className="modal-dialog modal-lg modal-dialog-centered">
  //           <div className="modal-content modal-custom">
  //             <div className="modal-header">
  //               <h5 className="modal-title" id="exampleModalCenterTitle">
  //                 DELETE CONFIRMATION
  //               </h5>
  //               <button
  //                 type="button"
  //                 className="btn-close"
  //                 data-bs-dismiss="modal"
  //                 aria-label="Close"
  //               ></button>
  //             </div>
  //             <div className="modal-body">
  //               <p>
  //                 Do you really want to delete "A Cup of Latte" (ID: #0001)?
  //               </p>
  //             </div>
  //             <div className="modal-footer">
  //               <button
  //                 type="button"
  //                 className="btn-common primary-btn shadow-sm"
  //                 data-bs-dismiss="modal"
  //               >
  //                 Cancel
  //               </button>
  //               <button
  //                 type="button"
  //                 className="btn-common secondary-btn shadow-sm"
  //               >
  //                 Delete
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

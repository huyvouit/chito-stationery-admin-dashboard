import Modal from "react-bootstrap/Modal";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../Context/product_context";
import { toast } from "react-toastify";

const DeleteProductModal = ({ query }) => {
  // Contexts
  const {
    productState: { product },
    showDeleteProductModal,
    setShowDeleteProductModal,
    getProducts,
    deleteProduct,
  } = useContext(ProductContext);

  // State
  const handleCloseModal = () => {
    setShowDeleteProductModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await deleteProduct(product._id);
      if (response.success) {
        await getProducts(query);
        setShowDeleteProductModal(false);
        toast.success(response.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(response.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <Modal
      show={showDeleteProductModal}
      onHide={handleCloseModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Product</Modal.Title>
      </Modal.Header>

      <Modal.Body
      // style={{
      //   maxHeight: "calc(100vh - 210px)",
      //   overflowY: "auto",
      // }}
      >
        <p>
          Do you really want to delete{" "}
          <span>
            <strong>"{product.productName}"</strong>
          </span>{" "}
          ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn-common secondary-btn"
          onClick={handleCloseModal}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn-common primary-btn"
          onClick={onSubmit}
        >
          Delete
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteProductModal;

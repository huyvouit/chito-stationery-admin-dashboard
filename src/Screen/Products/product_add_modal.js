import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/product_context";
import ava from "../../Assets/Image/ava.jpg";
const AddProductModal = () => {
  // Contexts
  const {
    showAddProductModal,
    setShowAddProductModal,
    addProduct,
    setShowToast,
  } = useContext(ProductContext);

  // State
  const [newProduct, setNewProduct] = useState({
    image: "",
    productName: "",
    description: "",
    price: "",
    type: "",
  });

  const { image, description, price, type } = newProduct;

  const onChangeNewProductForm = (event) =>
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });

  const closeDialog = () => {
    resetAddProductData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addProduct(newProduct);
    resetAddProductData();
    setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  const resetAddProductData = () => {
    setNewProduct({ title: "", description: "", url: "", status: "" });
    setShowAddProductModal(false);
  };

  return (
    <Modal show={showAddProductModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row mb-27">
          <div className="col-11">
            <div className="row">
              <div className="align-items-baseline">
                <img className="admin-img mr-15" src={ava} alt="ava" />

                <input className="input-common mb-18" type="text" />
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
          <input className="input-common mb-18" type="text" />
          <div className="product-input-label mb-9">PRICE</div>
          <input className="input-common mb-18" number="text" />
          <div className="product-input-label mb-9">DESCRIPTION</div>
          <input className="input-common mb-18" type="text" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDialog}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;

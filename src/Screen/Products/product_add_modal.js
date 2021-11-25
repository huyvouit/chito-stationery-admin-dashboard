import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/product_context";
import ava from "../../Assets/Image/ava.jpg";
import { toast } from "react-toastify";
import isEmpty from "validator/lib/isEmpty";

const AddProductModal = ({ query }) => {
  // Contexts
  const {
    showAddProductModal,
    setShowAddProductModal,
    getProducts,
    addProduct,
  } = useContext(ProductContext);

  // State
  const [newProduct, setNewProduct] = useState({
    image: "",
    productName: "",
    description: "",
    detail: "",
    price: "",
    type: "washi tape",
  });
  const { image, productName, description, price, type, detail } = newProduct;
  const [validationMsg, setValidationMsg] = useState({});

  const onChangeNewProductForm = (event) =>
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });

  const handleCloseModal = () => {
    resetAddProductData();
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(image)) {
      msg.image = "Please input url image.";
    }
    if (isEmpty(price)) {
      msg.price = "Please input price.";
    }
    if (isEmpty(description)) {
      msg.description = "Please input desctiption.";
    }
    if (isEmpty(detail)) {
      msg.detail = "Please input detail.";
    }
    if (isEmpty(productName)) {
      msg.productName = "Please input name of product";
    }
    if (isEmpty(type)) {
      msg.type = "Please input type of product.";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    try {
      const response = await addProduct(newProduct);
      if (response.success) {
        await getProducts(query);
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
    resetAddProductData();
  };

  const resetAddProductData = () => {
    setNewProduct({
      image: "",
      description: "",
      price: "",
      productName: "",
      detail: "",
      type: "washi tape",
    });
    setShowAddProductModal(false);
    setValidationMsg({});
  };

  return (
    <Modal show={showAddProductModal} onHide={handleCloseModal} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          maxHeight: "calc(100vh - 210px)",
          overflowY: "auto",
        }}
      >
        <div className="row mb-27">
          <div className="col-12">
            <div className="row">
              <div className="align-items-baseline">
                <img className="admin-img mr-15" src={ava} alt="ava" />

                <input
                  className="input-common mb-18"
                  type="text"
                  name="image"
                  value={image}
                  onChange={onChangeNewProductForm}
                />
                <p style={{ color: "red" }}>{validationMsg["image"]}</p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="product-input-label mb-9">NAME</div>
            <input
              className="input-common mb-18"
              type="text"
              name="productName"
              value={productName}
              onChange={onChangeNewProductForm}
            />
            <p style={{ color: "red" }}>{validationMsg["productName"]}</p>
            <div className="product-input-label mb-9">PRICE</div>
            <input
              className="input-common mb-18"
              type="number"
              name="price"
              value={price}
              onChange={onChangeNewProductForm}
            />
            <p style={{ color: "red" }}>{validationMsg["price"]}</p>
            <div className="product-input-label mb-9">DESCRIPTION</div>
            <input
              className="input-common mb-18"
              type="text"
              name="description"
              value={description}
              onChange={onChangeNewProductForm}
            />
            <p style={{ color: "red" }}>{validationMsg["description"]}</p>
            <div className="product-input-label mb-9">DETAIL</div>
            <input
              className="input-common mb-18"
              type="text"
              name="detail"
              value={detail}
              onChange={onChangeNewProductForm}
            />
            <p style={{ color: "red" }}>{validationMsg["detail"]}</p>
            <div className="product-input-label mb-9">TYPE</div>
            <select
              className="form-select"
              name="type"
              value={type}
              onChange={onChangeNewProductForm}
            >
              <option value="washi tape">WASHI TAPE</option>
              <option value="sticky">STICKER</option>
              <option value="sticker note">STICKY NOTE</option>
            </select>
          </div>
        </div>
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
          Add
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;

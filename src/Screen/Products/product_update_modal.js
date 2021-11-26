import Modal from "react-bootstrap/Modal";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../Context/product_context";
import ava from "../../Assets/Image/ava.jpg";
import { toast } from "react-toastify";
import isEmpty from "validator/lib/isEmpty";

const UpdateProductModal = ({ query }) => {
  // Contexts
  const {
    productState: { product },
    showUpdateProductModal,
    setShowUpdateProductModal,
    getProducts,
    updateProduct,
  } = useContext(ProductContext);

  // State
  const [updatedProduct, setUpdatedProduct] = useState(product);

  useEffect(() => setUpdatedProduct(product), [product]);

  const { image, productName, description, price, type, detail } =
    updatedProduct;
  const [validationMsg, setValidationMsg] = useState({});

  const onChangeNewProductForm = (event) =>
    setUpdatedProduct({
      ...updatedProduct,
      [event.target.name]: event.target.value,
    });

  const onChangePrice = (event) =>
    setUpdatedProduct({
      ...updatedProduct,
      [event.target.name]: { $numberDecimal: event.target.value },
    });

  const handleCloseModal = () => {
    setUpdatedProduct(product);
    setShowUpdateProductModal(false);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(image)) {
      msg.image = "Please input your url image.";
    }
    if (isEmpty(price.$numberDecimal)) {
      msg.price = "Please input your price.";
    }
    if (isEmpty(description)) {
      msg.description = "Please input your desctiption.";
    }
    if (isEmpty(detail)) {
      msg.detail = "Please input your detail.";
    }
    if (isEmpty(productName)) {
      msg.productName = "Please input your name of product";
    }
    if (isEmpty(type)) {
      msg.type = "Please input your type of product.";
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
      const body = {
        id: updatedProduct._id,
        data: {
          productName,
          type,
          description,
          price,
          detail,
        },
      };
      console.log(body);
      const response = await updateProduct(body);
      if (response.success) {
        await getProducts(query);
        setShowUpdateProductModal(false);
        toast.success(response.msg, {
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
    <Modal show={showUpdateProductModal} onHide={handleCloseModal} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
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
                <img className="admin-img mr-15" src={image} alt="ava" />

                <input
                  className="input-common mb-18"
                  type="text"
                  name="image"
                  value={image}
                  // onChange={onChangeNewProductForm}
                  readOnly
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
              value={price.$numberDecimal}
              onChange={onChangePrice}
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
          Update
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProductModal;

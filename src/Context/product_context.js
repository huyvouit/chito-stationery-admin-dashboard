import { createContext, useReducer, useState } from "react";
import { productReducer } from "../Reducer/product_reducer";
import {
  PRODUCTS_LOADED_FAIL,
  PRODUCTS_LOADED_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FIND_PRODUCT,
} from "../Utils/constants";
import productApi from "../Api/product_api";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  // State
  const [productState, dispatch] = useReducer(productReducer, {
    product: null,
    products: [],
    productsLoading: true,
    maxPage: null,
  });

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);

  // Get all products
  const getProducts = async (page) => {
    try {
      const response = await productApi.getAll(page);
      if (response.data) {
        dispatch({
          type: PRODUCTS_LOADED_SUCCESS,
          payload: {
            products: response.data.products,
            maxPage: response.data.maxPage,
          },
        });
      }
    } catch (error) {
      dispatch({ type: PRODUCTS_LOADED_FAIL });
    }
  };

  // Add product
  const addProduct = async (newproduct) => {
    try {
      const response = await productApi.postAddProduct(newproduct);
      if (response.data.success) {
        dispatch({ type: ADD_PRODUCT, payload: response.data.product });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Delete product
  const deleteProduct = async (productId) => {
    try {
      const response = await productApi.deleteProduct(productId);
      if (response.data.success)
        dispatch({ type: DELETE_PRODUCT, payload: productId });
    } catch (error) {
      console.log(error);
    }
  };

  // Find product when user is updating product
  const findProduct = (productId) => {
    const product = productState.products.find(
      (product) => product._id === productId
    );
    dispatch({ type: FIND_PRODUCT, payload: product });
  };

  // Update product
  const updateProduct = async (updatedproduct) => {
    try {
      const response = await productApi.patchUpdateProduct(updateProduct);
      if (response.data.success) {
        dispatch({ type: UPDATE_PRODUCT, payload: response.data.product });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // product context data
  const productContextData = {
    productState,
    getProducts,
    showAddProductModal,
    setShowAddProductModal,
    showUpdateProductModal,
    setShowUpdateProductModal,
    showDeleteProductModal,
    setShowDeleteProductModal,
    addProduct,
    deleteProduct,
    findProduct,
    updateProduct,
  };

  return (
    <productContext.Provider value={productContextData}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;

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

export const ProductContext = createContext();

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
      console.log(response.data);
      if (response.data.success) {
        // dispatch({ type: ADD_PRODUCT, payload: response.data.product });
        return response.data;
      }
    } catch (error) {
      // console.log(error.response.data.error);
      return error.response.data;
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      const response = await productApi.deleteProduct(id);
      console.log(response.data);
      // if (response.data.success)
      // dispatch({ type: DELETE_PRODUCT, payload: productId });
      return response.data;
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
  const updateProduct = async (updatedProduct) => {
    try {
      const response = await productApi.patchUpdateProduct(updatedProduct);
      console.log(response.data);
      if (response.data.success) {
        // dispatch({ type: UPDATE_PRODUCT, payload: response.data.product });
        return response.data;
      }
    } catch (error) {
      // console.log(error.response.data.error);
      return error.response.data;
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
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

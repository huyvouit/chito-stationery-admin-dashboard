import {
  PRODUCTS_LOADED_FAIL,
  PRODUCTS_LOADED_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FIND_PRODUCT,
} from "../Utils/constants";

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_LOADED_SUCCESS:
      return {
        ...state,
        products: payload.products,
        productsLoading: false,
        maxPage: payload.maxPage,
      };

    case PRODUCTS_LOADED_FAIL:
      return {
        ...state,
        products: [],
        productsLoading: false,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [{ ...payload }, ...state.products],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
      };

    case FIND_PRODUCT:
      return { ...state, product: payload };

    case UPDATE_PRODUCT:
      const newproducts = state.products.map((product) =>
        product._id === payload._id ? payload : product
      );

      return {
        ...state,
        products: newproducts,
      };

    default:
      return state;
  }
};

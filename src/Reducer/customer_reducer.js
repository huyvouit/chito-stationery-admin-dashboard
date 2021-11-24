import {
  CUSTOMERS_LOADED_FAIL,
  CUSTOMERS_LOADED_SUCCESS,
} from "../Utils/constants";

export const CustomerReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CUSTOMERS_LOADED_SUCCESS:
      return {
        ...state,
        customers: payload.customers,
        customersLoading: false,
        maxPage: payload.maxPage,
      };

    case CUSTOMERS_LOADED_FAIL:
      return {
        ...state,
        customers: [],
        customersLoading: false,
      };

    default:
      return state;
  }
};

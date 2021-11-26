import {
  ORDERS_LOADED_FAIL,
  ORDERS_LOADED_SUCCESS,
  FIND_ORDER,
} from "../Utils/constants";

export const OrderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDERS_LOADED_SUCCESS:
      return {
        ...state,
        orders: payload.orders,
        ordersLoading: false,
        maxPage: payload.maxPage,
        totalOrder: payload.totalOrder,
      };

    case ORDERS_LOADED_FAIL:
      return {
        ...state,
        orders: [],
        ordersLoading: false,
      };

    case FIND_ORDER:
      return {
        ...state,
        order: payload,
      };

    default:
      return state;
  }
};

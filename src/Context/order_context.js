import { createContext, useReducer, useState } from "react";
import { OrderReducer } from "../Reducer/order_reducer";
import {
  FIND_ORDER,
  ORDERS_LOADED_FAIL,
  ORDERS_LOADED_SUCCESS,
} from "../Utils/constants";
import orderApi from "../Api/order_api";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  // State
  const [orderState, dispatch] = useReducer(OrderReducer, {
    order: null,
    orders: [],
    ordersLoading: true,
    maxPage: null,
    totalOrder: null,
  });
  const [showOrderModal, setShowOrderModal] = useState(false);
  const getAllOrder = async (page) => {
    try {
      const response = await orderApi.getPurchaseHistory(page);

      if (response.data) {
        dispatch({
          type: ORDERS_LOADED_SUCCESS,
          payload: {
            orders: response.data.orders,
            maxPage: response.data.maxPage,
            totalOrder: response.data.totalOrder,
          },
        });
      }
    } catch (err) {
      dispatch({ type: ORDERS_LOADED_FAIL });
    }
  };

  const findOrder = (orderId) => {
    const order = orderState.orders.find((order) => order._id === orderId);
    dispatch({ type: FIND_ORDER, payload: order });
  };

  // order context data
  const OrderContextData = {
    orderState,
    getAllOrder,
    findOrder,
    showOrderModal,
    setShowOrderModal,
  };

  return (
    <OrderContext.Provider value={OrderContextData}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

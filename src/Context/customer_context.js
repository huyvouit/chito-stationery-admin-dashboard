import { createContext, useReducer } from "react";
import { CustomerReducer } from "../Reducer/customer_reducer";
import {
  CUSTOMERS_LOADED_FAIL,
  CUSTOMERS_LOADED_SUCCESS,
} from "../Utils/constants";
import customerApi from "../Api/customer_api";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  // State
  const [customerState, dispatch] = useReducer(CustomerReducer, {
    customers: [],
    customersLoading: true,
    maxPage: null,
  });

  const getAllCustomer = async (page) => {
    try {
      const response = await customerApi.getAll(page);
      if (response.data) {
        dispatch({
          type: CUSTOMERS_LOADED_SUCCESS,
          payload: {
            customers: response.data.users,
            maxPage: response.data.maxPage,
          },
        });
      }
    } catch (err) {
      dispatch({ type: CUSTOMERS_LOADED_FAIL });
    }
  };
  // customer context data
  const CustomerContextData = {
    customerState,
    getAllCustomer,
  };

  return (
    <CustomerContext.Provider value={CustomerContextData}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;

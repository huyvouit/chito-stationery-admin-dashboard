import { createContext, useReducer } from "react";
import { RevenueReducer } from "../Reducer/revenue_reducer";
import {
  REVENUE_LOADED_FAIL,
  REVENUE_LOADED_SUCCESS,
} from "../Utils/constants";
import revenueApi from "../Api/revenue_api";

export const RevenueContext = createContext();

const RevenueContextProvider = ({ children }) => {
  // State
  const [revenueState, dispatch] = useReducer(RevenueReducer, {
    revenueWeek: null,
    revenueMonth: null,
    revenueLoading: true,
  });

  const getAllRevenue = async () => {
    try {
      const week = await revenueApi.getAllByWeek();
      const month = await revenueApi.getAllByMonth();

      if (week.data && month.data) {
        dispatch({
          type: REVENUE_LOADED_SUCCESS,
          payload: {
            revenueWeek: week.data.sales,
            revenueMonth: month.data.sales,
          },
        });
      }
    } catch (err) {
      dispatch({ type: REVENUE_LOADED_FAIL });
    }
  };
  // revenue context data
  const RevenueContextData = {
    revenueState,
    getAllRevenue,
  };

  return (
    <RevenueContext.Provider value={RevenueContextData}>
      {children}
    </RevenueContext.Provider>
  );
};

export default RevenueContextProvider;

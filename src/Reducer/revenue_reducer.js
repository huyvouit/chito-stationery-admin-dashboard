import {
  REVENUE_LOADED_FAIL,
  REVENUE_LOADED_SUCCESS,
} from "../Utils/constants";

export const RevenueReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case REVENUE_LOADED_SUCCESS:
      return {
        ...state,
        revenueWeek: payload.revenueWeek,
        revenueLoading: false,
        revenueMonth: payload.revenueMonth,
      };

    case REVENUE_LOADED_FAIL:
      return {
        ...state,
        revenueWeek: null,
        revenueMonth: null,
        revenueLoading: false,
      };

    default:
      return state;
  }
};

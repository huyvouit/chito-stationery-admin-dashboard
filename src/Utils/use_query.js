import { useLocation } from "react-router";

export const useQuery = () => {
  if (useLocation().search !== null) {
    return new useLocation().search;
  } else {
    return {};
  }
};

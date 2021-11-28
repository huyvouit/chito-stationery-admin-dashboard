import { createContext, useState } from "react";
import queryString from "query-string";
import { useQuery } from "../Utils/use_query";

export const QueryContext = createContext();

const QueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState(queryString.parse(useQuery()));

  const handleQuery = (nameQuery) => {
    setQuery(nameQuery);
  };

  //Context data
  const QueryContextData = {
    query,
    handleQuery,
  };

  return (
    <QueryContext.Provider value={QueryContextData}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;

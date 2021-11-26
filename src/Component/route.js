import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../Context/auth_context";
import Sidebar from "./Sidebar/sidebar";

const RoutesSideBar = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <div className="spinner-container">
        <div className="spinner-border text-dark " role="status"></div>;
      </div>
    );

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <div className="primary-body">
              <Sidebar {...props} />
              <div className="layout-content">
                <Component {...rest} {...props} />
              </div>
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RoutesSideBar;

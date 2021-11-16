import React, { useEffect } from "react";
//css
import "./App.css";
//component
import Sidebar from "./Component/sidebar";
import RoutesSideBar from "./Component/route";
//screen

import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="primary-body">
            <Sidebar {...props} />
            <div className="layout__content">
              <div className="layout__content-main">
                <RoutesSideBar />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
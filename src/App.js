import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//css
import "./App.css";
//component
import Sidebar from "./Component/Sidebar/sidebar";
import RouteSidebar from "./Component/route";
import LoginScreen from "./Component/Login/login_screen";
import AuthContextProvider from "./Context/auth_context";
//context
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route path="/login" exact component={LoginScreen} />
          <Route
            render={(props) => (
              <div className="primary-body">
                <Sidebar {...props} />
                <div className="layout-content">
                  <Switch>
                    <RouteSidebar />
                  </Switch>
                </div>
              </div>
            )}
          />
        </Switch>
        <ToastContainer />
      </AuthContextProvider>
    </Router>
  );
}

export default App;

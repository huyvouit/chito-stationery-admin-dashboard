import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//css
import "./App.css";
//component

import AuthScreen from "./Component/Login/auth_screen";
import AuthContextProvider from "./Context/auth_context";
//context
import { ToastContainer } from "react-toastify";
import RoutesSideBar from "./Component/route";
import { DashboardScreen } from "./Screen/Dashboard/dashboard_screen";
import { ProductScreen } from "./Screen/Products/product_screen";
import { CustomerScreen } from "./Screen/Customers/customers_screen";
import { OrdersScreen } from "./Screen/Orders/order_screen";
import { MessageScreen } from "./Screen/Message/message_screen";
import { RevenueScreen } from "./Screen/Revenue/revenue_screen";
import ProductContextProvider from "./Context/product_context";
import QueryContextProvider from "./Context/query_context";
function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <Router>
          <Switch>
            <Route path="/login" exact component={AuthScreen} />
            <RoutesSideBar exact path="/" component={DashboardScreen} />
            <RoutesSideBar exact path="/customers" component={CustomerScreen} />
            <RoutesSideBar exact path="/products" component={ProductScreen} />
            <RoutesSideBar exact path="/orders" component={OrdersScreen} />
            <RoutesSideBar exact path="/messages" component={MessageScreen} />
            <RoutesSideBar exact path="/revenue" component={RevenueScreen} />
          </Switch>
          <ToastContainer />
        </Router>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;

import React from "react";

import { Switch, Route } from "react-router-dom";
import { DashboardScreen } from "../Screen/Dashboard/dashboard_screen";
import { CustomerScreen } from "../Screen/Customers/customers_screen";
import { ProductScreen } from "../Screen/Products/product_screen";
import { OrdersScreen } from "../Screen/Orders/order_screen";
import { ContactScreen } from "../Screen/Contacts/contact_screen";
import { RevenueScreen } from "../Screen/Revenue/revenue_screen";

const RoutesSideBar = () => {
  return (
    <Switch>
      <Route path="/" exact component={DashboardScreen} />
      <Route path="/orders" exact component={OrdersScreen} />
      <Route path="/products" exact component={ProductScreen} />
      <Route path="/customers" exact component={CustomerScreen} />
      <Route path="/contacts" exact component={ContactScreen} />
      <Route path="/revenue" exact component={RevenueScreen} />
    </Switch>
  );
};

export default RoutesSideBar;

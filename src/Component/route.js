import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { DashboardScreen } from "../Screen/Dashboard/dashboard_screen";
import { CustomerScreen } from "../Screen/Customers/customers_screen";
import { ProductScreen } from "../Screen/Products/product_screen";
import { OrdersScreen } from "../Screen/Orders/order_screen";
import { ContactScreen } from "../Screen/Contacts/contact_screen";
import { RevenueScreen } from "../Screen/Revenue/revenue_screen";
import { ErrorScreen } from "./Error/error_screen";
const RoutesSideBar = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) =>
          true ? (
            <>
              <DashboardScreen {...props} />
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        exact
        path="/orders"
        render={(props) =>
          true ? (
            <>
              <OrdersScreen {...props} />
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        exact
        path="/products"
        render={(props) =>
          true ? (
            <>
              <ProductScreen {...props} />
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        exact
        path="/customers"
        render={(props) =>
          true ? (
            <>
              <CustomerScreen {...props} />
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        exact
        path="/messages"
        render={(props) =>
          true ? (
            <>
              <ContactScreen {...props} />
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        exact
        path="/revenue"
        render={(props) =>
          true ? (
            <>
              <RevenueScreen {...props} />
            </>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route path="/*" exact component={ErrorScreen} />
      {/* <Route path="/" exact component={DashboardScreen} />
      <Route path="/orders" exact component={OrdersScreen} />
      <Route path="/products" exact component={ProductScreen} />
      <Route path="/customers" exact component={CustomerScreen} />
      <Route path="/contacts" exact component={ContactScreen} />
      <Route path="/revenue" exact component={RevenueScreen} /> */}
    </Switch>
  );
};

export default RoutesSideBar;

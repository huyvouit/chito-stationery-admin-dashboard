import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./Sidebar/sidebar.css";

// import logo from "../../assets/images/logo.png";

import sidebar_routes from "../Utils/sidebar_route.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <Link to={props.route} className="list-sidebar-link">
      <span className={`sidebar-icon ${active}`}>
        <i className={props.icon}></i>
      </span>
      <span className="sidebar-title">{props.title}</span>
    </Link>
  );
};

const Sidebar = (props) => {
  // let location = useLocation();
  const activeItem = sidebar_routes.findIndex(
    (item) => item.route === props.location.pathname
  );
  console.log(activeItem, props.location.pathname);
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <p>CHITO ADMIN</p>
      </div>
      <ul className="sidebar-body">
        {sidebar_routes.map((item, index) => (
          <li
            key={index}
            className={
              index === activeItem ? "list-sidebar active" : "list-sidebar"
            }
          >
            <SidebarItem
              route={item.route}
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <p>SIGN OUT</p>
      </div>
    </div>
  );
};

export default Sidebar;

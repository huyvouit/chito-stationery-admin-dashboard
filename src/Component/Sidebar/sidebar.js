import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

// import logo from "../../assets/images/logo.png";

import sidebar_routes from "../../Utils/sidebar_route.json";
import { AuthContext } from "../../Context/auth_context";

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
  const { logoutUser } = useContext(AuthContext);
  const activeItem = sidebar_routes.findIndex(
    (item) => item.route === props.location.pathname
  );
  console.log(activeItem, props.location.pathname);
  return (
    <div className="sidebar">
      <div className="sidebar-logo">CHITO STATIONERY</div>
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
      <div className="text-align-center">
        <button className="btn-common secondary-btn" onClick={logoutUser}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

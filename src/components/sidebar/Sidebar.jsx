import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";
import Logo from "../../assets/images/logo.png";
import Routes from "../../assets/Data/sidebar_routes";
import Shares from "../../assets/Data/Shares";

const SidebarItems = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar_item">
      <div className={`sidebar_item-inner ${active}`}>
        <p>{props.icon}</p>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = Routes.findIndex(
    (item) => item.route === props.location.pathname
  );
  const activeShare = Shares.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={Logo} alt="logo" />
        <h2>bluecube</h2>
      </div>
      {Routes.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItems
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
      <h4 className="shares">SHARE</h4>
      {Shares.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItems
            title={item.display_name}
            icon={item.icon}
            active={index === activeShare}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

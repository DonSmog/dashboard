import React from "react";
import "./sidebar.css";

import { NavLink, useRouteMatch } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelopeOpenText,
  faLink,
  faUsers,
  faGifts,
  faHiking,
  faWalking,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";

const SidebarItems = (props) => {
  return (
    <div className="sidebar_item">
      <div className="sidebar_item-inner">
        <p>{props.icon}</p>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const match = useRouteMatch();

  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={Logo} alt="logo" />
        <h2>bluecube</h2>
      </div>

      <NavLink to={"/"} activeClassName={match.url === "/" && "active"}>
        <SidebarItems title="Home" icon={<FontAwesomeIcon icon={faHome} />} />
      </NavLink>
      <NavLink to={"/message"} activeClassName="active">
        <SidebarItems
          title="Message"
          icon={<FontAwesomeIcon icon={faEnvelopeOpenText} />}
        />
      </NavLink>
      <h4 className="shares">SHARE</h4>

      <NavLink to={"/"} activeClassName="">
        <SidebarItems
          title="Ranking"
          icon={<FontAwesomeIcon icon={faSortAmountUp} />}
        />
      </NavLink>
      <NavLink to={"/"} activeClassName="">
        <SidebarItems
          title="Challenge"
          icon={<FontAwesomeIcon icon={faHiking} />}
        />
      </NavLink>
      <NavLink to={"/"} activeClassName="">
        <SidebarItems title="Party" icon={<FontAwesomeIcon icon={faGifts} />} />
      </NavLink>
      <NavLink to={"/"} activeClassName="">
        <SidebarItems
          title="Connect"
          icon={<FontAwesomeIcon icon={faLink} />}
        />
      </NavLink>
      <NavLink to={"/"} activeClassName="">
        <SidebarItems
          title="Parade"
          icon={<FontAwesomeIcon icon={faWalking} />}
        />
      </NavLink>
      <NavLink to={"/"} activeClassName="">
        <SidebarItems title="Group" icon={<FontAwesomeIcon icon={faUsers} />} />
      </NavLink>
    </div>
  );
};

export default Sidebar;

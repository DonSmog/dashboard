import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./topnav.css";
import Dropdown from "../dropdown/Dropdown";
import Notifications from "../../assets/Data/notification.json";
import user_menu from "../../assets/Data/user_menus.json";
import { useAppContext } from "../../provider/AppProvider.context";

const userImage = "https://thispersondoesnotexist.com/image?1637253184145";

const current_user = {
  display_name: "Abigail",
  image: userImage,
};

const showNotifications = (item, index) => (
  <div className="notifications" key={index}>
    <img src={item.image} alt="User" />
    <div className="notification_text">
      <h5>{item.content}</h5>
      <p>{item.time}</p>
    </div>
    <i className={item.icon}></i>
  </div>
);

const renderUser = (user) => (
  <div className="topnav_user">
    <div className="topnav_user_image">
      <img src={user.image} alt="User" />
    </div>
    <div className="topnav_user_name">
      <h5>
        {user.display_name}
        <i className="fas fa-angle-down"></i>
      </h5>
    </div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="user">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const TopNav = () => {
  const { setImages } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    searchTerm +
    "&client_id=" +
    process.env.REACT_APP_UNSPLASH_CLIENT_ID;

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        searchTerm && setImages(data.results);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getData(url);

      setSearchTerm("");
    }
  };

  return (
    <div className="topnav">
      <form onSubmit={handleOnSubmit} className="topnav_search">
        <i className="fas fa-search"></i>
        <input
          onChange={handleOnChange}
          type="text"
          value={searchTerm}
          placeholder="Find Something..."
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="topnav_right">
        <Dropdown
          icon="fas fa-bell"
          badge="5"
          contentData={Notifications}
          renderItems={(item, index) => showNotifications(item, index)}
        />
        <Dropdown
          customToggle={() => renderUser(current_user)}
          contentData={user_menu}
          renderItems={(item, index) => renderUserMenu(item, index)}
        />
        <Dropdown />
      </div>
    </div>
  );
};

export default TopNav;

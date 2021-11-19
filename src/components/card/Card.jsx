import React from "react";

import "./card.css";

const Card = (images) => {
  return (
    <div className="cards">
      <img src={images.urls.small} alt={images.user.name} />
      <div className="details">
        <h3>{images.user.name}</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i>
          {images.user.location}
        </p>
      </div>
      <div className="likes">
        <button className="like">
          <i className="fas fa-heart"></i>
        </button>
        <button className="dislike">
          <i className="fas fa-thumbs-down"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;

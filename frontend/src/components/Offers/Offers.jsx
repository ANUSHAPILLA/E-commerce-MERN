import React from "react";
import "./Offers.css";
import { Link } from "react-router-dom";

import exclusive_image from "../assets/Ecommerce_Frontend_Assets/Assets/exclusive_image.png";
export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>only on best sellers products</p>
        <Link to="/womens">
          <button>check now</button>
        </Link>
      </div>

      <img src={exclusive_image} />
    </div>
  );
};

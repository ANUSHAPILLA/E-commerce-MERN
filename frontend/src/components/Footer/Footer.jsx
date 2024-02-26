import React from "react";
import "./Footer.css";
import instagram_icon from "../assets/Ecommerce_Frontend_Assets/Assets/instagram_icon.png";
import whatsapp from "../assets/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="follow">
        <h1>Follow us@</h1>
        <img src={instagram_icon} />
        <img src={whatsapp} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" />
      </div>
      <div className="sub">
        <input placeholder="Type your mail ID" />
        <button>subscribe</button>
      </div>
      <h3>contact us</h3>
      <h3>careers</h3>
    </div>
  );
};

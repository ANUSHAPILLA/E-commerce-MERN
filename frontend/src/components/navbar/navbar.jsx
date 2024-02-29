import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import logo from "../assets/Ecommerce_Frontend_Assets/Assets/Sparkle.png";
import cart_icon from "../assets/Ecommerce_Frontend_Assets/Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Context";
import { Cart } from "../../pages/Cart";
export const Navbar = () => {
  var { dbcartproducts } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const [loginstate, setloginstate] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      setloginstate(true);
    } else {
      setloginstate(false);
    }
  }, []);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <div class="waviy">
          <span>happy shopping</span>
        </div>
      </div>
      <ul className="menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-cart">
        <p className="log-button">
          {loginstate ? (
            <button
              id="butn"
              onClick={() => {
                localStorage.removeItem("authtoken");
                setloginstate(false);
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button id="butn">Login</button>
            </Link>
          )}
        </p>
        <div className="cart_value">
          <Link to="/cart">
            <img
              onClick={() => {
                <Cart />;
              }}
              className="cart-icon"
              src={cart_icon}
            />
          </Link>

          <p className="cart_val">
            {dbcartproducts && dbcartproducts.length == 0
              ? dbcartproducts.length
              : dbcartproducts.length}
          </p>
        </div>
      </div>
    </div>
  );
};

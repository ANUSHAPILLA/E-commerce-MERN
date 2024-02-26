import React from "react";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import addproduct from "../../assets/Product_Cart.svg";
import listicon from "../../assets/Product_list_icon.svg";
export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Link to={"./addproduct"} style={{ textDecoration: "none" }}>
        <div className={classes.sidebaritem}>
          <img src={addproduct} alt="" />
          <p>add product</p>
        </div>
      </Link>
      <Link to={"./listproduct"} style={{ textDecoration: "none" }}>
        <div className={classes.sidebaritem}>
          <img src={listicon} alt="" />
          <p>product list</p>
        </div>
      </Link>
    </div>
  );
};

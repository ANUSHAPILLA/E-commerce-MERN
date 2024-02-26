import React from "react";
import classes from "./Navbar.module.css";
import navlogo from "../../assets/nav-logo.svg";
import navprofile from "../../assets/nav-profile.svg";
export const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={navlogo} alt="" className={classes.navlogo} />
      <img src={navprofile} alt="" className={classes.navprofile} />
    </div>
  );
};

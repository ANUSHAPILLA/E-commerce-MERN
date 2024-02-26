import React from "react";
import classes from "./Admin.module.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Addproduct } from "../../components/Addproduct/Addproduct";
import Listproduct from "../../components/Listproduct/Listproduct";
const Admin = () => {
  return (
    <div className={classes.admin}>
      <Sidebar />
      <Routes className={classes.route}>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/listproduct" element={<Listproduct />} />
      </Routes>
    </div>
  );
};

export default Admin;

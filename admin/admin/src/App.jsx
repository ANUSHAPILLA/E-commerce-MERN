import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Admin from "./pages/admin/Admin";
import { Addproduct } from "./components/Addproduct/Addproduct";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  );
};

export default App;

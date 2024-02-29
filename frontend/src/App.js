import { Navbar } from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Products } from "./pages/Products";
import { LoginSignUp } from "./pages/LoginSignUp";
import { Cart } from "./pages/Cart";
import banner_kids from "./components/assets/Ecommerce_Frontend_Assets/Assets/banner_kids.png";
import banner_mens from "./components/assets/Ecommerce_Frontend_Assets/Assets/banner_mens.png";
import banner_women from "./components/assets/Ecommerce_Frontend_Assets/Assets/banner_women.png";
import { useContext, useEffect, useMemo } from "react";
import { ShopContext } from "./context/Context";
import { useState } from "react"

function App() {
   const {cartItems}=useContext(ShopContext)
 
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_mens} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kids" />}
          />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

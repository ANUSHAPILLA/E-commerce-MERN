import React, { useContext } from "react";
import "./popular.css";
import data_product from "../assets/Ecommerce_Frontend_Assets/Assets/data";
import { Item } from "../Hero/item/Item";
import { ShopContext } from "../../context/Context";
export const Popular = () => {
  const { allproducts } = useContext(ShopContext);
  let newdata = [];
  allproducts.map((item) => {
    if (item.category == "women") {
      newdata.push(item);
    }
  });
  return (
    <div className="popular">
      <h1>Popular in women</h1>
      <hr />
      <div className="popular-item">
        {newdata.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.newprice}
              oldprice={item.oldprice}
            />
          );
        })}
      </div>
    </div>
  );
};

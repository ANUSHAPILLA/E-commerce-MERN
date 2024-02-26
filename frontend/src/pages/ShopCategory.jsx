import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import drop from "../components/assets/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png";
import { Item } from "../components/Hero/item/Item";
import "./CSS/shopcategory.css"
import { Footer } from "../components/Footer/Footer";

export const ShopCategory = (props) => {
  const {allproducts} = useContext(ShopContext);
  return (
    <div className="shopcategory_sort">
      <img src={props.banner}></img>
      <div className="list_num">
        <img src={drop} />
        <div className="sorted_items">
          {allproducts.map((item, i) => {
            if (props.category == item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div>
        <button className="explore_more">Explore More</button>
      </div>
      <Footer />
    </div>
  );
};

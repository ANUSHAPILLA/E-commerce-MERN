import React from "react";
import "./Newcollections.css";
import new_collections from "../assets/Ecommerce_Frontend_Assets/Assets/new_collections.js";
import { Item } from "../Hero/item/Item";

export const Newcollections = () => {
  return (
    <div className="newcollections">
      <p>New Collections</p>
      <div className="collections">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldprice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

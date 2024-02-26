import React, { useContext,useState } from "react";
import "./CSS/Products.css";
import { useParams } from "react-router-dom";
import all_product from "../components/assets/Ecommerce_Frontend_Assets/Assets/all_product";
import { ShopContext } from "../context/Context";
import { Footer } from "../components/Footer/Footer";

export const Products = () => {
  const [buttonact, setButtonAct] = useState(true);

  const data = useParams();
const { AddtoCart ,allproducts} = useContext(ShopContext);
  return (
    <div>
      {allproducts.map((item) => {
        if (item.id == data.productId) {
          return (
            <div className="product" key={data.productId}>
              <img src={item.image} />
              <div>
                <p style={{ textDecoration: "line-through" }}>
                  {`OLD PRICE:${item.oldprice}$`}
                </p>
                <p>{`NEW PRICE:${item.newprice}$`}</p>
              </div>
              {buttonact && (
                <button
                  onClick={() => {
                    AddtoCart(item);
                    setButtonAct(false);
                  }}
                  style={{
                    padding: "25px",
                    borderRadius: "25px",
                    fontSize: "120%",
                    marginTop: "50px",
                  }}
                >
                  ADD TO CART
                </button>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
      <Footer />
    </div>
  );
};

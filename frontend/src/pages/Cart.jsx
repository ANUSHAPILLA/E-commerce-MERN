import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Context";
import "./CSS/cart_support.css";
import { Footer } from "../components/Footer/Footer";
import instagram_icon from "../components/assets/Ecommerce_Frontend_Assets/Assets/instagram_icon.png";
import whatsapp from "../components/assets/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png";
import classes from "./CSS/Loginsignup.module.css";

export const Cart = (props) => {
  const {
    cartItems,
    removequantityFromCart,
    AddtoCart,
    AddquantitytoCart,
    removeFromCart,
    dbcartproducts
  } = useContext(ShopContext);
  console.log(cartItems)
  const [totalCost, setTotalcost] = useState(4);
  var sum=0
  
 useEffect(() => {
    var tct = [];  
   dbcartproducts.map(item=>{
      var cs=item.quantity*item.newprice
      tct.push(cs)
    }) 
    for(let i=0;i<=tct.length-1;i++){
      sum += tct[i]
    }
     
    setTotalcost(()=>{return sum})
  }, [dbcartproducts]);
 
  return (
    <div id="maincontainer">
      <div id="container">
        <div id="gri">
          <div>
            <p>Item Name</p>
          </div>
          <div>
            <p>Image</p>
          </div>
          <div>
            <p>new Price</p>
          </div>
          <div>
            <p>Total quantity</p>
          </div>
          <div>
            <p>Total Price</p>
          </div>
          <div>
            <p>Add or remove</p>
          </div>
        </div>
        <div>
          {dbcartproducts.length==0 ? <h1 style={{textAlign:"center"}}>No items in your cart</h1> : dbcartproducts.map((item, index) => {
            return (
              <div id="gri">
                <p className="item1">{item.name}</p>
                <img className="item1" src={item.image} />
                <p className="item1">{item.newprice}</p>
                <p className="item1">{item.quantity}</p>
                <p className="item1">{item.newprice * item.quantity}</p>
                <p className="item1">
                  <button
                    onClick={() => {
                      AddquantitytoCart(item);
                    }}
                  >
                    +
                  </button>
                  <span> </span>
                  <button
                    onClick={() => {
                      item.quantity == 1
                        ? removeFromCart(item)
                        : removequantityFromCart(item);
                    }}
                  >
                    -
                  </button>
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <div id="sideContainer">
        <div>
          <h1 style={{ textAlign: "center", marginTop: "30%" }}>
            Total Price: {totalCost}
          </h1>
          <button
            style={{
              width: "20vmax",
              backgroundColor: "#313d52",
              color: "white",
              alignContent: "center",
              marginTop: "5%",
              marginLeft: "20%",
              height:"3vmax",
              fontSize:"1.5vmax",
              cursor:"pointer"
            }}
          >
            Place your order
          </button>
        </div>
      </div>
      {dbcartproducts.length==0 && <div className={classes.footer}>
        <div className={classes.follow}>
          <h1>Follow us@</h1>
          <img src={instagram_icon} />
          <img src={whatsapp} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" />
        </div>
        <div className={classes.sub}>
          <input placeholder="Type your mail ID" />
          <button>subscribe</button>
        </div>
        <h3>contact us</h3>
        <h3>careers</h3>
      </div>}
    </div>
  
  );
};

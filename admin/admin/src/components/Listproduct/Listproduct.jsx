import React, { useDebugValue, useEffect, useState } from "react";
import classes from "./Listproduct.module.css";
const Listproduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:4000/allproducts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const removeHandler = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    await fetchProducts();
  };
  return (
    <div className={classes.maincontainer}>
      <p style={{ fontSize: "3vmax" }}>Products List</p>
      <div className={classes.headercontainer}>
        <div>
          <p>Product Image</p>
        </div>
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>New Price</p>
        </div>
        <div>
          <p>Old Price</p>
        </div>
        <div>
          <p>Category</p>
        </div>
        <div>
          <p>Remove</p>
        </div>
      </div>
      <div className={classes.mapcontainer}>
        {products.map((item, index) => {
          return (
            <div key={index} className={classes.headercontainer}>
              <div>
                {" "}
                <img src={item.image} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
                <p>${item.newprice}</p>
              </div>
              <div>
                {" "}
                <p>${item.oldprice}</p>
              </div>
              <div>
                {" "}
                <p>{item.category}</p>
              </div>
              <div>
                {" "}
                <button
                  onClick={() => {
                    removeHandler(item.id);
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listproduct;

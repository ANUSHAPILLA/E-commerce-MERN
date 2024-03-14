import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const ShopContext = createContext(null);
const ShopcontextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [allproducts, setAllproducts] = useState([]);

  useEffect(async () => {
    await fetch("https://e-commerce-mern-alpha.vercel.app/allproducts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setAllproducts(data.data);
      });
  }, []);

  const AddtoCart = (itemId) => {
    setCartItems((prev) => {
      itemId["quantity"] = 1;
      var add_data = [...prev, itemId];
      return add_data;
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      var data = [...prev];
      var newdata = data.filter((item) => {
        return item.id != itemId.id;
      });
      console.log(newdata);
      return newdata;
    });
  };
  const AddquantitytoCart = (itemId) => {
    itemId["quantity"] = itemId.quantity + 1;
    setCartItems((prev) => {
      return [...prev];
    });
  };
  const removequantityFromCart = (itemId) => {
    itemId["quantity"] = itemId.quantity - 1;
    setCartItems((prev) => {
      return [...prev];
    });
  };

  const data = {
    allproducts,
    AddquantitytoCart,
    AddtoCart,
    removeFromCart,
    cartItems,
    removequantityFromCart,
  };
  return (
    <ShopContext.Provider value={data}>{props.children}</ShopContext.Provider>
  );
};
export default ShopcontextProvider;

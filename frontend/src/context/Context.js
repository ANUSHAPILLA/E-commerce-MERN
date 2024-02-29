import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

export const ShopContext = createContext(null);

const ShopcontextProvider = (props) => {
  const [allproducts, setAllproducts] = useState([]);
  const [dbcartproducts, setDbcartproducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:4000/fetchcartproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth: localStorage.getItem("authtoken") }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDbcartproducts(data.data);
        console.log(dbcartproducts)
      });
  };

  useMemo(async () => {
    fetchProducts();
  }, [cartItems]);

  useEffect(async () => {
    await fetch("http://localhost:4000/allproducts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data.data);
      });
  }, []);

  const AddtoCart = async (itemId) => {
    
    setCartItems( (pre) => {
      itemId["quantity"] = 1;
      var add_data = [...pre, itemId];
      console.log(add_data)
      return add_data
    });
     cartItems.length>0 ?
      await fetch("http://localhost:4000/addcartproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth: localStorage.getItem("authtoken"),
          cart: cartItems,
        }),
      })
        .then((res) => res.json())
        .then((data) => {}): console.log("nothing in cart")
        
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
    dbcartproducts,
  };
  return (
    <ShopContext.Provider value={data}>{props.children}</ShopContext.Provider>
  );
};
export default ShopcontextProvider;

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
   
  };

  useEffect(async () => {
    await fetch("https://e-commerce-mern-be-three.vercel.app/allproducts", {
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
  useMemo(async()=>{
     await fetch(
       "https://e-commerce-mern-be-three.vercel.app/fetchcartproduct",
       {
         method: "POST",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ auth: localStorage.getItem("authtoken") }),
       }
     )
       .then((res) => res.json())
       .then((data) => {
         setDbcartproducts(data.data);
       });
  },[cartItems])
console.log(dbcartproducts)
const AddtoCart = async (itemId) => {
    
    setCartItems(async () => {
      itemId["quantity"] = 1;
      var add_data = [itemId];
      console.log(add_data)
    
      await fetch(
        "https://e-commerce-mern-be-three.vercel.app/addcartproduct",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth: localStorage.getItem("authtoken"),
            cart: add_data,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {});
      return ""
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
    dbcartproducts,
  };
  return (
    <ShopContext.Provider value={data}>{props.children}</ShopContext.Provider>
  );
};
export default ShopcontextProvider;

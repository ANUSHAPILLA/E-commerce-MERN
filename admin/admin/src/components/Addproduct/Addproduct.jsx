import React, { useState } from "react";
import classes from "./Addproduct.module.css";
import upload from "../../assets/upload_cloud_icon.svg";
//Adding the product to mongoose
export const Addproduct = () => {
  const [input, setInput] = useState({});
  const [image, setImage] = useState(false);
  let responseData;
  let formdata;
  formdata = new FormData();
  const imagehandler = async (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const uploadHandler = async () => {
    formdata.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formdata,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        responseData = data;
        console.log(responseData);
        if (responseData.success) {
          setInput((prev) => {
            return { ...prev, ["image"]: responseData.image_url };
          });
        }
      });
  };
  const submitHandler = async () => {
    let datat = JSON.stringify(input);
    console.log(datat);
    await fetch("http://localhost:4000/addproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: datat,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        responseData = data;
        console.log(responseData);
      });
  };

  return (
    <div className={classes.addproduct}>
      <p>Add products</p>
      <div className={classes.inputcontainer}>
        <input
          placeholder="type your product name"
          value={input.name}
          name="name"
          onChange={changeHandler}
        />
        <input
          placeholder="type new price"
          value={input.newprice}
          name="newprice"
          onChange={changeHandler}
        />
        <input
          placeholder="type old price"
          name="oldprice"
          value={input.oldprice}
          onChange={changeHandler}
        />

        <select value={input.category} name="category" onChange={changeHandler}>
          <option value="men">men</option>
          <option value="kids">kids</option>
          <option value="women">women</option>
        </select>
        <label htmlFor="image">
          <img src={image ? URL.createObjectURL(image) : upload} alt="" />
        </label>

        <input type="file" name="image" onChange={imagehandler} />
        <button
          onClick={uploadHandler}
          style={{ backgroundColor: "pink", width: "15vmax" }}
        >
          add
        </button>
        <input
          style={{ height: "5vmax", width: "15vmax", backgroundColor: "pink" }}
          type="submit"
          onClick={submitHandler}
        />
      </div>
    </div>
  );
};

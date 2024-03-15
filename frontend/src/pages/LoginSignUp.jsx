import React from "react";
import { Footer } from "../components/Footer/Footer";
import classes from "./CSS/Loginsignup.module.css";
import instagram_icon from "../components/assets/Ecommerce_Frontend_Assets/Assets/instagram_icon.png";
import whatsapp from "../components/assets/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import github from "../components/assets/Ecommerce_Frontend_Assets/Assets/logo-github.png";
import { Link } from "react-router-dom";

export const LoginSignUp = () => {
  const [inputs, setInputs] = useState({});
  const [signup_state, setignupstate] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlelogin = async () => {
    let responsedata;
    await fetch("https://e-commerce-mern-alpha.vercel.app/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        responsedata = data;
        if (responsedata.success) {
          localStorage.setItem("authtoken", responsedata.token);
          window.location.replace("/");
        }
      });
    setInputs({});
  };
  const handlesignup = async () => {
    await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    setInputs({});
  };

  return (
    <div id="maincon">
      <div id="conatiner">
        <h2>Sign In</h2>
        <input
          placeholder="Enter your Email"
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          onClick={() => {
            setignupstate(false);
          }}
        />
        <input
          placeholder="Enter your password"
          type="text"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          onClick={() => {
            setignupstate(false);
          }}
        />
        <button
          onClick={() => {
            handlelogin();
          }}
          style={{
            width: "45%",
            color: "white",
            backgroundColor: "#313d52",
            height: "3vmax",
            borderRadius: "10px",
            fontSize: "1.5vmax",
          }}
        >
          continue
        </button>
        <button
          onClick={() => {
            setignupstate(true);
          }}
          style={{
            width: "45%",
            color: "white",
            backgroundColor: "#313d52",
            height: "3vmax",
            borderRadius: "10px",
            fontSize: "1.5vmax",
          }}
        >
          create an Account
        </button>
      </div>

      {signup_state && (
        <form id="conatiner">
          <input
            placeholder="Enter your User Name"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          <input
            placeholder="Enter your password"
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <input
            placeholder="Enter your Email"
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              handlesignup();
            }}
            style={{
              width: "45%",
              color: "white",
              backgroundColor: "#313d52",
              height: "3vmax",
              borderRadius: "10px",
              fontSize: "1.5vmax",
            }}
          >
            SIGN UP
          </button>
          <p>or</p>
          <div id="google_in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="38"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            <div> sign up with Google</div>
          </div>
        </form>
      )}

      <Footer />
    </div>
  );
};
<ion-icon name="logo-github"></ion-icon>;

import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

/**
 * Navbar component displays a navigation bar with menu options and a login section.
 */
const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar flex justify-around items-center poppins-regular ">
      <div className="nav-logo flex justify-center items-center gap-2">
        <img src={logo} alt="" />
        <p>shopper</p>
      </div>

      <ul className="nav-menu flex gap-[100px] justify-center items-center ">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className={menu === "shop" ? "menu-clicked" : "menu-not-clicked"}
        >
          Shop
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          className={menu === "men" ? "menu-clicked" : "menu-not-clicked"}
        >
          Men
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          className={menu === "women" ? "menu-clicked" : "menu-not-clicked"}
        >
          Women
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className={menu === "kids" ? "menu-clicked" : "menu-not-clicked"}
        >
          Kids
        </li>
      </ul>
      <div className="nav-login-card flex justify-center items-center gap-3 ">
        <button className="nav-login-btn" type="button">
          Login
        </button>
        <span className="material-symbols-outlined text-[40px]">
          shopping_cart
        </span>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;

import React from "react";
import "../Header/header.scss";
import logo from "../../assets/images/Logo.png";
import profile from "../../assets/images/profile-icon.png";
import basket from "../../assets/images/basket-icon.png";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img className="header__logo" src={logo} alt="" />
      </div>
      <div className="header__icons">
        <div>
          <img className="header__icon" src={profile} alt="" />
        </div>
        <div>
          <img className="header__icon" src={basket} alt="" />
        </div>
      </div>
    </div>
  );
}

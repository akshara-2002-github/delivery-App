import React from "react";
import "./index.css";

const Header = () => {
  return (


    
    <div className="header">
      <div className="header__star">
        <div>🌟</div>
        <p>
          {" "}
          Get 5% Off your first order, <a>Promo: ORDER5</a>
        </p>
      </div>
      <div className="header__location">
        <div></div>
        <p>Regent Street, A4, A4201, London</p>
        <a>Change Location</a>
      </div>
      <div className="header__cart">
        <div className="cart">
          <div className="cart"></div>
          <p>My Cart</p>
        </div>
        <div className="box"></div>
        <div className="header__cart__button"></div>
      </div>
    </div>


  );
};
export default Header;

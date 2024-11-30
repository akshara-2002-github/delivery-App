import React from "react";
import { NavLink, Link } from "react-router-dom";
import './index.css'

const RoutingLinks = () => (
  <nav className="routingLinks">
    {/* <NavLink to="/Login"> Login</NavLink>
    <NavLink to="/SignUp">SignUp</NavLink> */}
    <NavLink to="/Home">Home</NavLink>

    <NavLink to="/SpecialOffers">Special Offers</NavLink>

    <NavLink to="/Resturants">Resturants</NavLink>

    <NavLink to="/TrackOrder">Track Order</NavLink>

    {/* <div>
      <button>Login/SignUp</button>
    </div> */}
  </nav>
);

export default RoutingLinks;

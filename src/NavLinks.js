import React from 'react';
import { Link } from 'react-router-dom';



const NavLinks = () => (
  <nav>
    <Link to="/Login"> Login</Link>
    <Link to="/SignUp">SignUp</Link>
    <Link to="/Home">Home</Link>
  </nav>
);

export default NavLinks;





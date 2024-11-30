import React from 'react';
import './index.css'
import { NavLink } from 'react-router';
import RoutingLinks from '../RoutingLinks';

const HeaderBar= ()=> {
  return (
    <div className='headerBar'>
      <div className='headerBar__logo'></div>
      <div>
        <RoutingLinks/>
      </div>
      <button>
        <div>

        </div>
        <p>Login/Signup</p>
      </button>
    </div>
  )
}
export default HeaderBar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <h4>
        <i className='fas fa-hamburger' /> Search Recipes App
      </h4>
      <ul class='nav-menu'>
        <li>
          <Link to='/' style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to='/about' style={linkStyle}>About</Link>
        </li>
      </ul>
    </div>
  );

};

const linkStyle={
  textDecoration: 'none',
  color: 'white'
}



export default Navbar;

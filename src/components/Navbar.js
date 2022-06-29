import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <h4>
          <Link to='/' style={linkStyle}> <i className='fas fa-hamburger' /> Search Recipes App</Link>
      </h4>
      <ul className='nav-menu'>
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

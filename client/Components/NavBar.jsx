import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      {/* <h1>nav bar baybee</h1> */}
      <div className='links'><Link to='/collection'>Collection</Link></div>
      <div className='links'><Link to='/inspiration'>Inspiration</Link></div>
      <div className='links'><Link to='/education'>Education</Link></div>
    </nav>
  )
};

export default NavBar;
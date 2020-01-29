import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyleIcon from '../StyleIcon/StyleIcon';
import './Nav.css';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleMenuFunc = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav role="navigation">
      <img src="https://imgur.com/eurVpGU.jpg" alt="logo" className="logo" />
      <div id="toggleMenu">
        <input type="checkbox" checked={toggleMenu} onChange={toggleMenuFunc}/>
        {StyleIcon({
          style: `${toggleMenu ? 'close' : 'hamburger'}`
        })}
        <ul id="navMenu">
          <Link to="/" onClick={toggleMenuFunc}>
            <li 
              className={!window.location.href.includes('projects') && !window.location.href.includes('contact') ? 'active' : 'inactive'}>
              About
            </li>
          </Link>
          <Link to="/projects" onClick={toggleMenuFunc}>
            <li 
              className={window.location.href.includes('projects') ? 'active' : 'inactive'}>
              Projects
            </li>
          </Link>
          <Link to="/contact" onClick={toggleMenuFunc}>
            <li 
              className={window.location.href.includes('contact') ? 'active' : 'inactive'}>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
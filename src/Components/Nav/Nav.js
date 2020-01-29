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
      <div id="toggleMenu">
        <input type="checkbox" checked={toggleMenu} onChange={toggleMenuFunc}/>
        {StyleIcon({
          style: `${toggleMenu ? 'close' : 'hamburger'}`
        })}
        <ul id="navMenu">
          <Link to="/about" onClick={toggleMenuFunc}>
            <li 
              className={window.location.href.includes('about') ? 'active' : undefined}>
              About
            </li>
          </Link>
          <Link to="/projects" onClick={toggleMenuFunc}>
            <li 
              className={window.location.href.includes('projects') ? 'active' : undefined}>
              Projects
            </li>
          </Link>
          <Link to="/contact" onClick={toggleMenuFunc}>
            <li 
              className={window.location.href.includes('contact') ? 'active' : undefined}>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
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
          <Link to="/" onClick={toggleMenuFunc}><li>About</li></Link>
          <Link to="/projects" onClick={toggleMenuFunc}><li>Projects</li></Link>
          <Link to="/contact" onClick={toggleMenuFunc}><li>Contact</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React from 'react';

import Logo from 'icons/Logo';

const NavBar: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <button className="hamburger-btn">
        <div className="hamburger" aria-label="Menu">
          <div className="hamburger__line" />
          <div className="hamburger__line" />
          <div className="hamburger__line" />
        </div>
      </button>
      <nav>
        <ul>
          <li className="nav-link">
            <a href="#about">About</a>
          </li>
          <li className="nav-link">
            <a href="#experience">Experience</a>
          </li>
          <li className="nav-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#">Resume</a>
      </nav>
    </header>
  );
};

export default NavBar;

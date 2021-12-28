/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Logo from 'icons/Logo';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the blur class on body based on active-ness of nav-link
  useEffect(() => {
    document.body.classList.toggle('blur', menuOpen);
  }, [menuOpen]);

  const navActiveClass = {
    active: menuOpen,
  };

  return (
    <header>
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>

      <div className="header__header-menu">
        <button
          className={clsx('header-menu__hamburger-btn', navActiveClass)}
          aria-label="Menu button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header-menu__hamburger-btn-line standard-transition" />
          <span className="header-menu__hamburger-btn-line standard-transition" />
          <span className="header-menu__hamburger-btn-line standard-transition" />
        </button>
        <aside
          className={clsx(
            'header-menu__side-bar',
            navActiveClass,
            'standard-transition'
          )}
          tabIndex={1}
        >
          <nav>
            <ol
              className={clsx({
                't-600': menuOpen,
              })}
            >
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
            </ol>
            <a href="#" className="header-menu__resume">
              Resume
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default NavBar;

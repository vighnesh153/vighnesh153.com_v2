/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Logo from 'icons/Logo';
import config from '../config';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the blur class on body based on active-ness of nav-link
  useEffect(() => {
    document.body.classList.toggle('blur', menuOpen);
  }, [menuOpen]);

  const navActiveClass = {
    active: menuOpen,
  };

  const hamburgerLine = (
    <span className="header-menu__hamburger-btn-line standard-transition" />
  );

  const toggleMenu = (to?: boolean) => () => {
    setMenuOpen(to === undefined ? (prev) => !prev : to);
  };

  return (
    <header>
      <Link href="/">
        <a className="header-menu__logo focus-dashed-outline">
          <Logo />
        </a>
      </Link>
      <div className="header__header-menu">
        <button
          className={clsx(
            'header-menu__hamburger-btn',
            navActiveClass,
            'focus-dashed-outline'
          )}
          aria-label="Menu button"
          onClick={toggleMenu()}
        >
          {hamburgerLine}
          {hamburgerLine}
          {hamburgerLine}
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
            <ol className={clsx({ 't-600': menuOpen })}>
              {config.navLinks.map(({ name, url }) => (
                <li className="nav-link" key={name}>
                  <a href={url} onClick={toggleMenu(false)}>
                    {name}
                  </a>
                </li>
              ))}
            </ol>
            <a href={config.resume.url} className="header-menu__resume">
              {config.resume.name}
            </a>
          </nav>
        </aside>

        <div
          className={clsx(
            'header-menu__backdrop',
            navActiveClass,
            'standard-transition'
          )}
          role="presentation"
          onClick={toggleMenu(false)}
        />
      </div>
    </header>
  );
};

export default NavBar;

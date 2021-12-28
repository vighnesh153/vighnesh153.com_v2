/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Logo from 'icons/Logo';
import config from '../config';

const NavBar__Hamburger = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the blur class on body based on active-ness of nav-link
  useEffect(() => {
    document.body.classList.toggle('blur', menuOpen);
  }, [menuOpen]);

  const navActiveClass = {
    active: menuOpen,
  };

  const hamburgerLine = (
    <span className="header__hamburger-menu__hamburger-btn-line standard-transition" />
  );

  const toggleMenu = (to?: boolean) => () => {
    setMenuOpen(to === undefined ? (prev) => !prev : to);
  };

  return (
    <div className="header__hamburger-menu only-below-768">
      <button
        className={clsx(
          'header__hamburger-menu__hamburger-btn',
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
          <ol>
            {config.navLinks.map(({ name, url }) => (
              <li className="nav-link" key={name}>
                <a
                  className="fast-transition"
                  href={url}
                  onClick={toggleMenu(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ol>
          <a href={config.resume.url} className="header__resume awesome-link">
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
  );
};

const NavBar__Horizontal = (): JSX.Element => {
  return (
    <nav className="header__horizontal-menu at-and-above768">
      <ol>
        {config.navLinks.map(({ name, url }) => (
          <li className="nav-link" key={name}>
            <a href={url} className="fast-transition">
              {name}
            </a>
          </li>
        ))}
      </ol>
      <a href={config.resume.url} className="header__resume awesome-link">
        {config.resume.name}
      </a>
    </nav>
  );
};

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a className="header-menu__logo focus-dashed-outline">
            <Logo />
          </a>
        </Link>
        <NavBar__Hamburger />
        <NavBar__Horizontal />
      </nav>
    </header>
  );
};

export default NavBar;

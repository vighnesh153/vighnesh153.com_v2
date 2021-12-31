/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Logo from 'icons/Logo';
import config from 'config';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { KeyCodes } from '../util';

const NavBar__Hamburger = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const removeTabFocus = {
    'aria-hidden': true,
    tabIndex: -1,
  };

  const menuFocusables = useRef<HTMLElement[] | null>(null);
  const firstFocusableEl = useRef<HTMLElement | null>(null);
  const lastFocusableEl = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(
    (withFocus?: boolean) => {
      if (menuOpen && withFocus) {
        buttonRef.current?.focus();
      }
      setMenuOpen(false);
    },
    [menuOpen]
  );

  const handleBackwardTab = useCallback(
    (e: KeyboardEvent) => {
      if (menuOpen && document.activeElement === firstFocusableEl.current) {
        e.preventDefault();
        lastFocusableEl.current?.focus();
      }
    },
    [menuOpen]
  );

  const handleForwardTab = useCallback(
    (e: KeyboardEvent) => {
      if (menuOpen && document.activeElement === lastFocusableEl.current) {
        e.preventDefault();
        firstFocusableEl.current?.focus();
      }
    },
    [menuOpen]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case KeyCodes.Escape:
        case KeyCodes.EscapeIE11: {
          closeMenu(true);
          break;
        }

        // Tab key press
        case KeyCodes.Tab: {
          console.log('here');

          if (menuFocusables.current?.length === 1) {
            e.preventDefault();
            break;
          }

          console.log(menuFocusables.current);

          // Shift + Tab key press
          if (e.shiftKey) {
            handleBackwardTab(e);
          }
          // Only Tab key press
          else {
            handleForwardTab(e);
          }

          break;
        }

        default: {
          break;
        }
      }
    },
    [handleBackwardTab, handleForwardTab, closeMenu]
  );

  const setFocusables = () => {
    menuFocusables.current = [
      ...(buttonRef.current ? [buttonRef.current] : []),
      ...Array.from(navRef.current?.querySelectorAll('a') || []),
    ];
    firstFocusableEl.current = menuFocusables.current[0];
    lastFocusableEl.current =
      menuFocusables.current[menuFocusables.current.length - 1];
  };

  // store the focusable elements in refs for future use
  useEffect(setFocusables, [width]);

  // Register the key-down listeners
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  // Toggle the blur class on body based on active-ness of nav-link
  useEffect(() => {
    document.body.classList.toggle('blur', menuOpen);
  }, [menuOpen]);

  // If we resize the window to be more than 768, we should
  // close the open navigation menu.
  useEffect(() => {
    if (width >= 768) {
      closeMenu(false);
    }
  }, [width, closeMenu]);

  const navActiveClass = {
    active: menuOpen,
  };

  const hamburgerLine = (
    <span
      className={clsx(
        'header__hamburger-menu__hamburger-btn-line',
        'standard-transition'
      )}
    />
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
        ref={buttonRef}
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
      >
        <nav ref={navRef}>
          <ol>
            {config.navLinks.map(({ name, url }) => (
              <li className="nav-link" key={name}>
                <a
                  className="fast-transition"
                  href={url}
                  onClick={toggleMenu(false)}
                  {...(menuOpen ? {} : removeTabFocus)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href={config.resume.url}
            className="header__resume awesome-link"
            {...(menuOpen ? {} : removeTabFocus)}
          >
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

import { useState, useEffect, FunctionComponent } from 'react';
import logo from '../public/Neil-Johnson-Logo.png';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

interface NavbarOptions {
  rootMargin: string,
}

const Navbar: FunctionComponent = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    const navbar: Element = document.getElementsByClassName(styles.navbar)[0];
    const navButton: Element = document.getElementsByClassName(styles.navButton)[0];
    const heroContainer: Element | null = document.querySelector(".hero-container");
    const navbarOptions: NavbarOptions = {
      rootMargin: `-85% 0px 0px 0px`
    };

    const navbarObserver = new IntersectionObserver((entires) => {
      entires.forEach((entry) => {
        if (!entry.isIntersecting) {
          navbar.classList.add(styles.navbarScrolled);
          navButton.classList.add(styles.navButtonScrolled);
        } else {
          navbar.classList.remove(styles.navbarScrolled);
          navButton.classList.remove(styles.navButtonScrolled);
        }
      })
    }, navbarOptions)

    if (heroContainer) {
      navbarObserver.observe(heroContainer);
    }
  }, [])

  const handleHamburgerClick = (): void => {
    menuActive ? setMenuActive(false) : setMenuActive(true);
    const navbar: Element = document.getElementsByClassName(styles.navbar)[0];
    const navbarLinks: Element = document.getElementsByClassName(styles.links)[0];
    navbarLinks.classList.toggle(styles.active);
    navbar.classList.toggle(styles.activeNavbar);
  }

  const handleLinkClick = (): void => {
    const navbar: Element = document.getElementsByClassName(styles.navbar)[0];
    const navbarLinks: Element = document.getElementsByClassName(styles.links)[0];
    navbarLinks.classList.remove(styles.active);
    navbar.classList.remove(styles.active);
    setMenuActive(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => handleLinkClick()}>
        <a href="#">
          <Image
            src={logo}
            alt="Neil Johnson Logo"
            width={69}
            height={40}
          />
        </a>
      </div>
      <div className={styles.hamburgerMenu} onClick={() => handleHamburgerClick()}>
        {menuActive ? <FontAwesomeIcon icon={faXmark} size="2x" /> : <FontAwesomeIcon icon={faBars} size="2x" />}
      </div>
      <div className={styles.links}>
        <ul>
          <li onClick={() => handleLinkClick()}><a href="#work">Work</a></li>
          <li onClick={() => handleLinkClick()}><a href="#about-me">About</a></li>
          <li onClick={() => handleLinkClick()}><a href="/Neil-Johnson-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
        <a className={styles.navButton} href="#contact" onClick={() => handleLinkClick()}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
import { useState, useEffect } from 'react';
import logo from '../public/Neil-Johnson-Logo.png';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    const navbar: any = document.getElementsByClassName(styles.navbar)[0];
    const navButton: any = document.getElementsByClassName(styles.navButton)[0];
    const heroContainer: any = document.querySelector(".hero-container");
    const navbarOptions = {
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

    navbarObserver.observe(heroContainer);
  }, [])

  const handleHamburgerClick = () => {
    menuActive ? setMenuActive(false) : setMenuActive(true);
    const navbar = document.getElementsByClassName(styles.navbar)[0];
    const navbarLinks = document.getElementsByClassName(styles.links)[0];
    navbarLinks.classList.toggle(styles.active);
    navbar.classList.toggle(styles.activeNavbar);
  }

  const handleLinkClick = () => {
    const navbar = document.getElementsByClassName(styles.navbar)[0];
    const navbarLinks = document.getElementsByClassName(styles.links)[0];
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
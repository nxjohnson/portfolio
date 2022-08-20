import { useState } from 'react';
import logo from '../public/Neil-Johnson-Logo.png';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import React from 'react';

const Navbar = () => {
const handleHamburgerClick = () => {
    const navbarLinks = document.getElementsByClassName(styles.links)[0];
    navbarLinks.classList.toggle(styles.active);
  }

  const handleLinkClick = () => {
    const navbarLinks = document.getElementsByClassName(styles.links)[0];
    navbarLinks.classList.remove(styles.active);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => handleLinkClick()}>
        <a href="#home">
          <Image
            src={logo}
            alt="Neil Johnson Logo"
            width={69}
            height={40}
          />
        </a>
      </div>
      <div className={styles.hamburgerMenu} onClick={() => handleHamburgerClick()}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div className={styles.links}>
        <ul>
          <li onClick={() => handleLinkClick()}><a href="#work">Work</a></li>
          <li onClick={() => handleLinkClick()}><a href="#about-me">About</a></li>
          <li onClick={() => handleLinkClick()}><a href="/Neil-Johnson-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li onClick={() => handleLinkClick()}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
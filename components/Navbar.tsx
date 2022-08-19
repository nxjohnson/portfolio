import logo from '../public/Neil-Johnson-Logo.png';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        src={logo}
        alt="Neil Johnson Logo"
        width={69}
        height={40}
      />
      <div className={styles.links}>
        <a href="#work">Work</a>
        <a href="#about-me">About</a>
        <a href="/Neil-Johnson-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
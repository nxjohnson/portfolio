import logo from '../public/Neil-Johnson-Logo.png';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image
        src={logo}
        alt="Neil Johnson Logo"
        width={69}
        height={40}
      />
      <div className={styles.links}>
        <a>Work</a>
        <a>About</a>
        <a>Resume</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
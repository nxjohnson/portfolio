import Image from 'next/image'
import hero from "../public/neil-johnson-hero.jpg";
import styles from '../styles/Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FunctionComponent } from 'react';

const Hero: FunctionComponent = () => {
  return (
    <div id="home" className={styles.hero}>
      <Image
        src={hero}
        alt="Forest waterfall"
        layout="fill"
        objectFit="cover"
        quality={50}
        style={{opacity: '0.6'}}
        priority
      />
      <div className={`${styles.heroContainer} hero-container`}>
        <div className={styles.heroContent}>
        <h1 className={`${styles.intro} fade-in`}>Hi. I&apos;m Neil.<br />A Full Stack Engineer.</h1>
          <div className="fade-down">
            <a href="https://www.linkedin.com/in/johnson-neil/" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'>
              <FontAwesomeIcon className={styles.heroIcon} icon={faLinkedinIn} size="2x" />
            </a>
            <a href="https://github.com/nxjohnson" target="_blank" rel="noopener noreferrer" aria-label='Github'>
              <FontAwesomeIcon className={styles.heroIcon} icon={faGithub} size="2x" />
            </a>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
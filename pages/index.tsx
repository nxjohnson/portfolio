import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Work from '../components/Work';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import Image from 'next/image'
import hero from "../public/neil-johnson-hero.jpg";
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Neil Johnson</title>
        <meta name="description" content="Neil Johnson's Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Navbar />
      <main className='main'>
        <div id="home" className={styles.hero}>
          <Image
            src={hero}
            alt="sunset"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.intro}>Hi. I&apos;m Neil.<br />A Full Stack Engineer.</h1>
              <div>
                <a href="https://www.linkedin.com/in/johnson-neil/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className={styles.heroIcon} icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://github.com/nxjohnson" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className={styles.heroIcon} icon={faGithub} size="2x" />
                </a>

            </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <Work />
          <Skills />
          <AboutMe />
        </div>
        <ContactForm />
      </main>
    </>
  )
}

export default Home

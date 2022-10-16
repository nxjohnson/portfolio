import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';

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
        <Hero />
        <Work />
        <Skills />
        <AboutMe />
      </main>
      <footer>
        <ContactForm />
      </footer>
    </>
  )
}

export default Home

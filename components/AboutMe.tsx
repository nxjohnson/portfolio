import Image from 'next/image'
import styles from '../styles/AboutMe.module.css';
import profilePhoto from '../public/Neil-Johnson-Profile-Photo.jpg';

const AboutMe = () => {
  return (
    <section id="about-me" className={styles.aboutContainer}>
      <div className={styles.aboutGridLayout}>
        <div className={styles.aboutTile}>
          <div className={styles.photoContainer}>
            <div className={styles.photoSize}>
              <Image
                src={profilePhoto}
                alt="Neil Johnson Headshot"
                // height={2880}
                // width={2880}
                // layout='responsive'
                layout="fill"
                objectFit="contain"
              />

            </div>
          </div>
        </div>
        <div className={styles.aboutTile}>
          <h2 className={styles.title}>About Me</h2>
          <p>
            Prior to exploring the Software Engineering industry, I was a Professional Wedding and Event Photographer for over ten years, working at a prestigious photography studio. I loved being able to create and problem-solve while telling my clients stories.
          </p>
          <p>
            In 2020, I began my entrepreneurial journey, and one of my favorite tasks was building my e-commerce website. At the time, I was using Shopify, and once my shop matured, one obstacle I faced was going beyond what my website theme provided, which led me down the path of learning to code and igniting a new passion.
          </p>
          <p>
            At the beginning of 2022, I enrolled in Hack Reactor&apos;s Advance Software Engineering Immersive, where I learned how to build full-stack applications in an Agile environment using JavaScript, React, Next.js, Node.js, and SQL and NoSQL Databases.
          </p>
          <p>
            While my background isn&apos;t traditional, I have a unique and deep skill set complimented with my strong passion for learning, creating, and problem solving. If you are interested in building new web experiences together, let&apos;s chat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
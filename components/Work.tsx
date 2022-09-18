import Image, { StaticImageData } from 'next/image';
import projects from './projects';
import styles from '../styles/Work.module.css';

type Images = {
  src: StaticImageData,
  alt: string,
}

const Work = () => {
  const createWebMock = (mockupType: string, images:Images[]) => {
    if (mockupType === 'web') {
      return (
        <div className={styles.webMockupContainer}>
          <div className={styles.browserMockup}>
            <div className={styles.browserMockupImage}>
              <Image
                src={images[0].src}
                alt={images[0].alt}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className = {styles.mobileMockupContainer}>
          {images.map((image) => {
            return (
              <div className={styles.mobileMockup} key={image.alt}>
                <div className={styles.mobileMockupImage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                  />
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  return (
    <section id="work" className={styles.workContainer}>
      <div className={styles.gridLayout}>
        {projects.map((project) => {
          return (
            <>
              <div key={`${project.projectName} image`} className={styles.mockupContainer}>
                {createWebMock(project.mockupType, project.images)}
              </div>
              <div className={styles.contentContainer} key={`${project.projectName} content`}>
                <h2>{project.projectName}</h2>
                <p>{project.projectDescription}</p>
                <strong>Tech Stack:</strong>
                <p>{project.techStack.join(', ')}</p>
                <span>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><button>View on Github</button></a>
                </span>
              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Work;
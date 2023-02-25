import Image, { StaticImageData } from 'next/image';
import WebMockup from './WebMockup';
import MobileMockup from './MobileMockup';
import { projects, Project } from './projects';
import styles from '../styles/Work.module.css';
import { FunctionComponent } from 'react';

type Images = {
  src: StaticImageData,
  alt: string,
}

type MockupType = 'web' | 'mobile';

const Work: FunctionComponent = () => {
  return (
    <section id="work" className={styles.workContainer}>
      <div className={styles.gridLayout}>
        {projects.map((project: Project) => {
          return (
            <>
              <div key={`${project.projectName} image`} className={styles.mockupContainer}>
                {project.mockupType === 'web' ? <WebMockup images={project.images} /> : <MobileMockup images={project.images} />}
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
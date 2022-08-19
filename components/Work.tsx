import projects from './projects';
import styles from '../styles/Work.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
  return (
    <section id="work" className={styles.workContainer}>
      <div className={styles.gridLayout}>
        {projects.map((project) => {
          return(
            <div key={project.projectName} className={styles.tile}>
              <div className={styles.tileContent}>
                <h2>{project.projectName}</h2>
                {/* <span>{project.techStack.join(', ')}</span> */}
                <div className={styles.icon}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Work;
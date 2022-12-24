import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

export default function ProjectCard({ result, setSelectedProject }) {

  const path = `/projects/${result.url}`
  

  return (
      <Link to={path} className={styles.postcardcontainer} onMouseEnter={() => setSelectedProject(result.url)}>
          <img alt="item" width="500" height="600" className={styles.image}/>
          <div className={styles.metacontainer}>
            <span className={styles.title}>{result.name}</span>
            <span className={styles.price2}>{result.description}</span>
            <span className={styles.area}>{result.project_length}</span>
          </div>
      </Link>
    )
  
}
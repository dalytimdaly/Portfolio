import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

export default function ProjectCard({ result, setSelectedProject }) {

  const path = `/projects/${result.url}`
  

  return (
      <Link to={path} className={styles.postcardcontainer} >
          <img src={result.image_urls[0]} alt="item" width="500" height="600" className={styles.image}/>
          <div className={styles.metacontainer}>
            <span className={styles.title}>{result.name}</span>
          </div>
      </Link>
    )
  
}
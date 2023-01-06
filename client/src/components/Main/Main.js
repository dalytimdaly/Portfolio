import styles from './Main.module.css';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard.js'
import ProjectPage from '../ProjectPage/ProjectPage.js'

export default function Main({ user, results }) {

  console.log(user)
  
  return (
    <div className={styles.mainDiv}>
      <div className={styles.headers}>
      <h1 className={styles.name}>Tim Daly</h1>
      <h2>Full Stack Web Developer</h2>
      <h3>JavaScript | React | Ruby | Rails</h3>
      <div>
      <Link to='/projects/add'>Add Project</Link>
      </div>
      </div>
        <div className={styles.projectDiv}> {results.map(result => <ProjectCard key={result.id} result={result}/>)}</div>
    </div>
   
  )

}
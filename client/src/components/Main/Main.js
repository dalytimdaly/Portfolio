import styles from './Main.module.css';
import { useEffect, useState } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard.js'
import ProjectPage from '../ProjectPage/ProjectPage.js'

export default function Main({ user, results }) {

  
  return (
    <div>
    <div className={styles.mainDiv}>
    <div className={styles.headers}>
    <h1>Tim Daly</h1>
    <h2>Full Stack Web Developer</h2>
    <h3>JavaScript | React | Ruby | Rails</h3>
    </div>
      <div className={styles.projectDiv}> {results.map(result => <ProjectCard key={result.id} result={result}/>)}</div>
    </div>
    </div>
  )

}
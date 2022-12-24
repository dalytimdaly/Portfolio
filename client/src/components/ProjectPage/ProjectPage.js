import styles from './ProjectPage.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function ProjectPage({ user, results}) {


  const project = results[0]
  

  return (
    <div className={styles.projectContainer}>
      <h1>{project.name}</h1>
      <h2>{project.project_length}</h2>
      <p>{project.description}</p>
    </div>
  )
}
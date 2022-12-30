import styles from './ProjectPage.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditProject from '../EditProject/EditProject';

export default function ProjectPage({ user, result}) {


  const project = result
  const path = "hi"
  console.log(project)

  return (
    <div className={styles.projectContainer}>
      <h1>{project.name}</h1>
      <h2>{project.project_length}</h2>
      <p>{project.description}</p>
      {project.images ? <img src={project.images[0]} alt={"No image provided"} className={styles.avatar}/>: null } 
      <EditProject result={result}>edit</EditProject>
    </div>
  )
}
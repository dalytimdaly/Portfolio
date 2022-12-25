import styles from './ProjectPage.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditProject from '../EditProject/EditProject';

export default function ProjectPage({ user, result}) {


  const project = result
  const path = "hi"

  return (
    <div className={styles.projectContainer}>
      <h1>{project.name}</h1>
      <h2>{project.project_length}</h2>
      <p>{project.description}</p>
      <EditProject result={result}>edit</EditProject>
    </div>
  )
}
import styles from './ProjectPage.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditProject from '../EditProject/EditProject';

export default function ProjectPage({ user, result}) {


  const project = result
  const images = project.image_urls
  
  return (
    <div className={styles.projectContainer}>
      <h1>{project.name}</h1>
      <h2>{project.project_length}</h2>
      <p>{project.description}</p>
      <div className={styles.thumbnailGallery}>
      {images.map(image => <img className={styles.thumbnail} key={image} src={image} alt="image missing"/>)}
      </div>
      <Link to="/edit" state={{ result: result}}>
      Edit Project
      </Link> 
    </div>
  )
}

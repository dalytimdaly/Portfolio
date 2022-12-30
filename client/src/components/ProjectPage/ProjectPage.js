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
      {project.images ? <img src={project.images[0]} alt={"No image provided"} className={styles.avatar}/>: null } 
      <EditProject result={result}>edit</EditProject>
      <ProjectImages image_urls={project.image_urls}/>
    </div>
  )
}

function ProjectImages({ image_urls }) {
  switch (image_urls) {
    case 1:
      return <div className="chirp_images chirp_images_1">
        <img src={image_urls[0]} alt="eat my meaningful text"/>
      </div>
    case 2:
      return <div className="chirp_images chirp_images_2 row">
        <img src={image_urls[0]} alt="eat my meaningful text"/>
        <img src={image_urls[1]} alt="eat my meaningful text"/>
      </div>
    case 3:
      return <div className="chirp_images chirp_images_3 col">
        <div className="row">
          <img src={image_urls[0]} alt="eat my meaningful text"/>
          <img src={image_urls[1]} alt="eat my meaningful text"/>
        </div>
        <div className="row">
          <img src={image_urls[2]} alt="eat my meaningful text"/>
        </div>
      </div>
    case 4:
      return <div className="chirp_images chirp_images_4 col">
        <div className="row">
          <img src={image_urls[0]} alt="eat my meaningful text"/>
          <img src={image_urls[1]} alt="eat my meaningful text"/>
        </div>
        <div className="row">
          <img src={image_urls[2]} alt="eat my meaningful text"/>
          <img src={image_urls[3]} alt="eat my meaningful text"/>
        </div>
      </div>
    default:
      return null
  }
}

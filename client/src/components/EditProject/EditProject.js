import styles from './EditProject.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'


export default function EditProject({ user }) {

  const location = useLocation()
  const result = location.state.data
  
  const navigate = useNavigate();

// edit project info

const [description, setDescription] = useState(result.description)
const [name, setName] = useState(result.name)
const [projectLength, setProjectLength] = useState(result.project_length)
const [url, setUrl] = useState(result.url)
const [erros, setErrors] = useState("")

const [patch, setPatch] = useState(0);

function startPatch() {
  setPatch(1)
}

function handleDescription(event) {
  setDescription(event.target.value)
}

function handleName(event) {
  setName(event.target.value)
}

function handleProjectLength(event) {
  setProjectLength(event.target.value)
}

function handleUrl(event) {
  setUrl(event.target.value)
}


function handleSubmit(event) {
  event.preventDefault()

  const editedProject = {
      "description": description,
      "name": name,
      "project_length": projectLength,
      "url": url,
  }

  fetch(`/projects/${result.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedProject),
  })
  .then(r => r.json())
  .then((data) => {
    navigate(`/projects/${editedProject.url}`)
    window.location.reload()
  })
  
}


//add images
const [attachments, setAttachments] = useState([])

function handleSetAttachments(e) {
  setAttachments(attachments=>[ ...e.target.files, ...attachments])
}

function handleSubmitPicture() {
  const formData = new FormData();
  attachments.forEach(attachment => formData.append('images[]', attachment, attachment.name))
  fetch(`/projects_images/${result.id}`, {
    method: "PATCH",
    body: formData
  }).then(r=>{if (r.ok) { r.json().then(data=>{
    setAttachments([])
  })}})   
}

  //Delete Project

  function handleDelete() {
    fetch(`/projects/${result.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => {
      if(r.ok) {
        navigate('/');
        window.location.reload()
      } else {
        r.json().then(err => setErrors(err));
      }
    })
  }

  //Delete Image

  const [deleteImage, setDeleteImage] = useState("")

  function handleImageDelete(event) {
    setDeleteImage(event.target.value)

    let deleteMe = {number: deleteImage}

    console.log(JSON.stringify(deleteMe))
    fetch(`/projects_images/${result.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(deleteMe)
    })
    .then(r => {
      if(r.ok) {
        window.location.reload()
      } else {
        r.json().then(err => setErrors(err));
      }
    })
    
  }


  //

  let n = 0
  
  return (
  <div>
      <form onChange={startPatch} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label> Edit Name: </label>
          <input type='text' value={patch === 1 ? name : result.name} onChange={handleName}/>
        </div>
        <div>
          <label> Edit Description: </label>
          <textarea value={patch === 1 ? description : result.description} onChange={handleDescription}/>
        </div>
        <div>
          <label> Edit URL:</label>
          <input type='text' value={patch === 1 ? url : result.url} onChange={handleUrl}/>
        </div>
        <div>
          <label> Edit Project Length: </label>
          <input type='text' value={patch === 1 ? projectLength : result.project_length} onChange={handleProjectLength}/>
        </div>
        

        <button className={styles.button} type="submit">Save Edited Project Info</button>
      </form>

      <div className={styles.imagecontainer}>
        <label> Add More Photos: </label>
        <input type="file" accept="image/*" multiple={true} name="images" className={styles.avatarInput} onChange={handleSetAttachments}/>
        <button onClick={handleSubmitPicture}>Attach Pictures</button>
      </div>

        <label>Attached Images:</label>
      <div className="chirp_editor_attachment_viewer col">
        {attachments.map((attachment,i)=>
        <div className="row" key={i}>
          <button className="removeAttachment" onClick={()=>setAttachments(attachments.filter(a=>a.name!==attachment.name))}>X</button>
          <span>{attachment.name}</span>
        </div>)}    
      </div>
      
        <div>
          <label>Remove Photos:</label>
          {result.image_urls.map(image =>
            <div key={n++}>
            <img src={image} alt='image' />
            <p>{image.id}</p>
            <button onClick={(e)=>setDeleteImage(e.target.value)} value={n}>Select Image {n}</button>
            <button onClick={handleImageDelete}>Delete Me</button>
          </div>)}
        </div>  
    
    <div>
      <label>Delete Project:</label>
      <button onClick={handleDelete}>Delete Me</button>
    </div>
  </div>
  )
}
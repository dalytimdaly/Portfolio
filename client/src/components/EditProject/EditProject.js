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
  const [errors, setErrors] = useState("")
  
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

  function handleSubmit() {
    const formData = new FormData();
    formData.append('name', name)
    formData.append('project_length', projectLength)
    formData.append('url', url)
    formData.append('description', description)
    attachments.forEach(attachment => formData.append('images[]', attachment, attachment.name))
    fetch(`/projects/${result.id}`, {
      method: "PATCH",
      body: formData
    }).then(r=>{if (r.ok) { r.json().then(data=>{
      setAttachments([])
      navigate(`/projects/${url}`)
      window.location.reload()
    })}})
    
  }


//add images

  const [attachments, setAttachments] = useState([])

  function handleSetAttachments(e) {
    setAttachments(attachments=>[ ...e.target.files, ...attachments])
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
  
  function handleImageDelete(n) {
    console.log(n)
    
    fetch(`/projects_images/${result.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
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

 

  //

  let n = 0
  
  return (
  <div>
      <form onChange={startPatch}>
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
        <div className={styles.imagecontainer}>
        <label> Add More Photos: </label>
        <input type="file" accept="image/*" multiple={true} name="images" className={styles.avatarInput} onChange={handleSetAttachments}/>
        </div>

        <button className={styles.button} type="submit" onClick={handleSubmit}>Save Edited Project Info</button>
      </form>
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
            <button onClick={handleImageDelete}>Delete Image {n}</button>
          </div>)}
        </div>  
    
    <div>
      <label>Delete Project:</label>
      <button onClick={handleDelete}>Delete Me</button>
    </div>
  </div>
  )
}
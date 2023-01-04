import styles from './AddProject.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function AddProject({ user }) {

  const [projectName, setProjectName] = useState('')
  const [projectLength, setProjectLength] = useState('')
  const [projectURL, setProjectURL] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [attachments, setAttachments] = useState([])
  const [errorText, setErrorText] = useState("")

  const navigate = useNavigate()

  // Images //
  
  function handleSetAttachments(e) {
    setAttachments(attachments=>[ ...e.target.files, ...attachments])
  }

  function handleSubmit(e) {
    const formData = new FormData();
    formData.append('name', projectName)
    formData.append('project_length', projectLength)
    formData.append('url', projectURL)
    formData.append('description', projectDescription)
    attachments.forEach(attachment => formData.append('images[]', attachment, attachment.name))
    console.log(projectDescription, projectLength, projectName, projectURL, attachments)
    fetch('/projects', {
      method: "POST",
      body: formData
    }).then(r=>{if (r.ok) { r.json().then(data=>{
      setAttachments([])
      navigate(`/projects/${projectURL}`)
      window.location.reload()
    })}})
    
  }

  return (
    <div>
      <h1>Add a Project:</h1>
      <label>Name:</label>
      <input type='text' value={projectName} onChange={(e) => setProjectName(e.target.value)}/>

      <label>Project Length:</label>
      <input type='text' value={projectLength} onChange={(e) => setProjectLength(e.target.value)}/>

      <label>URL:</label>
      <input type='text' value={projectURL} onChange={(e) => setProjectURL(e.target.value)}/>

      <label>Description:</label>
      <input type='text' value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/>

      <label>Add Images:</label>
      <div className={styles.imagecontainer}>
      <input type="file" accept="image/*" multiple={true} name="images" className={styles.avatarInput} onChange={handleSetAttachments}/>
      <button onClick={handleSubmit}>submit</button>  
    </div>
    <div className="chirp_editor_attachment_viewer col">
      {attachments.map((attachment,i)=>
        <div className="row" key={i}>
          <button className="removeAttachment" onClick={()=>setAttachments(attachments.filter(a=>a.name!==attachment.name))}>X</button>
          <span>{attachment.name}</span>
        </div>)}    
    </div>

    </div>
  )
}
import styles from './EditProject.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'


export default function EditProject({ user }) {

  const location = useLocation()
  const result = location.state.data

// edit project info

  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [projectLength, setProjectLength] = useState("")
  const [url, setUrl] = useState("")
  
  const [patch, setPatch] = useState(0);

  function startPatch() {
    setPatch(1)
  }

  function handleDescription() {

  }
  
  function handleName() {

  }

  function handleProjectLength() {

  }

  function handleUrl() {
    
  }
//add images

  const [attachments, setAttachments] = useState([])
  const [errorText, setErrorText] = useState("")

  function handleSetAttachments(e) {
    if ((e.target.files.length + attachments.length) > 4)
      { return setErrorText("Only a max of 4 images allowed") }
    setErrorText("")
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
  
  return (
  <div>
      <form onChange={startPatch}>
        <div>
          <label> Edit Name: </label>
          <input type='text' value={patch === 1 ? name : result.name} />
        </div>
        <div>
          <label> Edit Description: </label>
          <textarea value={patch === 1 ? description : result.description } />
        </div>
        <div>
          <label> Edit URL:</label>
          <input type='text' value={patch === 1 ? url : result.url} />
        </div>
        <div>
          <label> Edit Project Length: </label>
          <input type='text' value={patch === 1 ? projectLength : result.project_length} />
        </div>
      </form>
      <form>
        <div>
          <label>Remove Photos:</label>
          {result.image_urls}
        </div>
      </form>

    <div className={styles.imagecontainer}>
      <label> Add More Photos: </label>
      <input type="file" accept="image/*" multiple={true} name="images" className={styles.avatarInput} onChange={handleSetAttachments}/>
      <button onClick={handleSubmitPicture}>submit</button>
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
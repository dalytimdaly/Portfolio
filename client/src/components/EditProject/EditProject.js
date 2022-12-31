import styles from './EditProject.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'


export default function EditProject({ user }) {

  const location = useLocation()
  const result = location.state.data
  console.log(location)
  console.log(location.state.data)


  const [patch, setPatch] = useState(0);


  function handleSubmitPicture() {
    const formData = new FormData();
    attachments.forEach(attachment => formData.append('images[]', attachment, attachment.name))

    fetch(`/projects/${result.id}`, {
      method: "PATCH",
      body: formData
    }).then(r=>{if (r.ok) { r.json().then(data=>{
      setAttachments([])
    })}})
      
    }

    const [attachments, setAttachments] = useState([])
    const [errorText, setErrorText] = useState("")

  function handleSetAttachments(e) {
    console.log(e.target.files)

    if ((e.target.files.length + attachments.length) > 4)
      { return setErrorText("Only a max of 4 images allowed") }
    setErrorText("")

    console.log([...attachments, ...e.target.files])

    setAttachments(attachments=>[ ...e.target.files, ...attachments])

    console.log(attachments)
  
  }
  
  return (
    <div>
      <div>
        Edit Name:
        {result.name}
      </div>
      <div>

      </div>
      <div>
        Edit Description:
        {result.description}
      </div>
      

        <div className={styles.imagecontainer}>
                <input type="file" accept="image/*" multiple={true} name="images" className={styles.avatarInput} onChange={handleSetAttachments}/>
                <button onClick={handleSubmitPicture}>submit</button>
      </div>
      <div className="chirp_editor_attachment_viewer col">
      {attachments.map((attachment,i)=><div className="row" key={i}>
        <button className="removeAttachment" onClick={()=>setAttachments(attachments.filter(a=>a.name!==attachment.name))}>X</button>
        <span>{attachment.name}</span>
      </div>)}
     
    </div>
    </div>
  )
}
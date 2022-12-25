import styles from './EditProject.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function EditProject({ user, result }) {

  const [patch, setPatch] = useState(0);
  const [editImage, setEditImage] = useState(false)

  function handleEditImage(event) {
    setEditImage(event.target.value)
  }

  function renderEditImageInput() {
    setPatch(1)
    setEditImage(!editImage)
  }


  function handleSubmitPicture(e) {
    e.preventDefault()
    const file = e.target['image'].files[0]
    const formData = new FormData();
    formData.append('image', file)
    
  fetch(`/editimage/${result.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        }).then(res => res.json())
        .then((data) => alert('Image submitted!'))
        
    }

  return (
      <div>
        <div className={styles.imagecontainer}>
      {editImage ? <form onSubmit={(e) => handleSubmitPicture(e)}>
                <input type="file" name="image" className={styles.avatarInput}/>
                <button type="submit" className={styles.avatarButton}>Submit</button>
            </form> : 
      <button onClick={renderEditImageInput} className={styles.imageButton}>edit avatar</button>}
      </div>
      </div>
  )
}
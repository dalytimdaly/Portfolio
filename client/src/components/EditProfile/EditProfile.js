import styles from './EditProfile.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function EditAccount({user}) {

  const navigate = useNavigate()

  const [postObject, setPostObject] = useState({})
  const [editedObject, setEditedObject] = useState({
    first_name: postObject.first_name,
    last_name: postObject.last_name,
    phone: postObject.phone,
    area: postObject.area,
    bio: postObject.bio
  })
  
  const [patch, setPatch] = useState(0);

  function startPatch() {
    setPatch(1)
  }

  useEffect(() => {
    fetch(`/me`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
    })
  }, [])

  console.log(postObject)
  console.log(editedObject)

  function handleChange(event) {
    setEditedObject(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch(`/users/${postObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedObject),
    })
    .then(r => r.json())
    .then((data) => {
      navigate('/profile')
      window.location.reload()
    })

  }


  return (
    <div>
      <form onChange={startPatch} onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" value={patch > 0 ? editedObject.first_name : postObject.first_name} onChange={handleChange} />

      <label>Last Name</label>
      <input type="text" value={patch > 0 ? editedObject.last_name : postObject.last_name} onChange={handleChange} />

      <label>Phone Number</label>
      <input type="text" value={patch > 0 ? editedObject.phone : postObject.phone} onChange={handleChange} />

      <label>Area</label>
      <input type="text" value={patch > 0 ? editedObject.area : postObject.area} onChange={handleChange} />

      <label>Bio</label>
      <textarea value={patch > 0 ? editedObject.bio : postObject.bio} onChange={handleChange} />

      <label>Profile Picture</label>
      <input type="file"  />
      <button className={styles.button} type="submit">Submit Account Info</button>
      </form>
    </div>
  )
}
import styles from './EditProfile.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function EditAccount({user}) {

  const navigate = useNavigate()

  const [postObject, setPostObject] = useState({})
  const [firstName, setFirstName] = useState(postObject.first_name)
  const [lastName, setLastName] = useState(postObject.last_name)
  const [phone, setPhone] = useState(postObject.phone_number)
  const [userArea, setUserArea] = useState(postObject.area)
  const [userBio, setUserBio] = useState(postObject.bio)

  useEffect(() => {
    fetch(`/me`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
    })
  }, [])
  
  const [patch, setPatch] = useState(0);

  function startPatch() {
    setPatch(1)
  }

  function handleFirstName(event) {
    setFirstName(event.target.value)
  }

  function handleLastName(event) {
    setLastName(event.target.value)
  }

  function handlePhone(event) {
    setPhone(event.target.value)
  }

  function handleArea(event) {
    setUserArea(event.target.value)
  }

  function handleBio(event) {
    setUserBio(event.target.value)
  }
  

  function handleSubmit(event) {
    event.preventDefault()

    const editedUser = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      area: userArea,
      bio: userBio
    }

  
    fetch(`/users/${postObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    })
    .then(r => r.json())
    .then((data) => {
      navigate(`/`)
      window.location.reload()
    })
   
  }

  function handleSubmitPicture(e) {
    e.preventDefault()
    const file = e.target['avatar'].files[0]
    const formData = new FormData();
    formData.append('avatar', file)
    
  fetch(`/setavatar/${postObject.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        }).then(res => res.json())
        .then((data) => alert('Avatar submitted!'))
        
    }

  return (
    <div>
      <form onChange={startPatch} onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" value={postObject.first_name} onChange={handleFirstName} />

      <label>Last Name</label>
      <input type="text" value={postObject.last_name} onChange={handleLastName} />

      <label>Phone Number</label>
      <input type="text" value={postObject.phone} onChange={handlePhone} />

      <label>Area</label>
      <input type="text" value={postObject.area} onChange={handleArea} />

      <label>Bio</label>
      <textarea value={postObject.bio} onChange={handleBio} />

      <button className={styles.button} type="submit">Submit Account Info</button>
      </form>

      <label>Profile Picture</label>
      <form onSubmit={(e) => handleSubmitPicture(e)}>
                <input type="file" name="avatar" className={styles.avatarInput}/>
                <button type="submit" className={styles.avatarButton}>Submit</button>
      </form>
       
    </div>

  )
}
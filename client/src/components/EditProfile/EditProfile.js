import styles from './EditProfile.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function EditAccount({user}) {

  const [postObject, setPostObject] = useState({})
  const [patch, setPatch] = useState(0);

  useEffect(() => {
    fetch(`/me`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
    })
  }, [])

  console.log(postObject)


  return (
    <div>
      <label>First Name</label>
      <input type="text"></input>

      <label>Last Name</label>
      <input type="text"></input>

      <label>Phone Number</label>
      <input type="text"></input>

      <label>Area</label>
      <input type="text"></input>

      <label>Profile Picture</label>
      <input type="text"></input>

    </div>
  )
}
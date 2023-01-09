import styles from './UserProfile.module.css';
import { Link } from 'react-router-dom';


export default function UserProfile({user}) {
  console.log(user)


  return (
    <div className={styles.mainDiv}>
      <div className={styles.container}>
      <h1 className={styles.userName}>{user.first_name} {user.last_name}</h1>
      <img src={user.avatar} alt="user image" />
      <h2>{user.area}</h2> <h2>{user.phone_number}</h2>
      <p>{user.bio}</p>
      </div>
      <div>
        {user.id !== null ? <Link to='/profile/edit'>Edit Profile</Link> : null}
      </div>
    </div>
  )
}
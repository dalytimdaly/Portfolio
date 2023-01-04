import styles from './Header.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import HeaderResult from './HeaderResult'


export default function Header({ user, results }) {

  
  
  return (
    <>
    <div className={styles.header}>
      <div>
        <Link to='/'><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/3114/3114880.png" alt="home"/></Link>
      </div>
      <div className={styles.links}>
      {results.map(result => <HeaderResult key={result.id} result={result}/>)}
      </div>
      <div className={styles.links}>
      {user ? `Hi, ${user.first_name}!` : <Link to='/login'>Log in or Sign up!</Link> } | <Link to={`/profile/${user}`}>profile</Link>
      </div>
    </div>
    <Outlet />
    </>
  )
}
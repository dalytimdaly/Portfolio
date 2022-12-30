import styles from './Header.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import HeaderResult from './HeaderResult'


export default function Header({ user, results }) {


  
  return (
    <>
    <div className={styles.header}>
      <div className={styles.homeBtn}>
        <Link to='/'><img className={styles.icon} src="https://cdn-icons-png.flaticon.com/512/2544/2544087.png" alt="create"/></Link>
      </div>
      <div className={styles.links}>
      {results.map(result => <HeaderResult key={result.id} result={result}/>)}
      </div>
      <div className={styles.links}>
      {user ? `Hi, ${user.name}!` : "Log in or Sign up!" } | <button className={styles.buttonLink}>profile</button>
      </div>
    </div>
    <Outlet />
    </>
  )
}
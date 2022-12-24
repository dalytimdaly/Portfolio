import styles from './Header.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import HeaderResult from './HeaderResult'


export default function Header({ user, results }) {


 // | <Link to={path}>account</Link>
//<Link to={path2}>Yalp - A Yelp Clone</Link> | <Link to={path3}>Gregslist - A Craigslist Clone</Link> | <Link>PicklePartners</Link> | 
  return (
    <>
    <div className={styles.header}>
      
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
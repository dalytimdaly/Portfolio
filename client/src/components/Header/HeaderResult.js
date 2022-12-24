import styles from './Header.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';


export default function HeaderResult({ user, result }) {

  const path = `/projects/${result.url}`
console.log(result.url)
return (
  <div>
    <Link path={path}>{result.name}</Link>     |
  </div>
)

}
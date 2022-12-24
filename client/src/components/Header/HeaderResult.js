import styles from './Header.module.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';


export default function HeaderResult({ user, result }) {

 

return (
  <div>
    <Link to={`/projects/${result.url}`}>{result.name}</Link>     |
  </div>
)

}
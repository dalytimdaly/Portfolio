import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js'
import ProjectPage from '../ProjectPage/ProjectPage.js'
import EditProject from '../EditProject/EditProject.js'
import Login from '../Login/Login.js'
import EditProfile from '../EditProfile/EditProfile.js'
import UserProfile from '../UserProfile/UserProfile.js'


function App() {

  
  const [ user, setUser ] = useState(null);
  const [results, setResults] = useState([])
  const [errors, setErrors] = useState('')


  useEffect(() => {
    fetch(`/me`)
    .then(r => {
      if(r.ok) {
        r.json().then(userData => setUser(userData));
      }
    })
  }, [])

  useEffect(() => {
    fetch(`/projects`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setResults(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
    
  }, [])

  function newUser(userData) {
    setUser(userData);
  }

  const projRoutes = results.map(result => <Route path={`/projects/${result.url}`} element={<ProjectPage user={user} result={result} />} />)

  


  return (
    <Routes>
    <Route element={<Header user={user} results={results} />}>
    <Route path="/edit" element={<EditProject results={results} />} />
    <Route path="/" element={<Main user={user} results={results}/>} /> 
    <Route path='/login' element={<Login user={user} newUser={newUser}/>} />
    <Route path='/profile/edit' element={<EditProfile user={user} newuser={newUser}/>}/>
    <Route path='/profile/' element={<UserProfile user={user}/>}/>
    {projRoutes}
    </Route>
    </Routes>
  );
}

export default App;

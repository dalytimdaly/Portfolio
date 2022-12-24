import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js'
import ProjectPage from '../ProjectPage/ProjectPage.js'

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


  return (
    <Routes>
    <Route element={<Header user={user} results={results} />}>
    <Route path="/" element={<Main user={user} results={results}/>} />
    <Route path="/projects/pickepartners" element={<ProjectPage user={user} results={results.filter(result => result.url === "picklepartners")}/>}/>
    <Route path="/projects/gregslist" element={<ProjectPage user={user} results={results.filter(result => result.url === "gregslist")}/>}/>
    <Route path="/projects/yalp" element={<ProjectPage user={user} results={results.filter(result => result.url === "yalp")}/>}/>
    </Route>
    </Routes>
  );
}

export default App;

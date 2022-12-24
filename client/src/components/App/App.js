import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.css'
import Main from '../Main/Main.js'

function App() {

  const user = {name: "hi", age: 24}


  return (
    <Routes>
    <Route path="/" element={<Main user={user}/>} />
    </Routes>
  );
}

export default App;

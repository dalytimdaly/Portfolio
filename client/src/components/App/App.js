import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js'

function App() {

  const user = {name: "hi", age: 24}


  return (
    <Routes>
    <Route element={<Header user={user} />}>
    <Route path="/" element={<Main user={user}/>} />
    </Route>
    </Routes>
  );
}

export default App;

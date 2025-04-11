import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import Green from './components/Green';
import Orange from './components/Orange';
import Purple from './components/Purple';


function App() {


  return (
    <>
      <div id="container">

        <div id="navbar">
          <Link to="/blue" style={{color: "black"}}>Blue</Link>
          <Link to="/red" style={{color:"black"}}>Red</Link>
          <Link to="/green" style={{color:"black"}}>Green</Link>
          <Link to="/purple" style={{color:"black"}}>Purple</Link>
          <Link to="/orange" style={{color:"black"}}>Orange</Link>
          <Link to="/" style={{color:"black"}}>Home</Link>
        </div>
        <div id="main-section">
          <Routes>
              <Route path="/blue" element={<Blue/>}></Route>
              <Route path="/red" element={<Red/>}></Route>
              <Route path="/green" element={<Green/>}></Route>
              <Route path="/purple" element={<Purple/>}></Route>
              <Route path="/orange" element={<Orange/>}></Route>
              <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

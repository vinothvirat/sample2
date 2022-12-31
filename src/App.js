import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { categories } from './tokens'
import { Tokens } from './pages/Tokens';
import './App.css'
import Menu from './components/Menu/Menu';
import { Search } from './pages/Search';

function App() {
  return (
    <div className="app">
      <Menu/>
      <Routes>
        <Route path="/" element={ <Tokens />} />
        <Route path="/tokens" element={ <Tokens />} />
        <Route path="/search" element={ <Search />} />
      </Routes> 
    </div>
  )
}

export default App

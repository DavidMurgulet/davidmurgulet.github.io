import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">

          <Home />
          <Footer />

    </div>
    </>
  );
}

export default App

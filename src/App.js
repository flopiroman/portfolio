import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LinkRouter
} from "react-router-dom";
import React, {useState} from 'react';
import Home from './components/home';
function App() {
  return (


    <Router>
      <Home/>
    </Router>
  );
}

export default App;

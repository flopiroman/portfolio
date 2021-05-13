import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
import Home from './components/home';
function App() {
  return (


    <Router>
      <Home/>
    </Router>
  );
}

export default App;

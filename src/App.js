// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Image from './Components/Image';
import Login from './Components/Login';
import Signup from './Components/Signup'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('primary'); //Whether dark mode is enabled or not.

  const toggleMode = () => {
    if(mode === 'primary')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#292c37';
      document.body.style.color = 'white';
    }
    else{
      setMode('primary');
      document.body.style.backgroundColor = '#b8c3ef';
      document.body.style.color = 'black';
    }
  }

  return (
  <>
    <Router>
      <Navbar title = "Auto Tech Service Center" about = "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Login />
      <Signup />
      <Routes>
          <Route path="/" element={
              <>
                <TextForm heading = "Enter the details." mode = {mode} />
                <Image />
                <div className="text" mode = {mode} toggleMode = {toggleMode}>
                  <h1>Auto Tech</h1>
                  <p>
                    We are here to provide you the best motor services.
                  </p>
                </div>
              </>
            }>
          </Route>
          <Route path="/about" element={
            <>
              <About />
            </>
          }>
          </Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;

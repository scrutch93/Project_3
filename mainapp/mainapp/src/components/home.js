import React from 'react';
import logo from './DelivRy_Logo.png';
import { Link } from 'react-router-dom'; 

export default function homePage(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/login' >Login</Link>
        <button id="homeBtn">Login</button>
        <br></br>
        <button id="homeBtn">Create Account</button>
      </header>   
    </div>
    )
}
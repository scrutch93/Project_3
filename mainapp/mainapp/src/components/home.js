import React from 'react';
import logo from './DelivRy_Logo.png';
import { Link } from 'react-router-dom'; 

export default function homePage(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link id="homeBtn" to='/login' >Login</Link>
        <br></br>
        <Link id="homeBtn" to='/register' >Create Account</Link>
        </header>   
    </div>
    )
}
import React from 'react';
import logo from '../components/DelivRy_Logo.png';
import { Link, Redirect } from 'react-router-dom'; 
import 'bootstrap';



export default function homePage(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Redirect from='/' to="/login" /> */}
        {/* <Link to='/login' >Login</Link> */}
       <Link to='/login'> <button id="homeBtn">Login</button> </Link>
        <br></br>
        <button id="homeBtn">Create Account</button>
      </header>   
    </div>
    )
}



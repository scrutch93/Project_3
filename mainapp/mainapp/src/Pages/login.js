import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Packages from "./packageList";





export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <BrowserRouter>
    <Switch>
    <div id="login" className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label id="formemail" >Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label id="formpassword" >Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            
          />
        </Form.Group>
        <Link to="/inventory ">
        <Button id="logBtn" block size="lg" type="submit" disabled={!validateForm()}>
          Login         
        </Button>
        </Link>
      </Form>
    </div>
    </Switch>
    </BrowserRouter>
  );
}
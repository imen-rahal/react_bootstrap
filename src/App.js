import React, { Component } from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input }
from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FacebookLoginButton } from "react-social-login-buttons";

class App extends Component {
  render() {
    return(
    <Form className="login-form">
    <h1> <span className="font-weight-bold"> www.Facebook</span>.com </h1>
    <h2 className="text-center"> Welcome to my account </h2>
    <FormGroup>
      <Label> Email </Label>
      <Input type="email" placeholder="Email"> </Input>
    </FormGroup>
    <FormGroup>
      <Label> Password </Label>
      <Input type="password" placeholder="Password"> </Input>
    </FormGroup>
    <br/>
    <Button className="btn-lg btn-dark btn-block"> Log in</Button>
    <div className="text-center pt-3">
      Or continue with your social account
    </div>
    <FacebookLoginButton className="mt-3 mb-3"/> 
    <div className="text-center">
      <a href="/sign-up"> Sign up</a>
      <span className="p-2">|</span>
      <a href="/forgot-password"> Forgot Password </a>
    </div>
     </Form>
   );
  }
}

export default App;

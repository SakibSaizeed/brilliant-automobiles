import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <Form className="form-container">
        <h3>Please Login</h3>
        <Form.Group className="mb-3 mx-7 mt-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="primary"> Login</Button>
      </Form>
    </div>
  );
};

export default Login;

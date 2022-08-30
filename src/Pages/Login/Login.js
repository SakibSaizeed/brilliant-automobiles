import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [password, setPassword] = useState("");
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(email, password);
  };
  //
  if (user) {
    navigate(from, { replace: true });
  }
  //
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  //
  if (loading) {
    return <p>Loading...</p>;
  }
  //

  return (
    <div>
      <Form className="form-container">
        <h3>Please Login</h3>
        <Form.Group className="mb-3 mx-7 mt-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="primary"
          onClick={() => handleLogin(email, password)}
        >
          {" "}
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

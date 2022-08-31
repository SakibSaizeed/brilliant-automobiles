import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [password, setPassword] = useState("");
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(email, password);
  };
  const handleGoogle = () => {
    signInWithGoogle();
  };

  //
  user || user1 ? navigate(from, { replace: true }) : navigate("/");

  //
  if (error || error1) {
    return (
      <div>
        <h2 className="text-danger text-center">Error: {error?.message}</h2>:
        {error1?.message}
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
        <h3 className="text-center">Please Login</h3>
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
        <br />
        <span className="text-center">Or</span>
        <hr />
        <Button onClick={() => handleGoogle()}>Login With Google</Button>
      </Form>
    </div>
  );
};

export default Login;

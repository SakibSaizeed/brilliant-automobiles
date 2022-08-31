import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/useronboard";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(email, password);
  };

  //
  if (error) {
    return (
      <div>
        <h2 className="text-danger text-center">Error: {error.message}</h2>
      </div>
    );
  }
  //
  if (loading) {
    return (
      <Spinner animation="border" role="status" className="text-center">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <Form className="form-container">
        <h3 className="text-center text-info">Sign Up</h3>
        <Form.Group className="mb-3 mx-7 mt-3" controlId="formGroupEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          {/* <Form.Label>Confirm Password</Form.Label> */}
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button
          onClick={() => handleSignUp(email, password)}
          className="primary"
        >
          {" "}
          Sign Up
        </Button>
        {/* <br />
        <span className="text-center">Or</span>
        <hr />
        <Button onClick={() => handleGoogle()}>Login With Google</Button> */}
      </Form>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
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
        <p>Error: {error.message}</p>
      </div>
    );
  }
  //
  if (loading) {
    return <p>Loading...</p>;
  }
  //
  if (user) {
    const { email, displayName } = user.user;
    return (
      <div>
        {console.log(user)}
        <h1>Registered User: {email}</h1>
        <h3>{displayName}</h3>
      </div>
    );
  }

  return (
    <div>
      <Form className="form-container">
        <h3>Sign Up</h3>
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button
          onClick={() => handleSignUp(email, password)}
          className="primary"
        >
          {" "}
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;

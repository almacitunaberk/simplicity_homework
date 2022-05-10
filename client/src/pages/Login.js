import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*
    fetch('https://simplicityhw.cotunnel.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
      mutation {loginWithEmail(email:"${email}", password:"${password}") {token}}
      `,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data.loginWithEmail.token));
      */
    await login({ variables: { email: email, password: password } });
    if (data !== undefined) {
      console.log('anan');
      window.localStorage.setItem('token', data.data.loginWithEmail.token);
    }
    if (error === undefined) {
      navigate('/dashboard');
    } else {
      console.log(error);
    }
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;

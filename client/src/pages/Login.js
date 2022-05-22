import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AUTH_TOKEN } from '../constants';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [passwordBlurred, setPasswordBlurred] = useState(false);

  const navigate = useNavigate();

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: ({ loginWithEmail }) => {
      console.log(loginWithEmail);
      localStorage.setItem(AUTH_TOKEN, loginWithEmail.token);
      navigate('/pastOrders');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
  };

  return (
    <section className="form__container">
      <form onSubmit={handleSubmit}>
        <h2 className="form__header">Login</h2>
        <div className="form__inputbox">
          <label htmlFor="email" className={`form__label ${emailBlurred && 'filled'}`}>
            Email Address
          </label>
          <input
            id="email"
            className="form__email"
            onBlur={() => {
              if (email == '') {
                setEmailBlurred(false);
              }
            }}
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={(e) => {
              setEmailBlurred(true);
            }}
            value={email}
            autoComplete="off"
            required
          />
        </div>
        <div className="form__inputbox">
          <label htmlFor="password" className={`form__label ${passwordBlurred && `filled`}`}>
            Password
          </label>
          <input
            id="password"
            className="form__email"
            onBlur={() => {
              if (password == '') {
                setPasswordBlurred(false);
              }
            }}
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={(e) => {
              setPasswordBlurred(true);
            }}
            value={password}
            autoComplete="off"
            required
          />
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Login;

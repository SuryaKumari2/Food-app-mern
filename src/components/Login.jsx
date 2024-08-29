import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { store } from '../App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useContext(store);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { email, password };

    axios.post('https://authentication-jwt-1.onrender.com/api/user/login', data)
      .then(res => {
        setToken(res.data.token);
        window.alert('Login successful!'); // Success alert inside the then block
      })
      .catch(err => {
        console.log(err);
        window.alert('Login failed. Please check your email and password and try again.'); // Error alert inside the catch block
      });
  };

  if (token) {
    return <Navigate to='/profile'/>
  }

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-4">
        <div className="card p-4 shadow mb-5 bg-white rounded">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="m-4 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

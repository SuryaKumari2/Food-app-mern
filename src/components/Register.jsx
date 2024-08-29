import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://authentication-jwt-1.onrender.com/api/user/register", formData);
      console.log('Registration Data:', response.data);
      setSuccess("Registration successful!");
      setError(null); 
      setFormData({ userName: '', email: '', password: '' });

      window.alert("Registration successful!");
      navigate('/login'); 
    } catch (err) {
      console.error('Registration Error:', err);
      setError("Registration failed. Please try again.");
      setSuccess(null); 
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-5">
        <div className="card p-4 shadow mb-5 bg-white rounded">
          <h3 className="text-center mb-4">Register</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="userName"></label> 
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName" 
                placeholder="Enter username"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-4 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

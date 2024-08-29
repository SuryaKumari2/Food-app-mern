import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const Opening = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container">
          <a className="navbar-brand" href="#"> 
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-warning fs-4 pe-4 fw-bold" to='/register'>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning fs-4 pe-4 fw-bold" to='/login'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img src="/title.png" alt="Logo" className="img-fluid w-100 titleimg" />
    </div>
  );
}

export default Opening;

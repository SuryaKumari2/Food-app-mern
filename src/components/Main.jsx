import React, { useContext } from 'react';
import './product.css';
import CarouselComponent from './Display';
import Restaurant from './Restaurent';
import FoodChain from './FoodChain';
import { store } from '../App';
import { Navigate } from 'react-router-dom';

const Main = () => {
  const [token] = useContext(store); 
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className='container-fluid p-0'>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning p-3">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold" href="#">
            Hey foodie
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fs-3 fw-bold" href="#">
                  &#x1F6D2; {/* Cart icon */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <FoodChain/>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-12">
            <div className="text fs-3 fw-bold p-3 text-center">
              Top Dining Places in Hyderabad
            </div>
            <CarouselComponent/>
          </div>
        </div>
      </div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-12">
            <div className="text fs-3 fw-bold p-3 text-center">
              Top Restaurants in Hyderabad
            </div>
            <Restaurant/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

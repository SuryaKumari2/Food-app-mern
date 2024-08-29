import React from 'react';
import './product.css'
import { resort } from '../Data/resort';
import { Link } from 'react-router-dom';
const Restaurant = () => {
  return (
    <div className="container" >
      <div className="row">
        {resort.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow rounded" >
              <img src={item.image} className="card-img-top" alt={item.name} />
              <button type="button" class="btn btn-success">{item.offer}</button>
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <h6 className="card-title">{item.location}</h6>
                <p className="card-text">
                  {item.type}
                </p>
                
                <Link to={`/products/${item.id}`} className="btn btn-primary">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;

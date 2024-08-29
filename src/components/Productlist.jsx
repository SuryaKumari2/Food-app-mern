import React, { useState } from 'react';
import './product.css';
import { resort } from '../Data/resort';
import { useParams } from 'react-router-dom';

const Product = () => {
  // Retrieve the restaurant ID from the URL
  const { restaurantId } = useParams();

  // Find the selected restaurant based on the ID
  const selectedRestaurant = resort.find((item) => item.id === restaurantId);

  // If the restaurant is not found, display a message
  if (!selectedRestaurant) {
    return <div>No Products Found for this Restaurant.</div>;
  }

  // State to manage items in the cart
  const [cart, setCart] = useState([]);

  // Function to handle adding or removing a product from the cart
  const toggleCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      // If the product is already in the cart, remove it
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      // Otherwise, add it to the cart
      setCart([...cart, product]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h3 className="col-12 mb-4">{selectedRestaurant.name} - Products</h3>
        {selectedRestaurant.products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <h6 className="card-title">Price: ₹{product.price}</h6>
                <button
                  className={`cart-btn ${cart.some((item) => item.id === product.id) ? 'in-cart' : ''}`}
                  onClick={() => toggleCart(product)}
                >
                  {cart.some((item) => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

// src/CartPage.js

import React, { useState } from 'react';
import BackToHomeButton from '../../pages/Header/BackToHomeButton';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Crispy Chicken', price: 99 },
    { id: 2, name: 'Ultimate Bacon', price: 149 },
    { id: 3, name: 'Black Sheep', price: 129 },
    { id: 4, name: 'Vegan Burger', price: 79 },
    { id: 5, name: 'Double Burger', price: 199 },
    { id: 6, name: 'Turkey Burger', price: 209 },
    { id: 7, name: 'Smokey House', price: 179 },
    { id: 8, name: 'Classic Burger', price: 99 },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
        <BackToHomeButton/>
      <h1 style={styles.h1}>Tasty Burger</h1>
      <div style={styles.menu}>
        <h2>Menu</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} style={styles.menuItem}>
              <span>{product.name} - ₹ {product.price.toFixed(2)}</span>
              <button style={styles.button} onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.cart}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={styles.cartItem}>
                <span>
                  {item.name} - ₹ {item.price.toFixed(2)} x {item.quantity}
                </span>
                <button
                  style={styles.button}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ₹ {totalAmount.toFixed(2)}</h3>
        <button style={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};

const styles = {
  h1:{
    color:'red'

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  menu: {
    width: '50%',
    marginBottom: '20px',
    
  },
  cart: {
    width: '50%',
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  button: {
    padding: '5px 10px',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#ff4500',
  },
  checkoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#32cd32',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CartPage;

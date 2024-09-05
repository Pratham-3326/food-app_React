import React, { useState } from 'react';
import BackToHomeButton from './BackToHomeButton';

const shops = [
  {
    id: 1,
    name: 'Tasty Burger Downtown',
    address: '12 Main St, Downtown',
    phone: '9832916215',
    hours: '9 AM - 9 PM',
    details: 'Located near the central park. Offers outdoor seating.',
  },
  {
    id: 2,
    name: 'Tasty Burger Uptown',
    address: '66 Elm St, Uptown',
    phone: '7350941158',
    hours: '10 AM - 10 PM',
    details: 'Known for the best cheeseburgers in the city. Ample parking available.',
  },
  {
    id: 3,
    name: 'Tasty Burger Westside',
    address: '79 Maple St, Westside',
    phone: '9873261376',
    hours: '11 AM - 8 PM',
    details: 'A cozy spot for burger lovers. Famous for double patty burgers.',
  },
];

const Shop = () => {
  const [visibleShopId, setVisibleShopId] = useState(null);

  const toggleDetails = (id) => {
    setVisibleShopId(visibleShopId === id ? null : id);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      padding: '20px',
      backgroundColor: '#f0f0f0',
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
     marginBottom:'200px'
    },
    card: {
      border: '1px solid #ddd',
      padding: '20px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      backgroundColor: '#fff',
    },
    cardActive: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    title: {
      fontSize: '1.5rem',
      margin: '0',
      color: '#ff6600',
    },
    text: {
      margin: '5px 0',
    },
    button: {
      backgroundColor: '#ff6600',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
    },
    details: {
      backgroundColor: '#f8f8f8',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '4px',
      textAlign: 'left',
    },
    h1:{
      color:'red'
    }
  };

  return (
    <div style={styles.container}>
        <BackToHomeButton/>
      <h1 style={styles.h1}>Burger Shops</h1>
      <div style={styles.list}>
        {shops.map((shop) => (
          <div
            key={shop.id}
            style={{
              ...styles.card,
              ...(visibleShopId === shop.id ? styles.cardActive : {}),
            }}
            onClick={() => toggleDetails(shop.id)}
          >
            <h3 style={styles.title}>{shop.name}</h3>
            <p style={styles.text}>{shop.address}</p>
            <p style={styles.text}>Phone: {shop.phone}</p>

            {visibleShopId === shop.id && (
              <div style={styles.details}>
                <p>Hours: {shop.hours}</p>
                <p>{shop.details}</p>
                <button style={styles.button} onClick={() => toggleDetails(shop.id)}>
                  {visibleShopId === shop.id ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

// src/components/BackToHomeButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/');
    };

    return (
        <button onClick={goBackHome} style={styles.button}>
            &#8962; Back to Home
        </button>
    );
};

const styles = {
    button: {
        position: 'fixed',
        top: '20px',
        left: '20px',
        padding: '12px 24px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    },
};

export default BackToHomeButton;

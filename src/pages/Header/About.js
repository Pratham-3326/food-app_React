import React from 'react';
import BackToHomeButton from './BackToHomeButton';

const About = () => {
    return (
        <div style={styles.container}>
            <BackToHomeButton/>
            <h1 style={styles.heading}>About Tasty Burger</h1>
            <p style={styles.paragraph}>
                Welcome to Tasty Burger, your ultimate destination for mouth-watering, juicy burgers made with the freshest ingredients. Our mission is simple: to bring you the best burger experience, whether you're dining in, taking out, or ordering delivery.
            </p>
            <p style={styles.paragraph}>
                At Tasty Burger, we believe that a great burger starts with quality. That’s why we use only the finest beef, hand-crafted buns, and locally sourced produce to create a taste sensation you won’t forget. Our chefs are passionate about food and are always experimenting with new flavors to bring you exciting, innovative burgers that you’ll love.
            </p>
            <p style={styles.paragraph}>
                Our menu offers a wide variety of options, from classic beef burgers to creative veggie alternatives, and everything in between. Whether you're a meat lover or a vegetarian, you'll find something to satisfy your cravings at Tasty Burger.
            </p>
            <p style={styles.paragraph}>
                Thank you for choosing Tasty Burger. We’re committed to serving you delicious food with a smile, and we look forward to making your next meal a tasty one!
            </p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: '"Arial", sans-serif',
    },
    heading: {
        fontSize: '2.5em',
        marginBottom: '20px',
        color: '#d32f2f', // Tasty red color
    },
    paragraph: {
        fontSize: '1.2em',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '15px',
    }
};

export default About;


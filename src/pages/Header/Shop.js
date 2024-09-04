import React from 'react';
import BackToHomeButton from './BackToHomeButton';

const shopItems = [
    {
        name: 'Tasty Burger T-Shirt',
        description: 'Show your love for Tasty Burger with this comfortable and stylish t-shirt. Available in all sizes.',
        price: '₹ 19.99',
        imageUrl: 'https://i.etsystatic.com/10742640/r/il/1f5cf1/6183063777/il_1588xN.6183063777_613e.jpg', // Replace with actual image URL
    },
    {
        name: 'Tasty Burger Hat',
        description: 'Keep it cool with our Tasty Burger branded hat. Perfect for sunny days and casual outings.',
        price: '₹ 14.99',
        imageUrl: 'https://hatstore.imgix.net/OB1001821_1.jpg?auto=compress%2Cformat&w=816&h=653&fit=crop&q=80', // Replace with actual image URL
    },
    {
        name: 'Burger Lover Mug',
        description: 'Start your day with a hot drink in our Burger Lover Mug. Ideal for coffee, tea, or any beverage.',
        price: '₹ 9.99',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcZvE0wxyDjMXQEzlzL2PYCdZ7zZr2dei6jS8FYhN85UvHt5OJd5QFYKia2NWI4jMqZdGCf6Yt60XpWDmVBWF1AvLLWuPBkpR7b8lwSV8d6kvAWM2v8XUyag', // Replace with actual image URL
    },
    {
        name: 'Tasty Burger Apron',
        description: 'Cook in style with our Tasty Burger apron. Made from high-quality materials for durability.',
        price: '₹ 24.99',
        imageUrl: 'https://image.spreadshirtmedia.com/image-server/v1/products/T1186A366PA3066PT17X2Y6D1019970760W18745H22494/views/1,width=800,height=800,appearanceId=366,backgroundColor=F2F2F2/tasty-burger-apron.jpg', // Replace with actual image URL
    },
    {
        name: 'Burger Keychain',
        description: 'A fun and quirky keychain for all burger lovers. Take a piece of Tasty Burger with you wherever you go.',
        price: '₹ 4.99',
        imageUrl: 'https://m.media-amazon.com/images/I/31OnLzYxHtL.jpg', // Replace with actual image URL
    },
    {
        name: 'Tasty Burger Tote Bag',
        description: 'Carry your essentials in our eco-friendly Tasty Burger tote bag. Spacious and durable.',
        price: '₹ 12.99',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYG0MYgSxmv6_2edtlpTZaFOwpfgIB-yxbQ&s', // Replace with actual image URL
    },
    {
        name: 'Burger Socks',
        description: 'Keep your feet warm and stylish with these fun burger-patterned socks. A must-have for burger enthusiasts!',
        price: '₹ 7.99',
        imageUrl: 'https://m.media-amazon.com/images/I/71G9lAkl+8L._AC_UL480_FMwebp_QL65_.jpg', // Replace with actual image URL
    },
    {
        name: 'Tasty Burger Phone Case',
        description: 'Protect your phone with this sleek Tasty Burger branded case. Available for various phone models.',
        price: '₹ 14.99',
        imageUrl: 'https://i.etsystatic.com/39620059/r/il/c29550/4759675447/il_fullxfull.4759675447_4fm1.jpg', // Replace with actual image URL
    },
];

const Shop = () => {
    return (

        <div style={styles.container}>
            <BackToHomeButton/>
            <h1 style={styles.heading}>Shop Our Merchandise</h1>
            <div style={styles.shopGrid}>
                {shopItems.map((item, index) => (
                    <div key={index} style={styles.shopItem}>
                        <img src={item.imageUrl} alt={item.name} style={styles.image} />
                        <h2 style={styles.itemName}>{item.name}</h2>
                        <p style={styles.description}>{item.description}</p>
                        <p style={styles.price}>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: '"Arial", sans-serif',
    },
    heading: {
        fontSize: '2.5em',
        textAlign: 'center',
        marginBottom: '30px',
        color: '#d32f2f',
    },
    shopGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
    },
    shopItem: {
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '15px',
    },
    itemName: {
        fontSize: '1.5em',
        marginBottom: '10px',
        color: '#333',
    },
    description: {
        fontSize: '1em',
        marginBottom: '10px',
        color: '#666',
    },
    price: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#d32f2f',
    },
};

export default Shop;

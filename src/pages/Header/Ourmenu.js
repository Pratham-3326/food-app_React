import React from 'react';
import BackToHomeButton from './BackToHomeButton';

const menuItems = [
    {
        name: 'Classic Beef Burger',
        description: 'A timeless favorite with 100% beef patty, fresh lettuce, tomatoes, pickles, and our signature sauce.',
        price: '₹ 99',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/06/46/11/83/1000_F_646118361_NUrpV4pfpe89nLWP3KFQZCaIHJ3jWQPt.jpg', // Replace with actual image URL
    },
    {
        name: 'Cheesy Bacon Burger',
        description: 'Juicy beef patty topped with crispy bacon, melted cheddar cheese, and our special BBQ sauce.',
        price: '₹ 109',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/07/92/88/01/1000_F_792880102_hhDryYeSHBj0w99zWdHosiCshkq83b6o.jpg', // Replace with actual image URL
    },
    {
        name: 'Spicy Chicken Burger',
        description: 'Crispy fried chicken with a spicy kick, lettuce, tomatoes, and mayo, served on a toasted bun.',
        price: '₹ 139',
        imageUrl: 'https://as1.ftcdn.net/v2/jpg/08/59/47/44/1000_F_859474451_v0rlj2eDY7wUfbggHJ11AFqraHWWCduj.jpg', // Replace with actual image URL
    },
    {
        name: 'Veggie Delight Burger',
        description: 'A delicious plant-based patty with avocado, lettuce, tomato, and our vegan-friendly sauce.',
        price: '₹ 89',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/09/12/28/83/1000_F_912288389_r5v3CznWT4fND9TRYQImiXE34zI1fK1a.jpg', // Replace with actual image URL
    },
    {
        name: 'Double Trouble Burger',
        description: 'Two beef patties, double cheese, lettuce, onions, pickles, and a hearty helping of special sauce.',
        price: '₹ 99',
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/14/df/16/2e/double-trouble-burger.jpg', // Replace with actual image URL
    },
    {
        name: 'Mushroom Swiss Burger',
        description: 'Savory mushrooms, Swiss cheese, and caramelized onions top this juicy beef patty for a gourmet experience.',
        price: '₹ 149',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/08/52/83/25/1000_F_852832519_jhaaLKCPMg1fKpewBLrFr9IOM5nJM5Wr.jpg', // Replace with actual image URL
    },
    {
        name: 'BBQ Pulled Pork Burger',
        description: 'Tender pulled pork smothered in BBQ sauce, topped with coleslaw and crispy onions on a toasted bun.',
        price: '₹ 119',
        imageUrl: 'https://as1.ftcdn.net/v2/jpg/08/86/93/84/1000_F_886938410_qFqGc1tpCrnUoGfSQ0LdpD4hep2AiO6A.jpg', // Replace with actual image URL
    },
    {
        name: 'Fish Fillet Burger',
        description: 'Crispy fish fillet with tartar sauce, lettuce, and tomato, served on a soft brioche bun.',
        price: '₹ 199',
        imageUrl: 'https://as1.ftcdn.net/v2/jpg/06/39/64/60/1000_F_639646003_pPRLHtUt1jWbC08KpKPjZOi2DP4GEXta.jpg', // Replace with actual image URL
    },
];

const OurMenu = () => {
    return (
        <div style={styles.container}>
            <BackToHomeButton/>
            <h1 style={styles.heading}>Our Menu</h1>
            <div style={styles.menuGrid}>
                {menuItems.map((item, index) => (
                    <div key={index} style={styles.menuItem}>
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
    menuGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
    },
    menuItem: {
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

export default OurMenu;

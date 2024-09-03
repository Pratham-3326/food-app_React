import React, { useState } from 'react';
import BackToHomeButton from './BackToHomeButton';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <div style={styles.container}>
             <BackToHomeButton/>
            <h1 style={styles.heading}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="subject" style={styles.label}>Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    />
                </div>
                <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: '"Arial", sans-serif',
    },
    heading: {
        fontSize: '2.5em',
        textAlign: 'center',
        marginBottom: '30px',
        color: '#d32f2f',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontSize: '1em',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '1em',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '100px',
    },
    submitButton: {
        padding: '10px 20px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#d32f2f',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default Contact;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
const FormPage = () => {
    const [name, setName] = useState('');
    const [batch, setBatch] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1"> 6-7AM</option>
                <option value="2"> 7-8AM</option>
                <option value="3"> 8-9AM</option>
                <option value="4"> 5-6PM.</option>
                </Form.Select>
 
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormPage;

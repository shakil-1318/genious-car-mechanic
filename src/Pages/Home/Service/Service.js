import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const { id, name, description, img, price } = props.service;

    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <Button variant="primary">Book {name}</Button>
            </Link>
        </div>
    );
};

export default Service;
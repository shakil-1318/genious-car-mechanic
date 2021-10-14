import React from 'react';
import './Service.css'


const Service = (props) => {
    const { name, description, img, price } = props?.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p className='p-5'>{description}</p>
        </div>
    );
};

export default Service;
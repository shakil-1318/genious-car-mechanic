import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { bookingId } = useParams();
    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>Detail of : {service.name}</h2>
            <h2>This is booking: {bookingId}</h2>
        </div>
    );
};

export default Booking;
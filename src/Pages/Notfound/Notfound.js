import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'
import Button from 'react-bootstrap/Button';

const Notfound = () => {
    return (
        <div>
            <img width='100%' src={notfound} alt="" />

            <Link to='/home'>
                <Button variant="primary">Go Back</Button>
            </Link>
        </div>
    );
};

export default Notfound;
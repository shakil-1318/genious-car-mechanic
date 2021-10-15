import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';


const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div id='experts'>
            <div className='container mt-5'>
                <h1 className='text-primary'>Our Experts</h1>
                <div className="row">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;
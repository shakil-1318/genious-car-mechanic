import React from 'react';

const Expert = (props) => {
    const { img, name, expertize } = props.expert
    return (
        <>

            <div className='col-lg-3 col-md-6 col-sm-12'>
                <img width='100%' src={img} alt="" />
                <h4 className='text-primary'>{name}</h4>
                <p className='text-danger'><b>{expertize}</b></p>
            </div>
        </>
    );
};

export default Expert;
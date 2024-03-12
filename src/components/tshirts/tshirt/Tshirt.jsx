import React from 'react';
import './tshirt.css'

const Tshirt = ({tshirt, handdleAddToCart}) => {
    const {name, price, gender, picture} = tshirt
    return (
        <div className='tshirtCard'>
            <img src={picture} alt="" />
            <div className='info'>
                <h4>{name}</h4>
                <p className='cardInfo'>Price : {price}</p>
                <p>Gender : {gender}</p>
                <button onClick={() => handdleAddToCart(tshirt)}>Purcess Now</button>
            </div>
        </div>
    );
};

export default Tshirt;
import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const {image, name, author} = props.bookInfo;
    return (
        <div>
            <div className='cardMain'>
                <div className='cardDesc'>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                    <p>{author}</p>
                </div>
                <div className='cardPrice'>
                    <p>$500</p>
                    <button className='cardBuyNow'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
import React from 'react';
import Cards from '../Cards/Cards';
import bookImg from './../../Images/books/image 19.png'

const Homepage = () => {
    const bookInfo = {
        name: 'umar',
        author: 'anyone',
        image: bookImg
    }
    
    return (
        <div>
            <h3>this is homepagejs</h3>
            <Cards bookInfo = {bookInfo}></Cards>
        </div>
    );
};

export default Homepage;
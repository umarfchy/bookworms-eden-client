import React from 'react';
import './Navigations.css'

const Naviagations = () => {
    return (
        <div>
        <nav className='navbar'>
            <div className='brandTitle'>Bookworm's Eden</div>
            <div className='navbarLinks'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Naviagations;
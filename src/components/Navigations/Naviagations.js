import React from 'react';
import { Link } from 'react-router-dom';
import './Navigations.css'

const Naviagations = (props) => {
    const {loggedUserName} = props;

    return (
        <div>
        <nav className='navbar'>
            <div className='brandTitle'>Bookworm's Eden</div>
            <div className='navbarLinks'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/order">Orders</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="#">Deals</Link></li>
                    <li>{
                        loggedUserName ?<Link to="#">  {loggedUserName} </Link> : 
                        <Link to='/login'>{'Login'}</Link>
                    }</li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Naviagations;
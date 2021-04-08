import React from 'react';
import Naviagations from '../Navigations/Naviagations';
import './Checkout.css'

const Checkout = () => {
    return (
        <>
            <Naviagations></Naviagations>
            <h2>Checkout</h2>
            <table className="styled-table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Description</td>
                    <td>1</td>
                    <td>Price</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Checkout;
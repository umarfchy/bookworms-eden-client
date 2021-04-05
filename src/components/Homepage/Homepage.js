import React from 'react';
import './Homepage.css'
import Cards from '../Cards/Cards';
import Navigations from '../Navigations/Naviagations';
import bookImg from './../../Images/books/image 19.png'

const Homepage = () => {
    const bookInfo = {
        name: 'Java Script everywhere',
        author: 'anyone',
        image: bookImg
    }
    
    return (
        <>
            <Navigations></Navigations>
            <section className="cardShowcase">
            <Cards bookInfo = {bookInfo}></Cards>
            <Cards bookInfo = {bookInfo}></Cards>
            <Cards bookInfo = {bookInfo}></Cards>
            <Cards bookInfo = {bookInfo}></Cards>
            <Cards bookInfo = {bookInfo}></Cards>
            <Cards bookInfo = {bookInfo}></Cards>
            </section>
        </>
    );
};

export default Homepage;
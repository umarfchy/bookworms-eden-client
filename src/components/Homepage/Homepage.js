import React, { useEffect, useState } from 'react';
import './Homepage.css'
import Cards from '../Cards/Cards';
import Navigations from '../Navigations/Naviagations';
import bookImg from './../../Images/books/image 19.png'

const Homepage = () => {

    const [bookData, setBookData] = useState([]);

    const dbDataUrl = 'https://blueberry-tart-01004.herokuapp.com/products';
    fetch(dbDataUrl)
    .then(res => res.json())
    .then(data => useEffect(()=>{
        console.log(data);
        setBookData(data)
    }, 
    []))

    return (
        <>
            <Navigations></Navigations>
            <section className="cardShowcase">
            {
                bookData.map(entry => {
                    const bookInfo = {
                        name: entry.bookName,
                        author: entry.authorName,
                        price: entry.price,
                        image: entry.imgUrl 
                    }
                    console.log(entry);
                    {<Cards bookInfo={bookInfo}/>}
                })
            }
            </section>
        </>
    );
};

export default Homepage;
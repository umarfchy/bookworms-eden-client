import React, { useEffect, useState } from 'react';
import './Homepage.css'
import Cards from '../Cards/Cards';
import Navigations from '../Navigations/Naviagations';

const Homepage = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(()=>{
        const dbDataUrl = 'https://blueberry-tart-01004.herokuapp.com/products';
        fetch(dbDataUrl)
        .then(res => res.json())
        .then(data =>setBookData(data))
    }, [])

    return (
        <>
            <Navigations></Navigations>
            <section className="cardShowcase">
            {
                bookData.map(entry => <Cards bookInfo={entry}/>)
            }
            </section>
        </>
    );
};

export default Homepage;
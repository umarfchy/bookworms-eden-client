import React, { useContext, useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Navigations from '../Navigations/Naviagations';
import { UserContext } from '../../App';

const Homepage = () => {
    const [user, setUser] = useContext(UserContext);
    const [bookData, setBookData] = useState([]);

    useEffect(()=>{
        const dbDataUrl = 'https://blueberry-tart-01004.herokuapp.com/products';
        fetch(dbDataUrl)
        .then(res => res.json())
        .then(data =>setBookData(data))
    }, [])

    return (
        <>
            <Navigations loggedUserName={user.name}></Navigations>
            <section className="row mx-auto container">
            {
                bookData.map(entry => <Cards bookInfo={entry}/>)
            }
            </section>
        </>
    );
};

export default Homepage;
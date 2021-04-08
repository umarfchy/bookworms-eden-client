import React, { useEffect, useState } from 'react';
import './ManageBooks.css'

const ManageBooks = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(()=>{
        const dbDataUrl = 'https://blueberry-tart-01004.herokuapp.com/products';
        fetch(dbDataUrl)
        .then(res => res.json())
        .then(data =>setBookData(data))
    }, [])

    const renderRow = (entry)=>{
        return (
            <tr>
                <td>{entry.bookName}</td>
                <td>{entry.authorName}</td>
                <td>{entry.price}</td>
            </tr>
        )
    }


    return (
        <div>
            <h3>Add Book</h3>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>Book Name</th>
                    <th>Author Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                    bookData.map( entry => renderRow(entry))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageBooks;
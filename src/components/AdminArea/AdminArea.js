import './AdminArea.css'
import React, { useState } from 'react';
import ManageBooks from '../ManageBooks/ManageBooks';
import editIcon from './../../Images/icons/edit 1.png'
import gridIcon from './../../Images/icons/grid 1.png'
import plusIcon from './../../Images/icons/plus 1.png'
import { Link } from 'react-router-dom';
import AddBook from '../AddBook/AddBook';

const AdminArea = () => {

    const [onPageRoute, setOnPageRoute] = useState('manageBook')

    return (
        <div className="adminArea">
            <div className='leftBar'>
            <p>
                Inside The <br/> Bookworm's Eden
            </p>
            <ul>
                <li onClick={()=>{setOnPageRoute('manageBook')}} >
                    <img src={editIcon} alt=""/> Manage Book</li>
                <li onClick={()=>{setOnPageRoute('addBook')}}>
                    <img src={gridIcon} alt=""/> Add Book</li>
                <li >
                    <img src={plusIcon} alt=""/> Edit Book</li>
                <li> <Link to='/'>Home</Link></li>
            </ul>
            </div>
            <div className="rightShowcase">
                {onPageRoute === 'manageBook' ? 
                <ManageBooks/> : <AddBook/>
                }
            </div>   
        </div>
    )
};

export default AdminArea;
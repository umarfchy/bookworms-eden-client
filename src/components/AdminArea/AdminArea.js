import './AdminArea.css'
import React from 'react';
import ManageBooks from '../ManageBooks/ManageBooks';
import editIcon from './../../Images/icons/edit 1.png'
import gridIcon from './../../Images/icons/grid 1.png'
import plusIcon from './../../Images/icons/plus 1.png'

const AdminArea = () => {
    return (
        <div className="adminArea">
            <div className='leftBar'>
            <p>
                Inside The <br/> Bookworm's Eden
            </p>
            <ul>
                <li><img src={editIcon} alt=""/> Manage Book</li>
                <li><img src={gridIcon} alt=""/> Add Book</li>
                <li><img src={plusIcon} alt=""/> Edit Book</li>
            </ul>
            </div>
            <div className="rightShowcase">
                <ManageBooks></ManageBooks>
            </div>   
        </div>
    )
};

export default AdminArea;
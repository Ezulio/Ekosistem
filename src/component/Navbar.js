import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return(
        <div style={{display: "flex"}}>
            <ul style={{flex: 1}}>
                <li><Link to='/'> Home </Link></li>
                <li><Link to={'/Input'}> Input </Link></li>
                <li><Link to={'/Hasil'}> Hasil </Link></li>
            </ul>
        </div>
    )
}
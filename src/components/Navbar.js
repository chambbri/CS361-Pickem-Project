import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
    <nav id="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/makepicks">Make Your Picks</Link></li>
            <li><Link to="/results">Results</Link></li>
        </ul>
    </nav>
    )
}
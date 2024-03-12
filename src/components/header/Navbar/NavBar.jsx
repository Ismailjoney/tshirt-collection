import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            <NavLink to ='/'>Home</NavLink>
            <NavLink to ='/tshirts'>Tshirt</NavLink>
        </div>
    );
};

export default NavBar;
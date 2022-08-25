import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div>
            
            <header className="header">
                <h1>No Time Outs!</h1>
                <NavLink className="nav-link" to="/"> Dashboard </NavLink>
                <NavLink className="nav-link" to="/exercise/new"> Create Exercise </NavLink>
            </header>
            <h3>Create a workout designed for you by you!</h3>
            
        </div>
    );
};

export default Header;
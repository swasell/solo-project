import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div>
            <header className="header">
                <NavLink className="header-link" to="/">No Time Outs!</NavLink>
                <NavLink className="header-link" to="/dashboard"> Dashboard </NavLink>
                <NavLink className="header-link" to="/exercise/new"> Create Exercise </NavLink>
            </header>
            
        </div>
    );
};

export default Header;
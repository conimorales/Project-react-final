import React from 'react';
import logo from '../assets/img.png';
import '../styles/Nav.css';
import { Link } from 'react-router-dom'

const icon = () => {
    return (
        <Link className="navbar-brand" to="/"> <img src={logo}  alt="logo"   /></Link>

    );
}

export default icon;
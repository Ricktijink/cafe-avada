// React
import React from 'react'
import {NavLink} from 'react-router-dom'

// Assets
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa';

// Components
import Navigation from './Navigation'

// Assets
import logo from '../images/main-logo.png'

export default function Sidebar() {
    return (
        <div className="left-sidebar">
            <div className="main-logo">
                <NavLink to="/home">
                    <img src={logo} alt="Café Avada" />
                </NavLink>
            </div>
            <Navigation />
            <div className="social-icons">
                <span className="social"><FaFacebookF /></span>
                <span className="social"><FaTwitter /></span>
                <span className="social"><FaInstagram /></span>
                <span className="social"><FaGooglePlusG /></span>
            </div>
        </div>
    )
}

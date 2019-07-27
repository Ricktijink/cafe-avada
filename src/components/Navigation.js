// React
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" activeClassName="active-link">About us</NavLink>
                </li>
                <li>
                    <NavLink to="/food-and-drinks" activeClassName="active-link">Food &amp; Drinks</NavLink>
                </li>
                <li>
                    <NavLink to="/our-story" activeClassName="active-link">Our story</NavLink>
                </li>
                <li>
                    <NavLink to="/locations" activeClassName="active-link">Locations</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

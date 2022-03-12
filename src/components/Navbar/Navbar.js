import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                // style={(isActive) => {
                //     return isActive ? {color: "maroon"} : {color : "violet"}
                // }}
                className={({isActive}) => {
                    return isActive ? "activeLink" : ""
                }}
            >Accueil</NavLink>

            <NavLink 
            to="/services"
            className={({isActive}) => {
                return isActive ? "activeLink" : ""
            }}
            >Services</NavLink>

            <NavLink 
            to="contact"
            className={({isActive}) => {
                return isActive ? "activeLink" : ""
            }}
            >Contact</NavLink>
        </nav>
    )
}

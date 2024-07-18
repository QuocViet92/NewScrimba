import React from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Header(){
    const activeStyles ={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
   
    return(
        <header className="header">
            <div>logo</div>
            <ul>
               <NavLink
                to='/'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                Home
                </NavLink>
               <NavLink
                to='about'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                About
                </NavLink>
               <NavLink
                to='project'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                Project
                </NavLink>
            </ul>
        </header>
    )
}
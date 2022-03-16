import { Typography } from '@mui/material'
import React from 'react'
import "./NavBar.css"


const NavBar = () => {


    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li className='nav-list-item'>
                    <a href="#aboutPage">
                        <Typography variant="p" display="block" gutterBottom fontFamily={"monospace"} >
                            about
                        </Typography>
                    </a>
                </li>
                <li className='nav-list-item'>
                    <a href="#projects-main-container">
                        <Typography variant="p" display="block" gutterBottom fontFamily={"monospace"}>
                            proyectos
                        </Typography>
                    </a>
                </li>
                <li className='nav-list-item'>
                    <Typography variant="p" display="block" gutterBottom fontFamily={"monospace"}>
                        contacto
                    </Typography>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
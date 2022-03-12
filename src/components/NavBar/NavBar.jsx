import { Typography } from '@mui/material'
import React from 'react'
import "./NavBar.css"


const NavBar = () => {


    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li className='nav-list-item'>
                    <a href="#aboutPage">
                    <Typography variant="overline" display="block" gutterBottom>
                        about
                    </Typography>
                    </a>
                </li>
                <li className='nav-list-item'>
                    <Typography variant="overline" display="block" gutterBottom>
                        contacto
                    </Typography>
                </li>
                <li className='nav-list-item'>
                    <Typography variant="overline" display="block" gutterBottom>
                        proyectos
                    </Typography>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
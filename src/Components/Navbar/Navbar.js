import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar() {
    return(
        <nav>
            <Link to="/">
                Liste
            </Link>

            <Link to="/Scroll">
                Scroll
            </Link>

            <Link to="/StateAnim">
                StateAnim
            </Link>
        </nav>
    )
}

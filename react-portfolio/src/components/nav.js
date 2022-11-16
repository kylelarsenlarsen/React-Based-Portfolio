import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {
    const location = useLocation();
    const { pathname } = location
    const splitLocation = pathname.split('/');
    return(
        <nav>Portfolio</nav>
    )
}

export default Nav;
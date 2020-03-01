import React from 'react';
import './Navigation.scss';

import { FiMenu, FiSearch } from 'react-icons/fi';

const Navigation = (props) => {
    return (
        <nav className="nav">
                        <a href="#" className='nav-trigger' onClick = {props.toggleMenu}><FiMenu/></a>
                        <a href="#" className='nav-trigger'><FiSearch/></a>
        </nav>
    );
}

export default Navigation;
import React from 'react';
import './Menu.scss';

import { FiChevronLeft } from 'react-icons/fi';

const Menu = (props) => {

    return (
        <>
        <FiChevronLeft className='back' onClick={props.toggleMenu}></FiChevronLeft>
        <div className="menu-wrapper">
            { props.state.plants.map((item, index) => {
                return (
                    <div className="section" key = {index} style={{
                       background: `url(${item.picture})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center'
                    }}></div>
                );
            }) }
        </div>
        </>
    )
}

export default Menu;
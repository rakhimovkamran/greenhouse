import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import './Header.scss';

const Header = () => {
    return (
        <section className='section-1 header'>
            <h1 className='site-logo'>green.</h1>
            <h1 className='greenhouse-text'>Greenhouse</h1>
            <section className="social">
                <a href="https://www.github.com/rakhimovkamran/"><FaGithub/></a>
                <a href="https://www.instagram.com/rakhimovkamran/"><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/rakhimovkamran/"><FaLinkedinIn/></a>
            </section>
        </section>
    );
}

export default Header;
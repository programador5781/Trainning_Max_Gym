import React from 'react';
import style from './Header.module.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className={style.header}>
            <img src={Logo} alt='logo' className={style.logo} />
            <ul className={style.header_menu}>
                <li>Inicio</li>
                <li>Entrenamientos</li>
                <li>Porque Nosotros</li>
                <li>Galería</li>
                <li>Testimonios</li>
            </ul>
        </div>
    )
}

export default Header
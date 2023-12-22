import React from 'react';
import style from './Footer.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logoTMGBW.png';
import club from '../../assets/logoPL.png';

const Footer = () => {
    return (
        <div className={style.Footer_Container}>
            <hr />
            <div className={style.footer}>
                <div className={style.social_Links}>
                    <FaFacebook className={style.icon} /> 
                    <FaInstagram className={style.icon}/> 
                    <FaWhatsapp className={style.icon}/> 
                    <FaEnvelope className={style.icon}/>
                </div>
            </div>
            <div className={style.logo_footer}>
                <img src={logo} alt='logo' />
                <img src={club} alt='club' />
            </div>

            <div className={`${style.blur} ${style.blur_f_1}`}></div>
            <div className={`${style.blur} ${style.blur_f_2}`}></div>
        </div>
    )
}

export default Footer
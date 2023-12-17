import React from 'react';
import style from './Hero.module.css';
import Header from '../Header/Header';


const Hero = () => {
  return (
    <div className={style.hero} >
      <div className={style.left_h}>
        <Header />
      </div>
      <div className={style.right_h}>right side</div>
    </div>
  )
}

export default Hero;

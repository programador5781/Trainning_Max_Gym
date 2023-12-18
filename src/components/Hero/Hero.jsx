import React from 'react';
import style from './Hero.module.css';
import Header from '../Header/Header';
import { hero_img, hero_img_back, Heart, Calories, girl } from './index';


const Hero = () => {
  return (
    <div className={style.hero} >
      <div className={style.left_h}>
        <Header />

        {/* Teh best ad */}
        <div className={style.the_best_ad}>
          <span>el mejor club de fitness de San Sebas</span>
          <div></div>
        </div>

        {/* Hero Heading */}
        <div className={style.hero_text}>
          <div>
            <span className={style.stroke_text}>Construye </span>
            <span>Tu</span>
          </div>
          <div>
            <span>Cuerpo Ideal</span>
          </div>
          <div>
            <span> Aquí te ayudamos a formar y construir tu cuerpo ideal y vivir tu vida al máximo. </span>
          </div>
        </div>

        {/* Figures */}
        <div className={style.figures}>
          <div>
            <span>+2 </span>
            <span>Entrenadores </span>
          </div>
          <div>
            <span>+80 </span>
            <span>Miembros</span>
          </div>
          <div>
            <span>+10 </span>
            <span>Programas fitness</span>
          </div>
        </div>

        {/* Button */}
        <div className={style.hero_buttons}>
          <button className={style.btn}>Empieza Ya</button>
          <button className={style.btn}>Aprende Más</button>
        </div>
      </div>

      <div className={style.right_h}>
        <button className={style.btn}>Únete Ahora</button>

        <div className={style.heart_rate}>
          <img src={Heart} alt='' />
          <span>Frec. cardíaca </span>
          <span>116 ppm</span>
        </div>

        {/* Hero images */}
        {/* <img src={hero_img} alt="man fitness" className={style.hero_img} /> */}
        <img src={girl} alt="man fitness" className={style.hero_img} />
        <img src={hero_img_back} alt="man fitness" className={style.hero_img_back} />

        {/* calories */}
        <div className={style.calories}>
          <img src={Calories} alt=''  />
          <div>
            <span>Calorías quemadas</span><span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

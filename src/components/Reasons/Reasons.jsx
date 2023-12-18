import React from 'react';
import style from './Reasons.module.css';
import { image_1, image_2, image_3, image_4, nb, adidas, nike, tick } from './index';

const Reasons = () => {
    return (
        <div className={style.Reasons} id='reasons'>
            <div className={style.left_reasons}>
                <img src={image_1} alt='' />
                <img src={image_2} alt='' />
                <img src={image_3} alt='' />
                <img src={image_4} alt='' />
            </div>
            <div className={style.right_reasons}>
                <span>Nuestras Ventajas</span>


                    <div>
                        <span className={style.stroke_text}>Por qué </span>
                        <span>escogernos ?</span>
                    </div>
                <div className={style.details_right}>

                    <div >
                        <img src={tick} alt='' />
                        <span> mas de 2 + Entrenadores </span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span> ENTRENA MÁS INTELIGENTE Y RÁPIDO QUE ANTES</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>entrenamiento guiado</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span> programas confiables</span>
                    </div>
                </div>
                <span>Nuestros Patrocinadores</span>
            </div>
        </div>
    )
}

export default Reasons
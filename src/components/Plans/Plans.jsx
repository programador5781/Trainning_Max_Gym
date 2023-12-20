import React from 'react';
import style from './Plans.module.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';


const Plans = () => {
    return (
        <div className={style.plans_Container}>
            <div className={style.programs_header}>
                <span className={style.stroke_text}>LISTO PARA COMENZAR </span>
                <span className={style.training}>TU ENTRENAMIENTO </span>
                <span className={style.stroke_text}>CON NOSOTROS</span>
            </div>

            {/* Gallery */}
            <div className={style.plans}>                
                {plansData.map((plan, index) => (
                    <div className={style.plan} key={index} >
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className={style.features}>
                            {plan.features.map((feature, index) => (
                                <div className={style.feature} key={index}>
                                    <img src={whiteTick} alt='' />
                                    <span >{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>Mira mas beneficios -> </span>
                        </div>
                        <button className={style.btn}>Únete ahora</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans;
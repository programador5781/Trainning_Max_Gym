import React, { useState } from 'react';
import style from './Testimonials.module.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className={style.Testimonials}>
            <div className={style.left_t}>
                <span>Testimonios</span>
                <span className={style.stroke_text}>Lo que dicen</span>
                <span>de nosotros</span>
                <span className={style.review}>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span className={style.span_name}>
                        {testimonialsData[selected].name}
                    </span>{' '}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className={style.right_t}>
                <div></div>
                <div></div>
                <img
                    src={testimonialsData[selected].image} alt=''
                />

                <div className={style.arrows}>
                    <img onClick={() => { selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1) }}
                        src={leftArrow}
                        alt=''
                    />
                    <img onClick={() => { selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1) }}
                        src={rightArrow}
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
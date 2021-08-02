import React from 'react';
import s from './MainPage.module.css'
import { NavLink } from 'react-router-dom';

const MainPage = () => {

    return (

        <div className={s.intro}>
            <div className={s.overlay}>
                <div className={s.container}>
                    <div className={s.contentInner}>
                        <div className={s.introTitle}>
                            изучение английского языка в минске онлайн и оффлайн
                            <p>первое занятие и определение уровня бесплатно!</p>
                        </div>
                        <div className={s.introSubtitle}>
                            Начните изучать английский язык с индивидуальным преподавателем уже сегодня
                        </div>
                        <div className={s.littleText}>
                            Удобное обучение английскому языку для взрослых.
                            Обучение проводит опытный преподаватель со стажем более 10 лет.
                        </div>
                        <NavLink to='/myMethod' className={s.btnGreen} onClick={() => {window.scrollTo(0, 0)}} >Подробнее</NavLink>
                    </div>
                </div>
            </div>


        </div>

    )

}

export default MainPage;
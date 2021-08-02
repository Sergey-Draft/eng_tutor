import React from 'react';
import s from './MyMethod.module.css';
import { NavLink } from 'react-router-dom';

const MyMethod = () => {
    return (
        <div className={s.backimg}>

            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.intro}> В процессе обучения я использую коммуникативную методику обучения иностранному языку. Эта методика отлично себя зарекомендовала и на данный момент уверенно удерживает первую позицию среди всех остальных методик. Хотите научиться разговаривать на английском бегло, грамотно, улучшить произношение, не только слышать, но и понимать английскую речь? Тогда эта методика Вам подходит!</div>
                    <div className={s.containerInner}>
                        <div className={s.methodInner}>
                            <div className={s.methodTitle}>Главные принципы</div>
                            <ul className={s.methodList}>
                                <li className={s.methodPoint}>
                                    <span className={s.colorSpan}>Разговариваем на английском с первого же занятия.</span> Свободный разговор - не только цель, но и средство обучения. Несколько слов, фраз вы будете запоминать после каждого урока.
                                </li>
                                <li className={s.methodPoint}>
                                    <span className={s.colorSpan}>При обучении используяются только современные учебные материалы.</span> Упор делается на учебный материал, применяемый в реальной жизнь. На уроках не используются старые школьные "неинтересные" темы.
                                </li>
                                <li className={s.methodPoint}>
                                    <span className={s.colorSpan}>Моделируем жизненные ситуации.</span> Для того, чтобы Вы смогли применить полученные знания на практике.
                                </li>
                                <li className={s.methodPoint}>
                                    <span className={s.colorSpan}>Индивидуальный подход.</span> План урока зачастую зависит от ученика, его уровня, целей и интересов. Для преподователя важно знать где будет использоваться язык, какие темы наиболее актуальны для ученика.
                                </li>
                                <li className={s.methodPoint}>
                                    <span className={s.colorSpan}>Ошибаемся, но не расстраиваемся, всегда делаем выводы и находим общий язык.</span> На смену "советским" строгим преподователям пришли дружелюбные! <i class="fa fa-smile-o" aria-hidden="true"></i>
                                </li>

                            </ul>
                        </div>
                        <div className={s.lessonsInner}>
                            <div className={s.lessonsTitle}>Направления преподавания</div>
                            <ul className={s.lessonsList}>
                                <li className={s.lessonsPoint}>
                                    Общий английский
                                </li>
                                <li className={s.lessonsPoint}>
                                    Бизнес английский
                                </li>
                                <li className={s.lessonsPoint}>
                                    Английский в ИТ-сфере
                                </li>
                                <li className={s.lessonsPoint}>
                                    Помощь при подготовке к экзаменам и ЦТ
                                </li>
                                <li className={s.lessonsPoint}>
                                    Студенты и взрослые
                                </li>
                            </ul>
                            <div className={s.buttons}>
                            <NavLink to='/contacts' className={s.btnGreen} onClick={() => {window.scrollTo(0, 0)}}>контакты</NavLink>
                            <NavLink to='/introduce' className={s.btnGreen} onClick={() => {window.scrollTo(0, 0)}} >обо мне</NavLink>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default MyMethod;
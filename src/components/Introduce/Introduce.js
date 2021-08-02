import React from 'react';
import s from './Introduce.module.css'
import photo from '../../img/photoJenya.jpg'
import { NavLink } from 'react-router-dom';

const Introduce = () => {
    return (
        <div className={s.backimg}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.intro}>Давайте знакомиться</div>
                    <div className={s.introduceInner}>
                    <div className={s.itemPhoto}>

                        <img src={photo} alt='phot' className={s.photo} />

                    </div>
                    <div className={s.itemAbout}><p>Я закончила МГЛУ по специальности лингвист, преподаватель английского и французского. Также владею немецким и итальянским языком.
Долгое время работала переводчиком во многих европейских странах, сопровождая группы детей выезжающих на оздоровление за рубеж.
Есть опыт преподавания в гимназии, частных языковых школах. Также имею опыт проведения корпоративных занятий для организаций, включая методическую разработку курса для сотрудников компаний с учетом запросов и требований  компании.
В данный момент я старший преподаватель кафедры иностранных языков университета.</p>


<p>Работа преподавателя - это мое хобби и призвание, без ложной скромности :-)
Мне нравится контакт с аудиторией. Я люблю достигать целей вместе с моими учениками. 
Свободное владение языком даст вам уверенность и откроет новые возможности. Будет замечательно, если я смогу вам в этом помочь!</p>
<NavLink to='/contacts' className={s.btnGreen} onClick={() => {window.scrollTo(0, 0)}} >Мои контакты</NavLink>
</div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Introduce;
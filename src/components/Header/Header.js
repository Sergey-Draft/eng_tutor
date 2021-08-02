import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const Header = () => {

    let[classState, setClassState] = useState(s.closeBurger);
    let[NavClass, setNavClass] = useState('');
    const openBurger =() => {
        if(classState === s.closeBurger){
            setClassState(classState = s.openBurger)
            setNavClass(NavClass = s.show)
        }else {
            setClassState(classState = s.closeBurger);
            setNavClass(NavClass = '')
        }
    }

    const handleCollapse = () => {
        if(NavClass === s.show) {
            setNavClass(NavClass = '');
            setClassState(classState = s.closeBurger);
        }
      };

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.headerInner}>
                    <div className={s.headerlogo+' '+s.fa}>
                        <p>уроки</p>
                        <p>английского</p>
                    </div>
                    <div className={s.phones}>
                        <img className={s.phoneLogo} src='https://i.ya-webdesign.com/images/telephone-png-icons-free-1.png' alt='logo'></img>
                        <div>
                            <div>+375 29 766 01 49</div>
                            <div>+375 29 681 16 22</div>
                        </div>

                    </div>
                    <nav className={s.nav+' '+NavClass} id='nav'>
                        <NavLink to='/main' activeClassName={s.active} className={s.link} onClick={handleCollapse}>Главная</NavLink>
                        <NavLink to='/introduce' activeClassName={s.active} className={s.link} onClick={handleCollapse}>Обо мне</NavLink>
                        <NavLink to='/mymethod' activeClassName={s.active} className={s.link} onClick={handleCollapse}>Мой метод</NavLink>
                        <NavLink to='/contacts' activeClassName={s.active} className={s.link} onClick={handleCollapse}>Контакты</NavLink>
                    </nav>


                    <button className={s.burger +' '+classState} type="button" onClick={openBurger}>
                        <span className={s.burgerItem} id='navToggle'>Menu</span>
                    </button>
                </div>
            </div>
        </header>
    )

    
}



export default Header;
import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {

    return (
        /*         <div className={s.wrapper}> */
        <div className={s.backimg}>

            <div className={s.wrapper}>
                <div className={s.intro}>Как со мной связаться?</div>

                <div className={s.container}>
                    <div className={s.containerInner}>
                    <div className={s.item}>
                        <div className={s.social}>
                            <a href="https://join.skype.com/invite/D27ddWSO7ic8" className={s.link + ' ' + s.facebook} target="_parent"><span class="fa fa-skype"></span></a>
                        </div>
                        <div className={s.itemContent}>
                            <div className={s.title}>Мой Skype</div>
                            <div className={s.subTitle}>Evgenya Kratovich</div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.social}>
                            <a className={s.link + ' ' + s.twitter} target="_parent"><span class="fa fa-phone-square"></span></a>
                        </div>
                        <div className={s.itemContent}>
                            <div className={s.title}>Позвоните мне</div>
                            <div className={s.subTitle}>
                                <p>+375 29 766 01 49</p>
                                <p>+375 29 681 16 22</p>
                                </div>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.social}>
                            <a href="mailto:o-jeni@mail.ru" className={s.link + ' ' + s.google} target="_parent"><span class="fa fa-envelope"></span></a>
                        </div>
                        <div className={s.itemContent}>
                            <div className={s.title}>Электронное письмо</div>
                            <div className={s.subTitle}>
                                <p>o-jeni@mail.ru</p>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        /*         </div > */
    )

}

export default Contacts;
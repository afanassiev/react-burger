import React from "react";
import styles from './app-header.module.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon, } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
    return (
        <header className={ `${styles.header} pt-4 pr-4 pb-4 pl-4` }>
            {/*<ul className={ styles.headerFlexContainer }>*/}
            {/*    <li className={ styles.headerItem }></li>*/}
            {/*    <li className={ styles.headerItem }></li>*/}
            {/*</ul>*/}
            <nav className={ styles.headerNavigation }>
                <ul className={ styles.headerFlexContainer }>
                    <li className={`${styles.headerItem} mr-2` }>
                        <BurgerIcon />
                        <span className="ml-2 text text_type_main-default">Конструктор</span>
                    </li>
                    <li className={ styles.headerItem }>
                        <ListIcon />
                        <span className="ml-2 text text_type_main-default">Лента заказов</span>
                    </li>
                </ul>
                <div className={ styles.logo }>
                    <Logo />
                </div>
                <ul className={ styles.headerFlexContainer }>
                    <li className={ styles.headerItem }>
                        <ProfileIcon />
                        <span className="ml-2 text text_type_main-default">Личный кабинет</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
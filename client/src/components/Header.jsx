import React from "react";
import classes from "../css/Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <a href="#" className={classes.header__logo}></a>
            <nav className={classes.header__menu}>
                <ul className={classes.header__list}>
                    <li>
                        <a href="#" className={classes.header__link}>Услуги</a>
                    </li>
                    <li>
                        <a href="#" className={classes.header__link}>Сотрудничество</a>
                    </li>
                    <li>
                        <a href="#" className={classes.header__link}>Вакансии</a>
                    </li>
                    <li>
                        <a href="#" className={classes.header__link}>Реклама</a>
                    </li>
                    <li>
                        <a href="#" className={classes.header__link}>Арендодателям</a>
                    </li>
                    <li>
                        <a href="#" className={classes.header__link}>Арендаторам</a>
                    </li>
                    <li>
                        <a href="#" className={classes.header__link}>Блог</a>
                    </li>
                </ul>
                <div className={classes.header__burger}>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
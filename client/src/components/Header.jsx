import React from "react";
import classes from "../css/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.header__logo}>
                <img src={require("../img/masterarenda.PNG")} alt="masterarendakz" />
            </NavLink>
            <nav className={classes.header__menu}>
                <ul className={classes.header__list}>
                    <li>
                        <NavLink to="/services" className={classes.header__link}>
                            Услуги
                        </NavLink>
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
                    <li>
                        <a href="#" className={classes.header__link}>Акции</a>
                    </li>
                    <li>
                        <a href="#" className={classes.header__link}>Онлайн-школы</a>
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
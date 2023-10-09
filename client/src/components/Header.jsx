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
                        <NavLink to="/blog" className={classes.header__link}>
                            Блог
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={classes.header__link}>
                            Услуги
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/partner" className={classes.header__link}>
                            Сотрудничество
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/study" className={classes.header__link}>
                            Обучение
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/onlineschools" className={classes.header__link}>
                            Онлайн-школы
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vacancies" className={classes.header__link}>
                            Вакансии
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/forsellers" className={classes.header__link}>
                            Арендодателям
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/forclients" className={classes.header__link}>
                            Арендаторам
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sales" className={classes.header__link}>
                            Акции
                        </NavLink>
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
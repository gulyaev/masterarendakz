import React from "react";
import Profile from "./Profile/Profile";
import Gallery from "./Gallery";
import Services from "./Services";
import Dialogs from "./Dialogs";
import classes from "../css/Main.module.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div className={classes.main}>
            <aside className={classes.sidebar}>
                <nav className={classes.sidebar__menu}>
                    <ul className={classes.sidebar__list}>
                        <li className={classes.sidebar__link}>
                            <NavLink to="/gallery">
                                Главная
                            </NavLink>
                        </li>
                        <li className={classes.sidebar__link}>
                            <NavLink to="/profile">
                                О проекте
                            </NavLink>
                        </li>
                        <li className={classes.sidebar__link}>
                            <NavLink to="/dialogs">
                                Диалоги
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className={classes.sidebar__link}>Вакансии</a>
                        </li>
                        <li>
                            <a href="#" className={classes.sidebar__link}>Реклама</a>
                        </li>
                        <li>
                            <a href="#" className={classes.sidebar__link}>Арендодателям</a>
                        </li>
                        <li>
                            <a href="#" className={classes.sidebar__link}>Статистика</a>
                        </li>
                        <li>
                            <a href="#" className={classes.sidebar__link}>Акции и скидки</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section className={classes.content}>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/dialogs" element={<Dialogs />} />
                </Routes>
            </section>
        </div>
    )
}

export default Main;
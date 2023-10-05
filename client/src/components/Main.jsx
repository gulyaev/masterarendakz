import React from "react";
import Profile from "./Profile/Profile";
import Gallery from "./Gallery";
import Services from "./Services";
import Dialogs from "./Dialogs/Dialogs";
import classes from "../css/Main.module.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Main = (props) => {

    return (
        <div className={classes.main}>
            <aside className={classes.sidebar}>
                <nav className={classes.sidebar__menu}>
                    <ul className={classes.sidebar__list}>
                        <li className={classes.sidebar__link}>
                            <NavLink className={classes.sidebar__link} to="/profile">
                                Главная
                            </NavLink>
                        </li>
                        <li className={classes.sidebar__link}>
                            <NavLink className={classes.sidebar__link} to="/gallery">
                                Сдам в аренду
                            </NavLink>
                        </li>
                        <li>
                            <a href="#" className={classes.sidebar__link}>Статистика</a>
                        </li>
                        <li className={classes.sidebar__link}>
                            <NavLink className={classes.sidebar__link} to="/profile">
                                О проекте
                            </NavLink>
                        </li>
                        <li className={classes.sidebar__link}>
                            <NavLink className={classes.sidebar__link} to="/dialogs">
                                Диалоги
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section className={classes.content}>
                <Routes>
                    <Route path="/profile" element={<Profile state={props.appState.profilePage} />} />
                    <Route exact path="/" element={<Profile state={props.appState.profilePage} />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/dialogs" element={<Dialogs state={props.appState.dialogsPage} />} />
                    <Route path="/dialogs/:id" element={<Dialogs state={props.appState.dialogsPage} />} />
                </Routes>
            </section>
        </div>
    )
}

export default Main;
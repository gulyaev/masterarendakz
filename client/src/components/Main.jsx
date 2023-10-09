import React from "react";
import Home from "./Home/Home";
import Gallery from "./Gallery";
import Services from "./Services/Services";
import Statistics from "./Statistics/Statistics";
import Dialogs from "./Dialogs/Dialogs";
import classes from "../css/Main.module.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import About from "./About";
import Blog from "./blog/Blog";
import BlogList from "./BlogList";
import Partner from "./Partner/Partner";
import Study from "./Study/Study";
import OnlineSchools from "./OnlineSchools/OnlineSchools";
import Vacancies from "./Vacancies/Vacancies";
import Forsellers from "./Forsellers/Forsellers";
import Forclients from "./Forclients/Forclients";
import Sales from "./Sales/Sales";


const Main = (props) => {

    return (
        <div className={classes.main}>
            <aside className={classes.sidebar}>
                <nav className={classes.sidebar__menu}>
                    <ul className={classes.sidebar__list}>
                        <li className={classes.sidebar__link}>
                            <NavLink className={classes.sidebar__link} to="/home">
                                Главная
                            </NavLink>
                        </li>
                        <li className={classes.sidebar__link}>
                            <NavLink className={classes.sidebar__link} to="/gallery">
                                Сдам в аренду
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.sidebar__link} to="/statistics">
                                Статистика
                            </NavLink>
                        </li>
                        <li className={classes.sidebar__link}>
                            <NavLink className={classes.sidebar__link} to="/about">
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
                    <Route path="/home" element={<Home state={props.appState.homePage} />} />
                    <Route exact path="/" element={<Home state={props.appState.homePage} />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/partner" element={<Partner />} />
                    <Route path="/study" element={<Study />} />
                    <Route path="/onlineschools" element={<OnlineSchools />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                    <Route path="/forsellers" element={<Forsellers />} />
                    <Route path="/forclients" element={<Forclients />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/dialogs" element={<Dialogs state={props.appState.dialogsPage} />} />
                    <Route path="/dialogs/:id" element={<Dialogs state={props.appState.dialogsPage} />} />
                </Routes>
            </section>
        </div>
    )
}

export default Main;
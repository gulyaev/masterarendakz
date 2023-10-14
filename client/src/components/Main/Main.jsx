import React from "react";
import Home from "../Home/Home";
import Gallery from "../Gallery";
import Services from "../Services/Services";
import Statistics from "../Statistics/Statistics";
import Dialogs from "../Dialogs/Dialogs";
import classes from "../../css/Main.module.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import About from "../About";
import Blog from "../blog/Blog";
import BlogList from "../BlogList";
import Partner from "../Partner/Partner";
import Study from "../Study/Study";
import OnlineSchools from "../OnlineSchools/OnlineSchools";
import Vacancies from "../Vacancies/Vacancies";
import Forsellers from "../Forsellers/Forsellers";
import Forclients from "../Forclients/Forclients";
import Sales from "../Sales/Sales";
import { HomeOutlined, PieChartOutlined, LineChartOutlined, BookOutlined, EnvironmentOutlined, ExpandOutlined, SoundOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Main = (props) => {
    return (
        <div className={classes.main}>
            <aside className={classes.sidebar}>
                <nav className={classes.sidebar__menu}>
                    <Menu mode="vertical" defaultSelectedKeys={['1']} style={{
                        width: 200,
                        color: "green",
                        size: "100px",
                        fontSize: "16px",
                    }}>
                        <Menu.Item key="1">
                            <HomeOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/home">
                                Главная
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <PieChartOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/gallery">
                                Сдам в аренду
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <LineChartOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/statistics">
                                Статистика
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <EnvironmentOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/forsellers">
                                Арендодателям
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <ExpandOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/forclients">
                                Арендаторам
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <SoundOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/sales">
                                Акции
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <BookOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/dialogs">
                                Диалоги
                            </NavLink></span>
                        </Menu.Item>
                    </Menu>
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
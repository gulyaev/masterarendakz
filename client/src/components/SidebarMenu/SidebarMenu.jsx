import React from "react";
import { HomeOutlined, PieChartOutlined, BookOutlined, EnvironmentOutlined, SoundOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { Menu } from 'antd';
import MediaQuery from 'react-responsive';
import classes from "../../css/Main.module.css";
import { logout } from "../../redux/auth-reducer";
import { useSelector } from "react-redux";

const SidebarMenu = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <nav className={classes.sidebar__menu}>
            <MediaQuery minWidth={568}>
                <Menu mode="vertical" defaultSelectedKeys={['1']} style={{
                    width: 200,
                    color: "green",
                    size: "100px",
                    fontSize: "16px"
                }}>
                    <Menu.Item key="1">
                        <HomeOutlined style={{ fontSize: '18px' }} />
                        <span>
                            <NavLink to="/home">
                                Главная
                            </NavLink>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <PieChartOutlined style={{ fontSize: '18px' }} />
                        <span><NavLink to="/gallery">
                            Сдам в аренду
                        </NavLink></span>
                    </Menu.Item>
                    {/*
                                <Menu.Item key="3">
                                <LineChartOutlined style={{ fontSize: '18px' }} />
                                <span><NavLink to="/statistics">
                                    Статистика
                                </NavLink></span>
                            </Menu.Item>
                    */}
                    <Menu.Item key="4">
                        <EnvironmentOutlined style={{ fontSize: '18px' }} />
                        <span><NavLink to="/forsellers">
                            Арендодателям
                        </NavLink></span>
                    </Menu.Item>
                    {/*
                            <Menu.Item key="5">
                                <ExpandOutlined style={{ fontSize: '18px' }} />
                                <span><NavLink to="/forclients">
                                    Арендаторам
                                </NavLink></span>
                            </Menu.Item>
                            */}

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

                    <Menu.Item key="8">
                        <BookOutlined style={{ fontSize: '18px' }} />
                        <span><NavLink to="/users">
                            Пользователи
                        </NavLink></span>
                    </Menu.Item>
                    {!isAuth &&
                        <Menu.Item key="9">
                            <BookOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/login">
                                Войти
                            </NavLink></span>
                        </Menu.Item>
                    }

                    {!isAuth &&
                        <Menu.Item key="10">
                            <BookOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/registration">
                                Регистрация
                            </NavLink></span>
                        </Menu.Item>
                    }

                    {isAuth &&
                        <Menu.Item key="11">
                            <BookOutlined style={{ fontSize: '18px' }} />
                            <span onClick={() => props.dispatch(logout())}>
                                Выйти
                            </span>
                        </Menu.Item>
                    }
                    <Menu.Item key="12">
                        <HomeOutlined style={{ fontSize: '18px' }} />
                        <span>
                            <a href="/profile">
                                Профиль
                            </a>
                        </span>
                    </Menu.Item>
                </Menu>
            </MediaQuery>

            <MediaQuery maxWidth={568}>
                <Menu mode="vertical" defaultSelectedKeys={['1']} style={{
                    color: "green",
                    size: "100px",
                    fontSize: "16px"
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
                    {/*
                                <Menu.Item key="3">
                                <LineChartOutlined style={{ fontSize: '18px' }} />
                                <span><NavLink to="/statistics">
                                    Статистика
                                </NavLink></span>
                            </Menu.Item>
                    */}
                    <Menu.Item key="4">
                        <EnvironmentOutlined style={{ fontSize: '18px' }} />
                        <span><NavLink to="/forsellers">
                            Арендодателям
                        </NavLink></span>
                    </Menu.Item>
                    {/*
                            <Menu.Item key="5">
                                <ExpandOutlined style={{ fontSize: '18px' }} />
                                <span><NavLink to="/forclients">
                                    Арендаторам
                                </NavLink></span>
                            </Menu.Item>
                            */}

                    <Menu.Item key="6">
                        <SoundOutlined style={{ fontSize: '18px' }} />
                        <span><NavLink to="/sales">
                            Акции
                        </NavLink></span>
                    </Menu.Item>

                    {/*
                            <Menu.Item key="7">
                                <BookOutlined style={{ fontSize: '18px' }} />
                                <span><NavLink to="/dialogs">
                                    Диалоги
                                </NavLink></span>
                            </Menu.Item>
                            */}
                    <Menu.Item key="8">
                        <BookOutlined style={{ fontSize: '18px' }} />
                        <span><NavLink to="/users">
                            Пользователи
                        </NavLink></span>
                    </Menu.Item>
                    {!isAuth &&
                        <Menu.Item key="9">
                            <BookOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/login">
                                Войти
                            </NavLink></span>
                        </Menu.Item>
                    }

                    {!isAuth &&
                        <Menu.Item key="10">
                            <BookOutlined style={{ fontSize: '18px' }} />
                            <span><NavLink to="/registration">
                                Регистрация
                            </NavLink></span>
                        </Menu.Item>
                    }

                    {isAuth &&
                        <Menu.Item key="11">
                            <BookOutlined style={{ fontSize: '18px' }} />
                            <span onClick={() => props.dispatch(logout())}>
                                Выйти
                            </span>
                        </Menu.Item>
                    }

                </Menu>
            </MediaQuery>
        </nav>
    )
}

export default SidebarMenu;
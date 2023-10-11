import React from "react";
import classes from "../../css/Header.module.css";
import { NavLink } from "react-router-dom";
import { BarcodeOutlined } from '@ant-design/icons';
import { MDBIcon } from 'mdbreact';
import { Menu } from 'antd';

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to="/" className={classes.header__logo}>
                <img src={require("../../img/masterarenda.PNG")} alt="masterarendakz" />
            </NavLink>
            <nav className={classes.header__menu}>
                <div className={classes.header__list}>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{
                        color: "#008000",
                        //backgroundColor: "#77608d"
                        fontSize: "18px"
                    }}>
                        <Menu.Item key="1">
                            <MDBIcon fab icon="blogger" style={{ fontSize: '17px', marginRight: "7px", }} />
                            <span><NavLink to="/blog">
                                Блог
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <BarcodeOutlined style={{ fontSize: '17px' }} />
                            <span><NavLink to="/services">
                                Услуги
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <MDBIcon fas icon="user-friends" style={{ fontSize: '17px', marginRight: "7px", }} />
                            <span><NavLink to="/partner">
                                Сотрудничество
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <MDBIcon fas icon="graduation-cap" style={{ fontSize: '17px', marginRight: "7px", }} />
                            <span><NavLink to="/study">
                                Обучение
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <MDBIcon fab icon="fort-awesome" style={{ fontSize: '17px', marginRight: "7px", }} />
                            <span><NavLink to="/onlineschools">
                                Онлайн-школы
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <MDBIcon fas icon="map-signs" style={{ fontSize: '17px', marginRight: "7px", }} />
                            <span><NavLink to="/vacancies">
                                Вакансии
                            </NavLink></span>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <MDBIcon fas icon="sitemap" style={{ fontSize: '17px', marginRight: "7px", }} />
                            <span><NavLink to="/about">
                                О проекте
                            </NavLink></span>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={classes.header__burger}>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
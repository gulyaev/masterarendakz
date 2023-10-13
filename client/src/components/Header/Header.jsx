import React, { useState } from 'react';
import classes from "../../css/Header.module.css";
import { NavLink } from "react-router-dom";
import { BarcodeOutlined } from '@ant-design/icons';
import { MDBIcon } from 'mdbreact';
import { Menu } from 'antd';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
        if (document.body.classList.contains('lock')) {
            document.body.classList.remove('lock');
        } else {
            document.body.classList.add('lock');
        }
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__body}>
                <NavLink to="/" className={classes.header__logo}>
                    <img src={require("../../img/masterarenda.PNG")} alt="masterarendakz" />
                </NavLink>

                {isActive ?
                    <nav className={classes.header__menu_active}>
                        <ul className={classes.header__list_active}>
                            <li>
                                <MDBIcon fab icon="blogger" style={{ fontSize: '25px', marginRight: "10px", color: "#fff" }} />
                                <span>
                                    <NavLink to="/blog" className={classes.header__link_active} onClick={handleClick}>
                                        Блог
                                    </NavLink>
                                </span>
                            </li>
                            <li>
                                <BarcodeOutlined style={{ fontSize: '25px', marginRight: "10px", color: "#fff" }} />
                                <span>
                                    <NavLink to="/services" className={classes.header__link_active} onClick={handleClick}>
                                        Услуги
                                    </NavLink>
                                </span>
                            </li>
                            <li>
                                <MDBIcon fas icon="user-friends" style={{ fontSize: '25px', marginRight: "10px", color: "#fff" }} />
                                <span>
                                    <NavLink to="/partner" className={classes.header__link_active} onClick={handleClick}>
                                        Сотрудничество
                                    </NavLink>
                                </span>
                            </li>
                            <li>
                                <MDBIcon fas icon="graduation-cap" style={{ fontSize: '25px', marginRight: "10px", color: "#fff" }} />
                                <span>
                                    <NavLink to="/study" className={classes.header__link_active} onClick={handleClick}>
                                        Обучение
                                    </NavLink>
                                </span>
                            </li>
                            <li>
                                <MDBIcon fab icon="fort-awesome" style={{ fontSize: '25px', marginRight: "10px", color: "#fff" }} />
                                <span>
                                    <NavLink to="/onlineschools" className={classes.header__link_active} onClick={handleClick}>
                                        Онлайн-школы
                                    </NavLink>
                                </span>
                            </li>
                            <li>
                                <MDBIcon fas icon="map-signs" style={{ fontSize: '25px', marginRight: "10px", color: "#fff" }} />
                                <span>
                                    <NavLink to="/vacancies" className={classes.header__link_active} onClick={handleClick}>
                                        Вакансии
                                    </NavLink>
                                </span>
                            </li>
                            <li>
                                <MDBIcon fas icon="sitemap" style={{ fontSize: '25px', marginRight: "10px", color: "#fff" }} />
                                <span>
                                    <NavLink to="/about" className={classes.header__link_active} onClick={handleClick}>
                                        О проекте
                                    </NavLink>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    :
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
                    </nav>
                }
                {
                    isActive
                        ?
                        <div className={classes.header__burger_active} onClick={handleClick}>
                            <span>
                            </span>
                        </div>
                        :
                        <div className={classes.header__burger} onClick={handleClick}>
                            <span>
                            </span>
                        </div>
                }




                {
                    /*
                    <div className={isActive ? 'header__burger active' : 'header__burger'} onClick={handleClick}>
                    <span>
                    </span>
                </div>
                    */
                }
            </div>
        </header >
    )
}

export default Header;
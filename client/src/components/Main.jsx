import React from "react";
import classes from "../css/Main.module.css";
import { Typography } from 'antd';
const { Title } = Typography;

const Main = () => {
    return (
        <div className={classes.main}>
            <aside className={classes.sidebar}>
                <nav className={classes.sidebar__menu}>
                    <ul className={classes.sidebar__list}>
                        <li>
                            <a href="#" className={classes.sidebar__link}>Консультация</a>
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
                    </ul>
                </nav>
            </aside>
            <section className={classes.content}>
                <div className={classes.content__title}>
                    <Title>Все варианты аренды</Title>
                </div>
                <section className={classes.gallery + " " + classes.gallery}>
                    <div className={classes.gallery__title}>
                        <Title level={2}>Объекты</Title>
                    </div>
                    <div className={classes.gallery__items}>
                        <div className={classes.gallery__item}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.gallery__item}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.gallery__item + " " + classes.gallery__item_big}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.gallery__item}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.gallery__item}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </div>
                    </div>
                </section>
                <section className={classes.content__products + " " + classes.products}>
                    <div className={classes.products__title}>
                        <Title level={2}>Услуги</Title>
                    </div>
                    <div className={classes.products__items}>
                        <div className={classes.products__item}>
                            <a href="#" className={classes.products__image}>
                                <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                            </a>
                            <a href="#" className={classes.products__name}>Сдается кабинет</a>
                            <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                            <a href="#" className={classes.products__price}>80 000 тг</a>
                            <a href="#" className={classes.products__button}>Подробнее</a>
                        </div>
                        <div className={classes.products__item}>
                            <a href="#" className={classes.products__image}>
                                <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                            </a>
                            <a href="#" className={classes.products__name}>Сдается кабинет</a>
                            <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                            <a href="#" className={classes.products__price}>80 000 тг</a>
                            <a href="#" className={classes.products__button}>Подробнее</a>
                        </div>
                        <div className={classes.products__item}>
                            <a href="#" className={classes.products__image}>
                                <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                            </a>
                            <a href="#" className={classes.products__name}>Сдается кабинет</a>
                            <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                            <a href="#" className={classes.products__price}>80 000 тг</a>
                            <a href="#" className={classes.products__button}>Подробнее</a>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Main;
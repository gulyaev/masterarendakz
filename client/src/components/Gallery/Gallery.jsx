import React from "react";
import classes from "../../css/Gallery.module.css";
import { NavLink } from 'react-router-dom';
import { Button, Tag } from 'antd';
import { MDBIcon } from 'mdbreact';
import MediaQuery from 'react-responsive';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const Gallery = () => {
    return (
        <div className={classes.gallery}>
            <NavLink to="/forsellers">
                <MediaQuery maxWidth={568}>
                    <Button type="primary" block size="large" className={classes.gallery__topbutton}>
                        СДАТЬ В АРЕНДУ ОБЪЕКТ
                        <MDBIcon className={classes.gallery__pointer} fas icon="hand-point-up" size='2x' />
                    </Button>
                </MediaQuery>

                <MediaQuery minWidth={569}>
                    <Button type="primary" block size="large" className={classes.gallery__topbutton}>
                        СДАТЬ В АРЕНДУ КАБИНЕТ / КРЕСЛО / СТОЛ / КУШЕТКУ / САЛОН
                        <MDBIcon className={classes.gallery__pointer} fas icon="hand-point-up" size='2x' />
                    </Button>
                </MediaQuery>

            </NavLink>
            <div className={classes.gallery__title}>
                <Title level={2}>Галерея аренды:</Title>
            </div>
            <section className={classes.gallery__list + " " + classes.list}>
                <div className={classes.list__block + " " + classes.block}>
                    <div className={classes.block__items}>
                        <div className={classes.block__item}>
                            <img src={require("../../img/gohakali/masterarendakz1.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/gohakali/masterarendakz2.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item + " " + classes.block__item_big}>
                            <img src={require("../../img/gohakali/masterarendakz3.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/gohakali/masterarendakz4.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/gohakali/masterarendakz1.JPG")} alt="masterarendakz" />
                        </div>
                    </div>
                    <div className={classes.block__description}>
                        <Title level={3}>Сдам в аренду место для маникюра и педикюра</Title>
                        <div className={classes.block__text}>
                            <Text>
                                Сдам в аренду место для маникюра и педикюра (график педикюра нужно согласовать с мастером).
                                Есть все необходимое: зона стерилизации, кофе, чай, туалет в кабинете.
                                В кабинете работает 2 мастера. Можно пользоваться гель-лаками и прочими вещами для дизайна.
                                Кабинет работает с 10:00 до 22:00 (можно и позже и раньше, если предупредить). Будет свой ключ.
                                Для клиента есть все необходимое. Находимся в центре города. Будет лучше, если писать на ватсап. Цена 80 000 тг.
                                8 705 511 21 11.
                            </Text>
                        </div>
                        <div>
                            <div className={classes.block__priceandnumber}>
                                <h4><span class="badge badge-primary">80 000 тг</span></h4>
                                <h4><span class="badge badge-success">8 705 511 21 11</span></h4>
                            </div>
                            <Tag>Алматы</Tag>
                        </div>
                    </div>
                </div>

                <div className={classes.list__block + " " + classes.block}>
                    <div className={classes.block__items}>
                        <div className={classes.block__item}>
                            <img src={require("../../img/ainur/masterarendakz1.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/ainur/masterarendakz2.JPG")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item + " " + classes.block__item_big}>
                            <img src={require("../../img/ainur/masterarendakz3.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/ainur/masterarendakz4.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/ainur/masterarendakz5.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/ainur/masterarendakz6.jpg")} alt="masterarendakz" />
                        </div>
                    </div>
                    <div className={classes.block__description}>
                        <Title level={3}>Сдам в аренду кушетки и зеркало для визажиста</Title>
                        <div className={classes.block__text}>
                            <Text>
                                Сдам в аренду кушетки и зеркало для визажиста.
                                В кабинете работает мастер по шугарингу. Аренда кушеток по 25 000 тг / месяц каждая. Зеркало визажиста 25 000 тг. / месяц.
                                Кабинет находится по адресу Караганда, Гоголя 31, остановка Хлебзавод.
                            </Text>
                        </div>
                        <div>
                            <div className={classes.block__priceandnumber}>
                                <h4><span class="badge badge-primary">25 000 тг</span></h4>
                                <h4><span class="badge badge-success">8 705 588 15 29</span></h4>
                            </div>
                            <Tag>Караганда</Tag>
                        </div>
                    </div>
                </div>

                <div className={classes.list__block + " " + classes.block}>
                    <div className={classes.block__items}>
                        <div className={classes.block__item}>
                            <img src={require("../../img/karaganda/masterarendakz1.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/karaganda/masterarendakz2.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item + " " + classes.block__item_big}>
                            <img src={require("../../img/karaganda/masterarendakz3.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/karaganda/masterarendakz4.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/karaganda/masterarendakz5.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/karaganda/masterarendakz6.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/karaganda/masterarendakz7.jpg")} alt="masterarendakz" />
                        </div>
                        <div className={classes.block__item}>
                            <img src={require("../../img/karaganda/masterarendakz8.jpg")} alt="masterarendakz" />
                        </div>
                    </div>
                    <div className={classes.block__description}>
                        <Title level={3}>Сдается в аренду кабинет-студия</Title>
                        <div className={classes.block__text}>
                            <Text>
                                Сдается в аренду кабинет-студия!
                                Готовый бизнес для косметологов, массажистов и т.д.
                                Идеально подходит для начинающих мастеров, а также для действующих!
                            </Text>
                        </div>
                        <div>
                            <div className={classes.block__priceandnumber}>
                                <h4><span class="badge badge-primary">250 000 тг</span></h4>
                                <h4><span class="badge badge-success">8 701 544 92 43</span></h4>
                            </div>
                            <Tag>Караганда</Tag>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Gallery;
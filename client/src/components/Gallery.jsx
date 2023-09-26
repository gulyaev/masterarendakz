import React from "react";
import classes from "../css/Main.module.css";
import { Typography } from 'antd';
const { Title } = Typography;

const Gallery = () => {
    return (
        <div>
            <div className={classes.content__title}>
                <Title>Актуальные</Title>
            </div>
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
                        <a href="#" className={classes.products__name}>Реклама ваших услуг в ватсапп (рассылки)</a>
                        <a href="#" className={classes.products__text}>Вы можете делегировать один из интументов маркетинга нам</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="#" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>Торговое представительство вашего бренда</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="#" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>Интервью или прямой эфир с вами</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="https://www.instagram.com/p/Cw0akg2tRam/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>Гостевой пост от вас на нашем сайте</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="https://www.instagram.com/p/Cw0akg2tRam/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>SMM продвижение и таргетинговая реклама вашего акаунта</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="https://www.instagram.com/p/Cw0akg2tRam/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>Разработка сайта для салона / школы или для отдельного мастера</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="https://www.instagram.com/p/Cw0akg2tRam/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>Реклама вашего мероприятия</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="https://www.instagram.com/p/Cw0akg2tRam/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>Реклама ваших услуг</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="https://www.instagram.com/p/Cw0akg2tRam/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className={classes.products__button}>Подробнее</a>
                    </div>
                    <div className={classes.products__item}>
                        <a href="#" className={classes.products__image}>
                            <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                        </a>
                        <a href="#" className={classes.products__name}>Реклама ваших курсов в разделе Школа</a>
                        <a href="#" className={classes.products__text}>Сдается кабинет в салоне красоты в районе центра</a>
                        <a href="#" className={classes.products__price}>80 000 тг</a>
                        <a href="https://www.instagram.com/p/Cw0akg2tRam/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" className={classes.products__button}>Подробнее</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;
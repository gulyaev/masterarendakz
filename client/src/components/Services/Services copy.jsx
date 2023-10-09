import React from "react";
import classes from "../css/Main.module.css";
import { Typography } from 'antd';
const { Title } = Typography;

const Services = () => {
    return (
        <section className={classes.content__products + " " + classes.products}>
            <div>Персонал который мы подбираем для вас:</div>
            <ul>
                <li>Парикмахер</li>
                <li>Косметолог</li>
                <li>Лешмейкер</li>
                <li>Бровист</li>
                <li>Визажист</li>
                <li>Мастер маникюра</li>
            </ul>
            <div>Подбор помещений и поиск кабинетов</div>
            <div>Сдача в аренду кабинетов</div>
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
    )
}

export default Services;
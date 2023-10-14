import React, { useState } from "react";
import classes from "../../../css/HomeInfo.module.css";
import { NavLink } from "react-router-dom";
import { Card } from 'antd';
import { Divider, Steps } from 'antd';
import MediaQuery from 'react-responsive'
import { MDBIcon } from 'mdbreact';
import { Typography } from 'antd';
const { Title } = Typography;



const HomeInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const { Step } = Steps;
    const { Meta } = Card;

    const text4 = `Да, мы занимаемся подбором аренды под ваши требования. Ищем арендодателей в приоритетном порядке - вы будете в курсе аренды в числе первых. Контакты в открытый доступ не предоставляем.`;
    const text5 = `Рекламу об аренде присылаете в директ инстаграм того аккаунта в котором хотите разместить вашу рекламу. Либо на ватсап: 87056994568 с указанием что хотите заказать рекламу.`;
    const text6 = `Мы можем найти для вас помещение под ваши требования. Ищем арендодателей в приоритетном порядке - вы будете в курсе аренды в числе первых. Контакты арендодателя направляем вам и в открытый доступ не предоставляем.`;


    const itemsArenda = [
        {
            key: '1',
            label: 'Через вас реально найти в аренду салон красоты в городе?',
            children: <p>{text4}</p>,
        },
        {
            key: '2',
            label: 'Как можно дать рекламу по сдаче в аренду кресла?',
            children: <p>{text5}</p>,
        },
        {
            key: '3',
            label: 'Я мастер и мне нужно найти кабинет для работы. Как мне быть?',
            children: <p>{text5}</p>,
        },
    ];

    const text1 = `Подбор начинается сразу же после обсуждения и подписания договора и заявки.Мы проводим экспресс-анализ заявки, прорабатываем наилучшие инструменты для поиска, запускаем поиск, проводим предварительные интервью с соискателями, отбирая лучших, и в течении первых 3-5 дней направляем к вам первых претендентов на вакансию. По практике весь процесс обычно занимает от 5 до 20 дней.`;
    const text2 = `Мы предоставляем гарантийную замену до 3х месяцев, если вам не подошёл наш кандидат.`;
    const text3 = `Очень небольшой процент отказа, так как на первых этапах подбираем кандидата соответствующего требованиям. Но если это происходит, мы предоставляем гарантию на каждого подобранного сотрудника. Если в течении испытательного срока вы поймете, что специалист не подходит, мы подберем замену.`;

    const items = [
        {
            key: '1',
            label: 'Сколько времени займет подбор?',
            children: <p>{text1}</p>,
        },
        {
            key: '2',
            label: 'Какие гарантии?',
            children: <p>{text2}</p>,
        },
        {
            key: '3',
            label: 'Если кандидат не подойдет?',
            children: <p>{text3}</p>,
        },
    ];

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes.homeinfo}>
            <div className={classes.homeinfo__title}>
                <Title>Актуальное</Title>
            </div>
            <div className={classes.homeinfo__ourClients + " " + classes.ourClients} style={{ marginBottom: "30px" }}>
                <MediaQuery maxWidth={500}>
                    <Title style={{ fontSize: '6vw' }}>Наши клиенты и спонсоры</Title>
                </MediaQuery>
                <MediaQuery minWidth={500}>
                    <Title>Наши клиенты и спонсоры</Title>
                </MediaQuery>
            </div>
            <div className={classes.homeinfo__clientCard}>
                <Card
                    hoverable
                    cover={
                        <div style={{ overflow: "hidden", height: "500px" }}>
                            <img
                                alt="Ногтевая студия. Заказчик на рекламу вакансий."
                                style={{ objectFit: "cover", maxWidth: "100%" }}
                                src={require("../../../img/masterarendakz__deville.jpg")}
                            />
                        </div>
                    }
                    onClick={() => { }}

                >
                    <Meta title="@deville_nails" description="DE Ville - Ногтевая студия. Заказчик на рекламу вакансий. г.Алматы" />
                </Card>

                <Card
                    hoverable
                    cover={
                        <div style={{ overflow: "hidden", height: "500px" }}>
                            <img
                                alt="Ногтевая студия. Заказчик на рекламу вакансий. г.Алматы"
                                style={{ objectFit: "cover", maxWidth: "100%" }}
                                src={require("../../../img/masterarendakz__gohakali.jpg")}
                            />
                        </div>
                    }
                    onClick={() => { }}
                >
                    <Meta title="@gohakali" description="Ногтевая студия. Заказчик объявлений по аренде. г.Алматы" />
                </Card>

                <Card
                    hoverable
                    cover={
                        <div style={{ overflow: "hidden", height: "500px" }}>
                            <img
                                alt="Студия восковой и сахарной лепиляции. Заказчик рекламы по аренде. г.Караганда"
                                style={{ objectFit: "cover", maxWidth: "100%" }}
                                src={require("../../../img/masterarendakz_ainur.jpeg")}
                            />
                        </div>
                    }
                    onClick={() => { }}
                >
                    <Meta title="@sugaring_karaganda_ainur" description="Студия восковой и сахарной лепиляции. Заказчик рекламы по аренде. г.Караганда" />
                </Card>
            </div>

            <Divider className={classes.homeinfo__divider} />

            <div className={classes.homeinfo__linkToGallery + " " + classes.linkToGallery}>
                <div className={classes.linkToGallery__img}>
                    <img src={require("../../../img/masterarenda.PNG")} alt="masterarendakz" />
                </div>
                <div className={classes.linkToGallery__uberlink}>
                    <MediaQuery maxWidth={500}>
                        <NavLink to="/gallery" className={classes.linkToGallery__link}>
                            <Title style={{ color: "#008000", fontSize: '6vw' }}>Все варианты аренды здесь</Title>
                        </NavLink>
                    </MediaQuery>
                    <MediaQuery minWidth={500}>
                        <NavLink to="/gallery" className={classes.linkToGallery__link}>
                            <Title style={{ color: "#008000" }}>Все варианты аренды здесь</Title>
                        </NavLink>
                    </MediaQuery>
                    <NavLink to="/gallery">
                        <MDBIcon className={classes.linkToGallery__pointer} fas icon="hand-point-up" size='3x' />
                    </NavLink>
                </div>
                <div className={classes.linkToGallery__empty}></div>
            </div>
        </div>
    )
}

export default HomeInfo;
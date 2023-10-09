import React, { useState } from "react";
import classes from "../../../css/HomeInfo.module.css";
import { NavLink } from "react-router-dom";
import { Card } from 'antd';
import { Divider, Steps } from 'antd';
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
        <div className={classes.profileinfo}>
            <div className={classes.content__title}>
                <Title>Актуальное</Title>
            </div>
            <div className={classes.profileinfo__ourClients + " " + classes.ourClients} style={{ marginBottom: "30px" }}>
                <Title>Наши клиенты и спонсоры</Title>
                <div className={classes.ourClients__clientCard}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="Ногтевая студия. Заказчик на рекламу вакансий." src={require("../../../img/masterarendakz__deville.jpg")} />}
                        onClick={() => { }}
                    >
                        <Meta title="@deville_nails" description="DE Ville - Ногтевая студия. Заказчик на рекламу вакансий. г.Алматы" />
                    </Card>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="Ногтевая студия. Заказчик на рекламу вакансий. г.Алматы" src={require("../../../img/masterarendakz__gohakali.jpg")} />}
                        onClick={() => { }}
                    >
                        <Meta title="@gohakali" description="Ногтевая студия. Заказчик объявлений по аренде. г.Алматы" />
                    </Card>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="Студия восковой и сахарной лепиляции. Заказчик рекламы по аренде. г.Караганда" src={require("../../../img/masterarendakz_ainur.jpeg")} />}
                        onClick={() => { }}
                    >
                        <Meta title="@sugaring_karaganda_ainur" description="Студия восковой и сахарной лепиляции. Заказчик рекламы по аренде. г.Караганда" />
                    </Card>
                </div>
            </div>
            <div className={classes.profileinfo__linkToGallery}>
                <div className={classes.profileinfo__profileinfoimg}>
                    <img src={require("../../../img/masterarenda.PNG")} alt="masterarendakz" />
                </div>
                <div>
                    <NavLink to="/gallery" className={classes.profileinfo__trueLink}>
                        <Title style={{ color: "#77608d" }}>Ссылка: Все варианты аренды здесь</Title>
                    </NavLink>
                </div>
            </div>
            <Divider className={classes.profileinfo__divider} />
            <div className={classes.content__title}>
                <NavLink to="/services" className={classes.profileinfo__trueLink}>
                    <Title style={{ color: "#77608d" }}>Ссылка: Услуги, которые мы предоставляем</Title>
                </NavLink>
            </div>
        </div>
    )
}

export default HomeInfo;
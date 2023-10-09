import React from "react";
import classes from "../../css/Study.module.css";
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title, Paragraph } = Typography;

const Study = () => {
    return (
        <div className={classes.study}>
            <div className={classes.study__title}>
                <Title level={2}>Устал быть простым мастером? Хочешь рости и развиваться? Переходи в менеджмент! Получи профессию "Риэлтор коммерческой недвижимости в бьюти" и стань нашим партнером.</Title>
            </div>
            <div className={classes.study__title}>
                <Title level={2}>Из индустрии красоты в менеджмент. Как мастеру стать менеджером и идти в ногу со временем?</Title>
            </div>
            <div className={classes.study__title}>
                <Title level={2}>Франшиза</Title>
            </div>
            <div className={classes.study__title}>
                <Title level={2}>Первые деньги в первый месяц. Стоимость курса <span>500 000 тг.</span>  350 000 тг.</Title>
            </div>
            <div className={classes.study__title}>
                <Title level={2}>Записаться на собеседование.</Title>
            </div>
        </div >
    )
}

export default Study;
import React from "react";
import classes from "../../css/OnlineSchools.module.css";
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title, Paragraph } = Typography;

const OnlineSchools = () => {
    return (
        <div className={classes.onlineschools}>
            <div className={classes.onlineschools__title}>
                <Title level={2}>Какие онлайн школы есть?</Title>
                <Title level={2}>Открой онлайн школу вместе с masterarenda.kz</Title>
                <Title level={2}>Блог об онлайн школах и об онлайн образовании</Title>
                <Title level={2}>Тг - копия / продюссирование</Title>
            </div>
        </div >
    )
}

export default OnlineSchools;
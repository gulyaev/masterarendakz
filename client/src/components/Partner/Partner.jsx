import React from "react";
import classes from "../../css/Partner.module.css";
import { List, Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title } = Typography;

const data = [
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Взаимная реклама, обмен аудиторией:</span>  <br /> у нас с вами примерно одинаковое количество подписчиков и мы делаем взаимную рекламу "Репост за репост" - вы у себя публикуете наш пост и ссылку на нас, а мы в ответ публикуем у себя ваш пост и ссылку на вас.</div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Совместные прямые эфиры.</span>  <br /> Ведем совместные эфиры на заданную тему.</div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Интервью онлайн / оффлайн.</span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Пост в этом блоге с сылками на вас.</span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>
        <NavLink to="/study">
            Обучение у нас + вы наш партнер.
        </NavLink>
    </span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Приглашение на оффлайн мероприятие и взаимный PR.</span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Серийный перекрестный взаимный PR.</span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Спонсирование.</span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Риэлторы и Агенства недвижимости.</span></div>,
];

const Partner = () => {
    return (
        <div className={classes.partner}>
            <div className={classes.partner__title}>
                <Title level={2}>Варианты сотрудничества и партнерство</Title>
                <List
                    size="large"
                    footer={<div style={{ fontWeight: "bold", color: "green", textAlign: "center" }}>masterarenda.kz</div>}
                    bordered
                    dataSource={data}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </div>
        </div >
    )
}

export default Partner;
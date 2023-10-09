import React from "react";
import classes from "../../css/Vacancies.module.css";
import { List, Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title } = Typography;

const data = [
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Требуется косметолог</span>  <br /> Ищем косметолога</div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Требуется администратор</span>  <br /> Требования: пунктуальность</div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Требуется мастер маникюра</span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Требуется парикмахер</span></div>,
];

const Vacancies = () => {
    return (
        <div className={classes.vacancies}>
            <div className={classes.vacancies__title}>
                <Title level={2}>Вакансии</Title>
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

export default Vacancies;
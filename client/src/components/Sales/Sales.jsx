import React from "react";
import classes from "../../css/Sales.module.css";
import { List, Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title } = Typography;

const data = [
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Акция</span>  <br /> Акция Алматы</div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Акция ногти</span>  <br /> Акция ногти</div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Акция маникюр</span></div>,
    <div> <span style={{ fontWeight: "bold", color: "green" }}>Акция стрижки</span></div>,
];

const Sales = () => {
    return (
        <div className={classes.sales}>
            <div className={classes.sales__title}>
                <Title level={2}>Акции</Title>
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

export default Sales;
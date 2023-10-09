import React, { useState } from "react";
import classes from "../../css/Forclients.module.css";
import { Button, Modal } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title } = Typography;


const Forclients = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div>
            <div className={classes.forclients}>
                <div className={classes.forclients__title}>
                    <Title>Хотите снять кресло / кабинет / кушетку / стол ?</Title>
                    <div className={classes.forclients__linkToGallery}>
                        <div className={classes.forclients__forclientssubimg}>
                            <img src={require("../../img/masterarenda.PNG")} alt="masterarendakz" />
                        </div>
                        <div>
                            <NavLink to="/gallery" className={classes.forclients__trueLink}>
                                <Title style={{ color: "#77608d" }}>Все варианты аренды здесь</Title>
                            </NavLink>
                        </div>
                    </div>
                    <Title level={4} style={{ marginBottom: "20px" }}>Хотите найти помещение? - Поможем. Услуга по подбору помещения. Или просто разместите объявление у нас!</Title>
                    <Button type="primary" onClick={showModal} size="large" style={{ background: "green", marginBottom: "100px" }}>
                        Заказать услугу
                    </Button>
                    <Modal title="Для связи с нами напишите нам:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div style={{ display: 'grid', gridTemplate: '1fr / 1fr 6fr', alignItems: 'center' }} >
                            <div>
                                <a href="https://wa.me/79520544878?text=Здравствуйте!%20Я%20с%20сайта%20masterarenda.kz"><WhatsAppOutlined style={{ fontSize: '50px', color: '#387434' }} /></a>
                            </div>
                            <div>
                                <a href="https://wa.me/79520544878?text=Здравствуйте!%20Я%20с%20сайта%20masterarenda.kz">WhatsApp: 89520544878</a>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className={classes.forclients__forclientsimg}>
                    <img src={require("../../img/masterarendakz.JPG")} alt="masterarendakz" />
                </div>
            </div>
        </div>
    )
}

export default Forclients;
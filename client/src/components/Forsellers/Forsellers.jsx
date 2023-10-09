import React, { useState } from "react";
import classes from "../../css/Forsellers.module.css";
import { Button, Modal } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

import { Typography } from 'antd';
const { Title } = Typography;


const data = Array.from({
    length: 1,
}).map((_, i) => ({
    href: '/blog/1',
    title: `ПЛЮСЫ СДАЧИ ПОМЕЩЕНИЯ В АРЕНДУ ПОД САЛОН (ЧИТАЙТЕ В БЛОГЕ)`,
    avatar: require("../../img/masterarenda.PNG"),
    description:
        'ХОТИТЕ СДАТЬ СВОЕ ПОМЕЩЕНИЕ В АРЕНДУ? ПОЧЕМУ БЫ НЕ СДАТЬ ЕГО ПОД САЛОН ?',
    content:
        'Сейчас много владельцев хотят сдать свое помещение в аренду, публикуя объявление для представителей всех ниш рынка, ища тех кто согласится снять его помещение, особо не разбираясь в специфике ниши. ',
}));
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


const Forsellers = () => {
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
            <div className={classes.forselers}>
                <div className={classes.forselers__title}>
                    <Title>Как подать объявление об аренде и какие условия ?</Title>
                    <Title level={4} style={{ marginBottom: "20px" }}>Нужны сотрудники на аренду? Разместите объявление у нас!</Title>
                    <Button type="primary" onClick={showModal} size="large" style={{ background: "green", marginBottom: "100px" }}>
                        Разместить аренду
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
                    <Title>Полезная информация для арендодателей: </Title>
                </div>
                <div className={classes.forselers__forselersimg}>
                    <img src={require("../../img/masterarendakz.JPG")} alt="masterarendakz" />
                </div>
            </div>
            <List
                itemLayout="vertical"
                size="default"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Forsellers;
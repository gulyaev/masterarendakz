import React, { useState } from "react";
import classes from "../../css/Statistics.module.css";
import { Button, Modal } from 'antd';
import { Image } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Paragraph } = Typography;
const { Title } = Typography;

const Statistics = () => {
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
        <div className={classes.statistics}>
            <div className={classes.statistics__title}>
                <Title>Наша Статистика</Title>
                <Paragraph style={{ fontSize: '17px' }}>
                    Статистика нашего аккаунта в Инстаграм на 20.08.2023. Все подписчики живые, наша ЦА - мастера индустрии красоты. Нет накрученных просмотров и подписчиков. Количество просмотров всегда значительно выше количества подписчиков, что свидетельствует о том что группа живая и нет неактивного «балласта» в подписках.

                    Так же у нас есть телеграмм канал - там просто настоящая жара по конверсии просмотров всех публикаций и точно ничего не ускользает от внимания подписчиков.

                    Эффективность нашего аккаунта в том что размещая единожды вашу публикацию она работает всегда до тех пор пока мы ее не уберем - так как она висит на стене постоянно и пользователи постоянно листают нашу ленту и видят вашу публикацию. Долговременный эффект рекламы.

                    Вы можете разместить свое объявление об аренде или вакансии, рекламу у нас. Для этого пишите в директ инстаграм. Объявления и реклама платные, цена по договоренности с админом.

                    Подписывайтесь на наш инстаграм. Ссылка на аккаунт: https://instagram.com/masterarendakz?igshid=NTc4MTIwNjQ2YQ==

                    Подписывайтесь на наш телеграмм-канал. Ссылка на наш телеграм канал в шапке профиля.
                    Наш WhatsApp: 87056994568
                    #алматы #алматыаренда #алматыресницы #алматыресницыобучение #алматыбучение
                    #салонкрасотыаренда #салонкрасоты
                </Paragraph>
            </div>
            <Title level={2}>Данные на 05.10.2023</Title>
            <div className={classes.statistics__data}>
                <div style={{ marginRight: "50px" }}>
                    <Title level={4}>по охватам сторис:</Title>
                    <Image.PreviewGroup
                        items={[
                            require("../../img/statistics05.10.23.jpg"),
                            require("../../img/statisticsohvaty05.10.23.jpg"),
                        ]}
                    >
                        <Image
                            width={300}
                            src={require("../../img/statistics05.10.23.jpg")}
                        />
                    </Image.PreviewGroup >
                </div>
                <dir>
                    <Title level={4}>подписки, подписчики, публикации:</Title>
                    <Image.PreviewGroup
                        items={[

                        ]}
                    >
                        <Image
                            width={300}
                            src={require("../../img/masterarendakz_almaty_statistics.jpeg")}
                        />
                    </Image.PreviewGroup >
                </dir>
            </div>

            <Title level={2}>Данные на 20.08.2023</Title>
            <Title level={4}>по публикациям:</Title>
            <div className={classes.statistics__data}>
                <Image.PreviewGroup
                    items={[
                        require("../../img/statisticsohvaty20.08.23.jpg"),
                    ]}
                >
                    <Image
                        width={300}
                        src={require("../../img/statisticsohvaty20.08.23.jpg")}
                    />
                </Image.PreviewGroup>
            </div>
            <Title level={4} style={{ marginBottom: "20px" }}>Нужны сотрудники на аренду? Разместите объявление у нас!</Title>
            <Button type="primary" onClick={showModal} size="large" style={{ background: "green" }}>
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
        </div >
    )
}

export default Statistics;
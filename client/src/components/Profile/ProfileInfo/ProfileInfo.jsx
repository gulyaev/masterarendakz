import React, { useState } from "react";
import classes from "../../../css/Profileinfo.module.css";
import { NavLink } from "react-router-dom";
import { Button, Modal } from 'antd';
import { Card, Col, Row } from 'antd';
import { Divider, Steps } from 'antd';
import { Collapse } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;


const ProfileInfo = () => {
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
            <div className={classes.profileinfo__ourClients + " " + classes.ourClients}>
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
                        <Meta title="@gohakali" description="Заказчик объявлений по аренде. г.Алматы" />
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


            <div className={classes.profileinfo__arenda + " " + classes.arenda}>
                <div className={classes.recrut__title}>
                    <Title>Предоставляем услуги по подбору помещений для аренды под ваш бизнес</Title>
                    <Title level={4}>Подберём помещение для вашего бизнеса под ваши требования и пожелания.</Title>
                    <Button type="primary" onClick={showModal} size="large" style={{ background: "green" }}>
                        Найти аренду
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
                <div className={classes.recrut__services}>
                    <img src={require("../../../img/masterarendamain.png")} alt="masterarendakz" />
                </div>
            </div>
            <div>
                <Title>Вопросы, которые нам часто задают по аренде</Title>
                <Collapse items={itemsArenda} defaultActiveKey={['1']} onChange={onChange} />
            </div>
            <Divider className={classes.profileinfo__divider} />

            <div className={classes.profileinfo__recrut + " " + classes.recrut}>
                <div className={classes.recrut__title}>
                    <Title>Предоставляем услуги по подбору персонала в сфере бьюти, медицины и менеджмента</Title>
                    <Title level={4}>Подберём компетентных сотрудников для вашего бизнеса с гарантией замены до 3-х месяцев. Первые кандидаты через 3-5 дней.</Title>
                    <Button type="primary" onClick={showModal} size="large" style={{ background: "green" }}>
                        Найти сотрудника
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
                <div className={classes.recrut__services}>
                    <img src={require("../../../img/masterarendamain.png")} alt="masterarendakz" />
                </div>
            </div>


            <div className={classes.profileinfo__whychoseus}>
                <Title>Почему клиенты доверяют нам подбор персонала</Title>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Профессионально подбираем" bordered={true} hoverable={true}>
                            Наши специалисты имеют компетенцию и отлично разбираются в нюансах каждого из представленных направлений.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Оперативно закрываем вакансии" bordered={false} hoverable={true}>
                            Мы закрываем вакансии в сжатые сроки. Самых первых кандидатов предоставляем в срок от 3 до 5 дней.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Ценим ваше время" bordered={false} hoverable={true}>
                            Предоставляем только проверенных кандидатов, прошедших нашу систему отбора.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Прозрачная схема работы" bordered={false} hoverable={true}>
                            Наша система работы состоит из понятных этапов и позволяет находить сотрудников наиболее быстро и эффективно.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Гарантируем результат" bordered={false} hoverable={true}>
                            Предоставляем гарантийную замену до 3х месяцев, если вам не подошёл наш кандидат.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Индивидуальный подход" bordered={false} hoverable={true}>
                            За вами будет закреплен персональный менеджер, который будет находиться на связи и информировать вас о ходе работы
                        </Card>
                    </Col>
                </Row>
                <Button type="primary" onClick={showModal} size="large" style={{ background: "green" }}>
                    Подобрать сотрудников
                </Button>
            </div>
            <div className={classes.profileinfo__positions}>
                <Title>Какие вакансии мы закрываем</Title>
                <p>Возьмём на себя все HR-задачи по подбору и оперативно найдём компетентных специалистов под ключ.</p>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Индустрия красоты" bordered={true} hoverable={true}>
                            Наши специалисты имеют компетенцию и отлично разбираются в нюансах каждого из представленных направлений.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Медицинский персонал" bordered={false} hoverable={true}>
                            Мы закрываем вакансии в сжатые сроки. Самых первых кандидатов предоставляем в срок от 3 до 5 дней.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Управленческий персонал" bordered={false} hoverable={true}>
                            Предоставляем только проверенных кандидатов, прошедших нашу систему отбора.
                        </Card>
                    </Col>
                </Row>
                <Button type="primary" onClick={showModal} size="large" style={{ background: "green" }}>
                    Подобрать сотрудников
                </Button>
            </div>
            <div className={classes.profileinfo__otherhr}>
                <Title>Помимо подбора поможем с другими HR задачами</Title>
                <p>Наша команда поможет с отдельными HR задачами вашей компании.</p>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Формирование команд под ключ" bordered={true} hoverable={true}>
                            <p>Полностью формируем команды под ваши проекты.</p>
                            Если вы планируете запуск нового направления с «нуля» либо у вас есть работающий бизнес, для которого нужна креативная и сильная команда, мы готовы вам в этом помочь! Подберем команду для решения краткосрочного проекта или задачи
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Кадровый консалтинг" bordered={false} hoverable={true}>
                            <p>Оценка персонала, услуга: «тайный покупатель».</p>
                            <p>Проведём оценку качества обслуживания и сервиса на вашем предприятии (салон красоты, медицинский сектор, другое). Оценка качества проводится специально подготовленными сотрудниками агентства в роли реальных потребителей услуг/товаров.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
                <Title>Как мы работаем?</Title>
                <Steps current={current}
                    onChange={onChange}
                    direction="vertical"
                    style={{ "color": "blueviolet" }}>
                    <Step
                        title="Принимаем заявку"
                        description="Согласовываем с вами все необходимые моменты по вакансиям."
                    />
                    <Step
                        title="Проводим экспертную оценку"
                        description="Проводим экспресс-анализ вакансии, для составления портрета эффективного сотрудника."
                    />
                    <Step
                        title="Запускаем поиск"
                        description="Проводим экспресс-анализ вакансии, для составления портрета эффективного сотрудника."
                    />
                    <Step
                        title="Отбираем подходящих соискателей"
                        description="Выбираем наиболее подходящих кандидатов. Проводим собеседования кандидатов, оцениваем их и отбираем лучших."
                    />
                    <Step
                        title="Предоставление кандидата"
                        description="Предоставляем вам лучших кандидатов. Кандидатов, которых вы выбрали приглашаем на собеседование в ваш офис. Общаемся в течение испытательного срока сотрудника. Выясняем, какие есть трудности, вопросы и решаем их.
                        В гарантийный период меняем сотрудника на нового бесплатно, если что-то пойдет не так."
                    />
                </Steps>
            </div>
            <div>
                <Title>Вопросы, которые нам часто задают по подбору</Title>
                <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
            </div>
        </div>
    )
}

export default ProfileInfo;
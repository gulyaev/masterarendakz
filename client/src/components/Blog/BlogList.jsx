import React from "react";
import classes from "../../css/Blog.module.css";

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

const data = Array.from({
    length: 1,
}).map((_, i) => ({
    href: '/blog/1',
    title: `ПЛЮСЫ СДАЧИ ПОМЕЩЕНИЯ В АРЕНДУ ПОД САЛОН`,
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

const BlogList = () => {
    return (
        <div className={classes.bloglist}>
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
        </div >
    )
}

export default BlogList;
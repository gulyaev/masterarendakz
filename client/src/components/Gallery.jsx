import React from "react";
import classes from "../css/Main.module.css";
import { Typography } from 'antd';
const { Title } = Typography;

const Gallery = () => {
    return (
        <div>
            <div className={classes.content__title}>
                <Title>Все варианты аренды</Title>
            </div>
            <section className={classes.gallery + " " + classes.gallery}>
                <div className={classes.gallery__title}>
                    <Title level={2}>Объекты</Title>
                </div>
                <div className={classes.gallery__items}>
                    <div className={classes.gallery__item}>
                        <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                    </div>
                    <div className={classes.gallery__item}>
                        <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                    </div>
                    <div className={classes.gallery__item + " " + classes.gallery__item_big}>
                        <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                    </div>
                    <div className={classes.gallery__item}>
                        <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                    </div>
                    <div className={classes.gallery__item}>
                        <img src={require("../img/masterarendakz.JPG")} alt="masterarendakz" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;
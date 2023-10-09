import React from "react";
import classes from "../css/Main.module.css";
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

const Gallery = () => {
    return (
        <div>
            <NavLink to="/forsellers">
                <Button type="primary" block size="large" style={{ background: "green", marginBottom: "50px" }}>
                    СДАТЬ В АРЕНДУ КАБИНЕТ / КРЕСЛО / СТОЛ / КУШЕТКУ / САЛОН
                </Button>
            </NavLink>
            <section className={classes.gallery + " " + classes.gallery}>
                <div className={classes.gallery__title}>
                    <Title level={2}>Галерея аренды:</Title>
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
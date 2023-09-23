import React from "react";
import "./css/App.css";
import { Typography } from 'antd';
const { Title } = Typography;

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <a href="#" className="header__logo"></a>
        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <a href="#" className="header__link">Консультация</a>
            </li>
            <li>
              <a href="#" className="header__link">Вакансии</a>
            </li>
            <li>
              <a href="#" className="header__link">Реклама</a>
            </li>
            <li>
              <a href="#" className="header__link">Арендодателям</a>
            </li>
            <li>
              <a href="#" className="header__link">Арендаторам</a>
            </li>
            <li>
              <a href="#" className="header__link">Блог</a>
            </li>
          </ul>
          <div className="header__burger">
            <span></span>
          </div>
        </nav>
      </header>
      <div className="main">
        <aside className="sidebar">
          <nav className="sidebar__menu">
            <ul className="sidebar__list">
              <li>
                <a href="#" className="sidebar__link">Консультация</a>
              </li>
              <li>
                <a href="#" className="sidebar__link">Вакансии</a>
              </li>
              <li>
                <a href="#" className="sidebar__link">Реклама</a>
              </li>
              <li>
                <a href="#" className="sidebar__link">Арендодателям</a>
              </li>
              <li>
                <a href="#" className="sidebar__link">Статистика</a>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="content">
          <div className="content__title">
            <Title>Все варианты аренды</Title>
          </div>
          <section className="content__gallery gallery">
            <div className="gallery__title">
              <Title level={2}>Объекты</Title>
            </div>
            <div className="gallery__items">
              <div className="gallery__item">
                <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
              </div>
              <div className="gallery__item">
                <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
              </div>
              <div className="gallery__item gallery__item_big">
                <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
              </div>
              <div className="gallery__item">
                <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
              </div>
              <div className="gallery__item">
                <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
              </div>
            </div>
          </section>
          <section className="content__products products">
            <div className="products__title">
              <Title level={2}>Услуги</Title>
            </div>
            <div className="products__items">
              <div className="products__item">
                <a href="#" className="products__image">
                  <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
                </a>
                <a href="#" className="products__name">Сдается кабинет</a>
                <a href="#" className="products__text">Сдается кабинет в салоне красоты в районе центра</a>
                <a href="#" className="products__price">80 000 тг</a>
                <a href="#" className="products__button">Подробнее</a>
              </div>
              <div className="products__item">
                <a href="#" className="products__image">
                  <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
                </a>
                <a href="#" className="products__name">Сдается кабинет</a>
                <a href="#" className="products__text">Сдается кабинет в салоне красоты в районе центра</a>
                <a href="#" className="products__price">80 000 тг</a>
                <a href="#" className="products__button">Подробнее</a>
              </div>
              <div className="products__item">
                <a href="#" className="products__image">
                  <img src={require("./img/masterarendakz.JPG")} alt="masterarendakz" />
                </a>
                <a href="#" className="products__name">Сдается кабинет</a>
                <a href="#" className="products__text">Сдается кабинет в салоне красоты в районе центра</a>
                <a href="#" className="products__price">80 000 тг</a>
                <a href="#" className="products__button">Подробнее</a>
              </div>
            </div>
          </section>
        </section>
      </div>
      <footer className="footer">
        <div className="footer__copy">
          Copy, 2023
        </div>
        <div className="footer__text">
          Все права защищены
        </div>
      </footer>
    </div>
  );
}

export default App;

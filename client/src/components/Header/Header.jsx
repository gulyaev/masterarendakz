import React from 'react';
import Headermenu from './Headermenu';
import classes from "../../css/Header.module.css";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__body}>
                <NavLink to="/" className={classes.header__logo}>
                    <img src={require("../../img/masterarenda.PNG")} alt="masterarendakz" />
                </NavLink>
                {
                    /*
                        <Headermenu />    
                   */
                }
            </div>
        </header >
    )
}

export default Header;
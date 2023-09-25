import React from "react";
import classes from "../css/Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__copy}>
                Copy, 2023
            </div>
            <div className={classes.footer__text}>
                Все права защищены
            </div>
        </footer>
    )
}

export default Footer;
import React from "react";
import classes from "../../css/Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__above + " " + classes.above}>
                Остались вопросы? Оставьте заявку или свяжитесь с нами любым удобным способом.
            </div>
            <div className={classes.footer__copy + " " + classes.copy}>
                CopyRight, 2023
            </div>
            <div className={classes.footer__text + " " + classes.text}>
                Все права защищены
            </div>
        </footer>
    )
}

export default Footer;
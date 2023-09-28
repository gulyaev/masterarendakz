import React from "react";
import classes from "../css/Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__users + " " + classes.users}>
                <div className={classes.users__item + " " + classes.active}>Анна</div>
                <div className={classes.users__item}>Александра</div>
                <div className={classes.users__item}>Вячеслав</div>
            </div>
            <div className={classes.dialogs__messages + " " + classes.messages}>
                <div className={classes.messages__item}>Привет</div>
                <div className={classes.messages__item}>Как дела ?</div>
                <section className={classes.gallery + " " + classes.gallery}></section>
            </div>

        </div>
    )
}

export default Dialogs;
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../css/Dialogs.module.css";

const DialogItem = (props) => {
    return (
        <div className={classes.users__item + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id} className={classes.users__item + " " + classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
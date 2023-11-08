import React from "react";
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <>
            <NavLink to={"http://localhost:3000/profile/" + props.id}>
                <div>{props.name}</div>
            </NavLink>
            <div style={{ marginBottom: "20px" }}>{props.prof}</div>
        </>
    )
}

export default User;
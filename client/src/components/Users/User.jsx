import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'antd';

const User = (props) => {
    return (
        <div style={{ marginBottom: "50px" }}>
            <NavLink to={"/profile/" + props.id}>
                <div>{props.name}</div>
            </NavLink>
            <div style={{ marginBottom: "10px" }}>{props.prof}</div>
            {
                props.followedlocal
                    ?
                    <Button
                        onClick={() => props.followUnfollowHandler()}
                        type="primary" size="small">
                        Отписаться
                    </Button>
                    :
                    <Button
                        onClick={() => props.followUnfollowHandler()}
                        type="primary" size="small">
                        Подписаться
                    </Button>
            }
        </div >
    )
}

export default User;
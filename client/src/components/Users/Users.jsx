import React from "react";
import User from "./User";
import axios from 'axios';

const Users = (props) => {
    if (props.usersData.length === 0) {
        axios.get("http://localhost:5000/api/user").then(response => {
            props.setUsers(
                [
                    response.data
                ]
            )
        })
    }

    let usersElements = props.usersData.map(usersItem => <User name={usersItem.name} prof={usersItem.prof} id={usersItem.id} />)

    return (
        <div>{usersElements}</div>
    )
}

export default Users;
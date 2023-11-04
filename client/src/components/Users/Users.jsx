import React from "react";
import User from "./User";
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';

class Users extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:5000/api/user").then(response => {
            this.props.setUsers(response.data)
        })
    }

    render() {
        let usersElements = this.props.usersData.map(usersItem => <User name={usersItem.name} prof={usersItem.prof} id={usersItem.id} />)

        return (
            <>
                <div>{usersElements}</div>
            </>
        )
    }
}

export default Users;
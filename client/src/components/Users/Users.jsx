import React from "react";
import User from "./User";

const Users = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers(
            [
                { id: 1, name: 'John', followed: false, prof: 'Парикмахер-стилист' },
                { id: 2, name: 'Pall', followed: false, prof: 'Косметолог' },
                { id: 3, name: 'Jeff', followed: false, prof: 'Мастер маникюра' },
                { id: 4, name: 'Mike', followed: false, prof: 'Мастер шугаринга' },
                { id: 5, name: 'Alex', followed: false, prof: 'Массажист' },
                { id: 6, name: 'Den', followed: false, prof: 'Наращивание ресниц' },
            ]
        )
    }

    let usersElements = props.usersData.map(usersItem => <User name={usersItem.name} prof={usersItem.prof} id={usersItem.id} />)

    return (
        <div>{usersElements}</div>
    )
}

export default Users;
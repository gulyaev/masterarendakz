import React from "react";
import Paginator2 from "../common/Paginator2";
import { Typography } from 'antd';
const { Title } = Typography;

const Users = ({ usersElements, pagesCount, setCurrentPage, currentPage }) => {
    return (
        <>
            <Title level={3}>Пользователи:</Title>
            <div style={{ height: "300px" }}>
                <div style={{ minHeight: "100px" }}>{usersElements}</div>
                <Paginator2 pagesCount={pagesCount} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </>
    )
}

export default Users;
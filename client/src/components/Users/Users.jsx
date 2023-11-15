import React from "react";
import classes from "../../css/Users.module.css";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { createPages } from '../../utils/pagesCreator';
import { Navigate } from "react-router-dom";
import { message } from 'antd';

const Users = ({ usersElements, pagesCount, setCurrentPage, currentPage, isAuth }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const formError = (message) => {
        messageApi.open({
            type: 'error',
            content: message,
        });
    };

    if (isAuth == false) {
        alert("Войдите чтобы посмотреть раздел пользователи");
        formError("Войдите чтобы посмотреть раздел пользователи")
        return <Navigate to={"/login"} />;
    }

    let pages = [];
    createPages(pages, pagesCount, currentPage);

    return (
        <>
            {contextHolder}
            <div style={{ height: "300px" }}>
                <div style={{ minHeight: "100px" }}>{usersElements}</div>
                <div className={classes.pages}>
                    <MDBPagination className='mb-0'>
                        <MDBPaginationItem disabled>
                            <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
                                Previous
                            </MDBPaginationLink>
                        </MDBPaginationItem>
                        {pages.map((p, index) => {
                            return (
                                <span key={index}
                                    onClick={() => setCurrentPage(p)}>
                                    <MDBPaginationItem className={classes.paginationItemStyle} >
                                        <MDBPaginationLink className={currentPage == p ? classes.actived : classes.paginationLinkStyle}>{p}</MDBPaginationLink>
                                    </MDBPaginationItem>
                                </span>
                            )
                        })}
                        <MDBPaginationItem disabled>
                            <MDBPaginationLink href='#' tabIndex={+1} aria-disabled='true'>Next</MDBPaginationLink>
                        </MDBPaginationItem>
                    </MDBPagination>
                </div>
            </div>
        </>
    )
}

export default Users;
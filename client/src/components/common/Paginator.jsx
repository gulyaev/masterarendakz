import React from "react";
import classes from "../../css/Users.module.css";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { createPages } from "../../utils/pagesCreator";

const Paginator = ({ pagesCount, setCurrentPage, currentPage }) => {
    let pages = [];
    createPages(pages, pagesCount, currentPage);

    return (
        <div className={classes.pages}>
            <MDBPagination className='mb-0'>
                <MDBPaginationItem disabled>
                    <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>Previous</MDBPaginationLink>
                </MDBPaginationItem>
                {pages.map((p, index) => {
                    return (
                        <span key={index}
                            onClick={() => setCurrentPage(p)}>
                            <MDBPaginationItem className={classes.paginationItemStyle} >
                                <MDBPaginationLink className={currentPage === p ? classes.actived : classes.paginationLinkStyle}>{p}</MDBPaginationLink>
                            </MDBPaginationItem>
                        </span>
                    )
                })}
                <MDBPaginationItem disabled>
                    <MDBPaginationLink href='#' tabIndex={+1} aria-disabled='true'>Next</MDBPaginationLink>
                </MDBPaginationItem>
            </MDBPagination>
        </div>
    )
}

export default Paginator;
import React, { useState } from "react";
import classes from "../../css/Users.module.css";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

const Paginator2 = ({ pagesCount, currentPage, setCurrentPage, portionSize = 5 }) => {
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(2);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;//левая граница порции
    let rightPortionPageNumber = portionNumber * portionSize;//правая граница порции


    return (
        <div className={classes.pages}>
            <MDBPagination className='mb-0'>
                {
                    portionNumber > 1 &&
                    <MDBPaginationItem onClick={() => setPortionNumber(portionNumber - 1)} >
                        <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>Назад</MDBPaginationLink>
                    </MDBPaginationItem>
                }
                {
                    pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map((p, index) => {
                            return (
                                <span key={index}
                                    onClick={() => setCurrentPage(p)}>
                                    <MDBPaginationItem className={classes.paginationItemStyle} >
                                        <MDBPaginationLink className={currentPage === p ? classes.actived : classes.paginationLinkStyle}>{p}</MDBPaginationLink>
                                    </MDBPaginationItem>
                                </span>
                            )
                        })
                }
                {
                    portionCount > portionNumber &&
                    <MDBPaginationItem onClick={() => setPortionNumber(portionNumber + 1)}>
                        <MDBPaginationLink href='#' tabIndex={+1} aria-disabled='true'>Дальше</MDBPaginationLink>
                    </MDBPaginationItem>
                }
            </MDBPagination>
        </div>
    )
}

export default Paginator2;
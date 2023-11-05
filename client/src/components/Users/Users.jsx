import React from "react";
import User from "./User";
import axios from 'axios';
import classes from "../../css/Users.module.css";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { createPages } from '../../utils/pagesCreator';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data)
        })
    }


    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            axios.get(`http://localhost:5000/api/user?per_page=${this.props.perPage}&page=${this.props.currentPage}`).then(response => {
                this.props.setUsers(response.data)
            })
        }
    }

    render() {
        let usersElements = this.props.usersData.map(usersItem => <User name={usersItem.name} prof={usersItem.prof} id={usersItem.id} />)

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.perPage);
        let pages = [];

        createPages(pages, pagesCount, this.props.currentPage);
        return (
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
                                <span key={index} className={this.props.currentPage == p ? classes.current_page : classes.page}
                                    onClick={() => this.props.setCurrentPage(p)}>
                                    <MDBPaginationItem className={classes.paginationItemStyle} active={this.props.currentPage == p ? "active" : ""}>
                                        <MDBPaginationLink className={classes.paginationLinkStyle}>{p}</MDBPaginationLink>
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
        )
    }
}

export default Users;
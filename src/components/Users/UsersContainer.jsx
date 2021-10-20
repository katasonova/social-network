import React from 'react';
import {connect} from "react-redux";
import { followAC, setUsersAC, unfollowAC, setTotalUsersAC, setCurrentPageAC } from '../../redux/usersPageReducer';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = (p) => {
   this.props.updateCurrentPage(p);
   axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render () {
   let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

   const pages = [];
   for (let i = 1; i <= pageCount; i += 1) {
     pages.push(i);
   }
 

   return <Users 
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            onPageChange = {this.onPageChange}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow} />
  }
}

const mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users => dispatch(setUsersAC(users))),
      setTotalUsersCount: (totalCount) => dispatch(setTotalUsersAC(totalCount)),
      updateCurrentPage: (page) => dispatch(setCurrentPageAC(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
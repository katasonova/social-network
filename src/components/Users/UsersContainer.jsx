import React from 'react';
import {connect} from "react-redux";
import { followAC, setUsersAC, unfollowAC, setTotalUsersAC, setCurrentPageAC, updateIsFetchingAC } from '../../redux/usersPageReducer';
import Users from './Users';
import * as axios from 'axios';
import preloader from '../../assets/img/preloader.svg'

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.updateIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
      this.props.updateIsFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = (p) => {
   this.props.updateCurrentPage(p);
   this.props.updateIsFetching(true)
   axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(response => {
     this.props.updateIsFetching(false)
     this.props.setUsers(response.data.items)
    })
  }

  render () {
   let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

   const pages = [];
   for (let i = 1; i <= pageCount; i += 1) {
     pages.push(i);
   }
 

   return  this.props.isFetching ? <img src={preloader} alt='preloader gif' /> : <Users 
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
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users => dispatch(setUsersAC(users))),
      setTotalUsersCount: (totalCount) => dispatch(setTotalUsersAC(totalCount)),
      updateCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
      updateIsFetching: (isFetching) => dispatch(updateIsFetchingAC(isFetching))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
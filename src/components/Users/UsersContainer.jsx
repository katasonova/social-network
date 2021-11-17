import React from 'react';
import {connect} from "react-redux";
import { follow, setUsers, unfollow, setTotalUsers, updateCurrentPage, updateIsFetching } from '../../redux/usersPageReducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.updateIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {withCredentials: true}).then(response => {
      this.props.updateIsFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsers(response.data.totalCount)
    })
  }

  onPageChange = (p) => {
   this.props.updateCurrentPage(p);
   this.props.updateIsFetching(true)
   axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`, {withCredentials: true}).then(response => {
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
 

   return  this.props.isFetching ? <Preloader /> : <Users 
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalUsers, updateCurrentPage, updateIsFetching})(UsersContainer);
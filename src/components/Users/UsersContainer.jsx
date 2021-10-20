import React from 'react';
import {connect} from "react-redux";
import { followAC, setUsersAC, unfollowAC, setTotalUsersAC, setCurrentPageAC } from '../../redux/usersPageReducer';
import Users from './Users';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
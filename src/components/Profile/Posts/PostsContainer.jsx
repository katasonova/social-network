import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps= (dispatch) => {
    return {
        addPostActionCreator: () => dispatch(addPostActionCreator()),
        updateNewPostActionCreator: (newPostMessage) => dispatch(updateNewPostActionCreator(newPostMessage))
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    const state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (newPostMessage) => {
        props.store.dispatch(updateNewPostActionCreator(newPostMessage));
    };

    return <Posts addPostActionCreator={addPost} updateNewPostActionCreator={onPostChange} postsData={state.postsData} newPostMessage={state.newPostMessage}/>
}

export default PostsContainer;
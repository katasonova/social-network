import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import Posts from "./Posts";
import StoreContext from "../../../storeContext";

const PostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {

                const state = store.getState().profilePage;

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                const onPostChange = (newPostMessage) => {
                    store.dispatch(updateNewPostActionCreator(newPostMessage));
                };

                return (<Posts addPostActionCreator={addPost} updateNewPostActionCreator={onPostChange}
                              profilePage={state}/>)
            }}

        </StoreContext.Consumer>
    )
}

export default PostsContainer;
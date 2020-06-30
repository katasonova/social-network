import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

// const PostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//
//                 const state = store.getState().profilePage;
//
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//
//                 const onPostChange = (newPostMessage) => {
//                     store.dispatch(updateNewPostActionCreator(newPostMessage));
//                 };
//
//                 return (<Posts addPostActionCreator={addPost} updateNewPostActionCreator={onPostChange}
//                               profilePage={state}/>)
//             }}
//
//         </StoreContext.Consumer>
//     )
// }

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
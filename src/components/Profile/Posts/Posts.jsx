import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const Posts = (props) => {
    const newPostMessage = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        props.dispatch(updateNewPostActionCreator(newPostMessage.current.value));
    };

    return (
        <section className={styles.posts}>
            <h3>My posts</h3>
            <textarea onChange={onPostChange} cols="50" rows="3" ref={newPostMessage} value={props.newPostMessage}/>
            <button onClick={addPost}>send</button>
            {props.postsData.map(post => <Post message={post.post}/>)}
        </section>);
}

export default Posts;
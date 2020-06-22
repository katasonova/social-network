import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    const newPostMessage = React.createRef();

    const addPost = () => {
        props.addPostActionCreator();
    };

    const onPostChange = () => {
        props.updateNewPostActionCreator(newPostMessage.current.value);
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
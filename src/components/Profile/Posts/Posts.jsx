import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    return (
        <section className={styles.posts}>
            <h3>My posts</h3>
            <textarea cols="50" rows="3"/>
            <button>send</button>
            {props.postsData.map(post => <Post message={post.post}/>)}
        </section>);
}

export default Posts;
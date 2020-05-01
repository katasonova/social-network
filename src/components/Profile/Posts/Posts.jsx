import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    const postsData = [
        {id: 1, post: 'Hi, how are you?'},
        {id: 2, post: 'Hello there!'},
        {id: 3, post: 'SUMMER IS HERE :)'},
        {id: 4, post: 'It\'s my first post'}
    ]

    return (
        <section className={styles.posts}>
            <h3>My posts</h3>
            <textarea cols="50" rows="3"/>
            <button>send</button>
            <Post message={postsData[0].post}/>
            <Post message={postsData[1].post}/>
            <Post message={postsData[2].post}/>
            <Post message={postsData[3].post}/>
        </section>
    );
}

export default Posts;
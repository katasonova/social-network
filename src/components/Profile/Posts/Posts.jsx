import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <section>
      My posts
          <textarea cols="50" rows="3" />
      <button>send</button>
      <Post message='Hi, how are you?'/>
      <Post message='Hello there!'/>
      <Post message={'It\'s my first post here!'}/>
      <Post />
    </section>
  );
}

export default Posts;
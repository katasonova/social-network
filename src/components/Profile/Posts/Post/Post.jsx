import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <p className={styles.item}>
      {props.message}
    </p>
  );
}

export default Post;
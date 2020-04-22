import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <section className={styles.item}>
      {props.message}
    </section>
  );
}

export default Post;
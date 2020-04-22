import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
      <nav className={styles.nav}>
        <ul>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
  );
}

export default Navigation;
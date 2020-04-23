import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
      <nav>
        <ul>
          <li><NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></li>
          <li><NavLink to='/messages' activeClassName={styles.active}>Messages</NavLink></li>
          <li><NavLink to='/news' activeClassName={styles.active}>News</NavLink></li>
          <li><NavLink to='/music' activeClassName={styles.active}>Music</NavLink></li>
          <li><NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink></li>
        </ul>
      </nav>
  );
}

export default Navigation;
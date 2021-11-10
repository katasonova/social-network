import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
      </header>
  );
}

export default Header;
import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <li className={styles.dialogItem}><NavLink to={'/dialogs/' + props.userId}>{props.userName}</NavLink></li>
    )
}

export default Dialog;
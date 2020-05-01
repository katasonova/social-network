import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <p>{props.message}</p>
    );
}

export default Message;
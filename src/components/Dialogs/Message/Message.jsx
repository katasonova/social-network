import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <section className={styles.dialogItem}>
            <img src={'https://tse1.mm.bing.net/th?id=OIP.TwW_U0N3zaD9o399ZrLiiAHaG1&pid=Api'}/>
            <p>{props.message}</p>
        </section>
    );
}

export default Message;
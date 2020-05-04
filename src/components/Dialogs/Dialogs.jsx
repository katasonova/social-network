import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <section className={styles.mainSection}>
            <section className={styles.dialogs}>
                <ul>
                    {props.dialogsData.map(dialog => <Dialog userName={dialog.name} userId={dialog.id}/>)}
                </ul>
            </section>
            <section className={styles.messages}>
                {props.messagesData.map(message => <Message message={message.message}/>)}
            </section>
        </section>
    );
}

export default Dialogs;
import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const newMessage = React.createRef();
    return (
        <section className={styles.mainSection}>
            <section className={styles.dialogs}>
                <ul>
                    {props.state.dialogsData.map(dialog => <Dialog userName={dialog.name} userId={dialog.id}/>)}
                </ul>
            </section>
            <section className={styles.messages}>
                {props.state.messagesData.map(message => <Message message={message.message}/>)}
                <section>
                    <textarea cols="80" rows="5" ref={newMessage}/>
                    <button onClick={ () => alert(newMessage.current.value)}>send</button>
                </section>
            </section>
        </section>
    );
}

export default Dialogs;
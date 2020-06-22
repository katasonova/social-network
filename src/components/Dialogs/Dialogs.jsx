import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const newMessage = React.createRef();

    const sendMessage = () => {
        props.addNewMessageActionCreator();
    }

    const onTextMessageChange = () => {
        props.updateNewMessageActionCreator(newMessage.current.value);
    };

    return (
        <section className={styles.mainSection}>
            <section className={styles.dialogs}>
                <ul>
                    {props.dialogsData.map(dialog => <Dialog userName={dialog.name} userId={dialog.id}/>)}
                </ul>
            </section>
            <section className={styles.messages}>
                {props.messagesData.map(message => <Message message={message.message}/>)}
                <section>
                    <textarea onChange={onTextMessageChange} cols="80" rows="5" ref={newMessage}
                              value={props.newMessageText}/>
                    <button onClick={sendMessage}>send</button>
                </section>
            </section>
        </section>
    );
}

export default Dialogs;
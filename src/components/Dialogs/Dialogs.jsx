import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Angela'},
        {id: 2, name: 'Chisomo'},
        {id: 3, name: 'Chris'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Tanya'},
        {id: 6, name: 'Josep'},
    ];

    const messagesData = [
        {id: 1, message: 'Hello there!'},
        {id: 2, message: 'YES!!'},
        {id: 3, message: 'Hello there!'},
        {id: 4, message: 'Yo! Come visit us!'},
        {id: 5, message: 'No, i am planning to do staycations'},
    ];

    return (
        <section className={styles.mainSection}>
            <section className={styles.dialogs}>
                <ul>
                    <Dialog userName={dialogsData[0].name} userId={dialogsData[0].id}/>
                    <Dialog userName={dialogsData[1].name} userId={dialogsData[1].id}/>
                    <Dialog userName={dialogsData[2].name} userId={dialogsData[2].id}/>
                    <Dialog userName={dialogsData[3].name} userId={dialogsData[3].id}/>
                    <Dialog userName={dialogsData[4].name} userId={dialogsData[4].id}/>
                    <Dialog userName={dialogsData[5].name} userId={dialogsData[5].id}/>
                </ul>
            </section>
            <section className={styles.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </section>
        </section>
    );
}

export default Dialogs;
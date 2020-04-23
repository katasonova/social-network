import React from 'react';
import styles from './Messages.module.css';

const Messages = () => {
    return (
        <section className={styles.mainSection}>
            <section className={styles.dialogs}>
                <ul>
                    <li className={styles.dialogItem}>Angela</li>
                    <li className={styles.dialogItem}>Chisomo</li>
                    <li className={styles.dialogItem}>Chris</li>
                    <li className={styles.activeDialogItem}>Alex</li>
                    <li className={styles.dialogItem}>Tanya</li>
                    <li className={styles.dialogItem}>Josep</li>
                </ul>
            </section>
            <section className={styles.messages}>
                <p>Hello there!</p>
                <p>We're going to the cinema tomorrow</p>
                <p>Yo! Come visit us!</p>
                <p>No, i'm planning to do staycations</p>
                <p>YES!!</p>
            </section>
        </section>
    );
}

export default Messages;
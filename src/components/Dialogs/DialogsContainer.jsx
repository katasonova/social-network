import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    }

    const onTextMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageActionCreator(newMessage))
    };

    return <Dialogs addNewMessageActionCreator={sendMessage} updateNewMessageActionCreator={onTextMessageChange}
                    dialogsData={state.dialogsData} messagesData={state.messagesData}
                    newMessageText={state.newMessageText}/>;
}


export default DialogsContainer;
import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsPage;

                const sendMessage = () => {
                    store.dispatch(addNewMessageActionCreator());
                }

                const onTextMessageChange = (newMessage) => {
                    store.dispatch(updateNewMessageActionCreator(newMessage))
                };
                return <Dialogs addNewMessageActionCreator={sendMessage}
                                updateNewMessageActionCreator={onTextMessageChange}
                                dialogsPage={state}/>;
            }}
        </StoreContext.Consumer>)
}


export default DialogsContainer;
import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const state = store.getState().dialogsPage;
//
//                 const sendMessage = () => {
//                     store.dispatch(addNewMessageActionCreator());
//                 }
//
//                 const onTextMessageChange = (newMessage) => {
//                     store.dispatch(updateNewMessageActionCreator(newMessage))
//                 };
//                 return <Dialogs addNewMessageActionCreator={sendMessage}
//                                 updateNewMessageActionCreator={onTextMessageChange}
//                                 dialogsPage={state}/>;
//             }}
//         </StoreContext.Consumer>)
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessageActionCreator: () => {dispatch(addNewMessageActionCreator())},
        updateNewMessageActionCreator: (newMessage) => {dispatch(updateNewMessageActionCreator(newMessage))}
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
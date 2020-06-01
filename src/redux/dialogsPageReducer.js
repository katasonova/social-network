const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            const newMessageText = {
                id: 6,
                message: state.newMessageText
            };

            state.messagesData.push(newMessageText);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            break;
        default:
            break;
    }

    return state;
};

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE, newMessage: newMessage});

export default dialogsPageReducer;

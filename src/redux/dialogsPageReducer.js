const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
    dialogsData: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'},
        {id: 5, name: 'User5'},
        {id: 6, name: 'User6'},
    ],
    messagesData: [
        {id: 1, message: 'Hello there!'},
        {id: 2, message: 'YES!!'},
        {id: 3, message: 'Hello there!'},
        {id: 4, message: 'Message1'},
        {id: 5, message: 'Message2'},
    ],
    newMessageText: 'Add your message here...'
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:

            const newMessageText = {
                id: 6,
                message: state.newMessageText,
            };

            return {
                ...state,
                messagesData: [...state.messagesData, newMessageText],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage,
            }
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE, newMessage: newMessage});

export default dialogsPageReducer;

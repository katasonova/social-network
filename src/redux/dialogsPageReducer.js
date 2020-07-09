const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Angela'},
        {id: 2, name: 'Chisomo'},
        {id: 3, name: 'Chris'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Tanya'},
        {id: 6, name: 'Josep'},
    ],
    messagesData: [
        {id: 1, message: 'Hello there!'},
        {id: 2, message: 'YES!!'},
        {id: 3, message: 'Hello there!'},
        {id: 4, message: 'Yo! Come visit us!'},
        {id: 5, message: 'No, i am planning to do staycations'},
    ],
    newMessageText: 'Add your message here...'
};

const dialogsPageReducer = (state = initialState, action) => {
    const stateCopy = {...state};
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            stateCopy.messagesData = [...state.messagesData];
            const newMessageText = {
                id: 6,
                message: stateCopy.newMessageText
            };

            stateCopy.messagesData.push(newMessageText);
            stateCopy.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE: {
            stateCopy.newMessageText = action.newMessage;
            break;
        }
        default:
            break;
    }

    return stateCopy;
};

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE, newMessage: newMessage});

export default dialogsPageReducer;

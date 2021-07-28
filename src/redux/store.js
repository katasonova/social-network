import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'Hi, how are you?'},
                {id: 2, post: 'Hello there!'},
                {id: 3, post: 'SUMMER IS HERE :)'},
                {id: 4, post: 'It\'s my first post'}
            ],
            newPostMessage: 'Add your post here...'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'User17'},
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
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },

};

export default store;
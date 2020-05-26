const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const ADD_NEW_MESSAGE ='ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

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
        }
    },
    _callSubscriber () {},

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_NEW_POST) {
            const newPost = {
                id: 5,
                post: this._state.profilePage.newPostMessage
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_MESSAGE) {
            this._state.profilePage.newPostMessage = action.newPost;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_NEW_MESSAGE) {
            const newMessageText = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messagesData.push(newMessageText);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },

};

export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updateNewPostActionCreator = (post) =>({type: UPDATE_NEW_POST_MESSAGE, newPost: post});
export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE, newMessage: newMessage});

export default store;
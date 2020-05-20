let store = {
    _callSubscriber () {},
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
    getState() {
        return this._state;
    },
    addNewPost () {
        const newPost = {
            id: 5,
            post: this._state.profilePage.newPostMessage
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostMessage = '';
        this._callSubscriber(this._state);
    },
    updateNewPostMessage (newPost) {
        this._state.profilePage.newPostMessage = newPost;
        this._callSubscriber(this._state);
    } ,
    addNewMessage () {
        const newMessageText = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        };

        this._state.dialogsPage.messagesData.push(newMessageText);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessage (newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
};

export default store;
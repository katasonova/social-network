let rerenderAppTree = () => {};

const state = {
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
};

export const addNewPost = () => {
    const newPost = {
        id: 5,
        post: state.profilePage.newPostMessage
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostMessage = '';
    rerenderAppTree(state);
};

export const updateNewPostMessage = (newPost) => {
    state.profilePage.newPostMessage = newPost;
    rerenderAppTree(state);
}

export const addNewMessage = () => {
    const newMessageText = {
        id: 6,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messagesData.push(newMessageText);
    state.dialogsPage.newMessageText = '';
    rerenderAppTree(state);
};

export const updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderAppTree(state);
}

export const subscribe = (observer) => {
    rerenderAppTree = observer;
}

export default state;
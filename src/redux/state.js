import {rerenderAppTree} from "../render";

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
        ]
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

export default state;
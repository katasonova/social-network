const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

const initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?'},
        {id: 2, post: 'Hello there!'},
        {id: 3, post: 'SUMMER IS HERE :)'},
        {id: 4, post: 'It\'s my first post'}
    ],
    newPostMessage: 'Add your post here...'
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case
        ADD_NEW_POST:
            const newPost = {
                id: 5,
                post: state.newPostMessage
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostMessage: '',
            }
        case
        UPDATE_NEW_POST_MESSAGE:
            return {
                ...state,
                newPostMessage: action.newPost,
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updateNewPostActionCreator = (post) => ({type: UPDATE_NEW_POST_MESSAGE, newPost: post});

export default profilePageReducer;
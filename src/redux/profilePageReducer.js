const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?'},
        {id: 2, post: 'Hello there!'},
        {id: 3, post: 'SUMMER IS HERE :)'},
        {id: 4, post: 'It\'s my first post'}
    ],
    newPostMessage: 'Add your post here...',
    profile: null
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: 5,
                post: state.newPostMessage
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostMessage: '',
            }
        case UPDATE_NEW_POST_MESSAGE:
            return {
                ...state,
                newPostMessage: action.newPost,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }    
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updateNewPostActionCreator = (post) => ({type: UPDATE_NEW_POST_MESSAGE, newPost: post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profilePageReducer;
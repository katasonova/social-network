const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

const profilePageReducer = (state, action) => {

    switch (action.type) {
        case
        ADD_NEW_POST:
            const newPost = {
                id: 5,
                post: state.newPostMessage
            };

            state.postsData.push(newPost);
            state.newPostMessage = '';
            break;
        case
        UPDATE_NEW_POST_MESSAGE:
            state.newPostMessage = action.newPost;
            break;
        default:
            break;
    }

    return state;
};

export const addPostActionCreator = () => ({type: ADD_NEW_POST});
export const updateNewPostActionCreator = (post) => ({type: UPDATE_NEW_POST_MESSAGE, newPost: post});

export default profilePageReducer;
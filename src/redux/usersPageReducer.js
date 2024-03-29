const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
const UPDATE_IS_FETCHING = 'UPDATE_IS_FETCHING'


const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;    
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;    
                })
            }
            
        case SET_USERS:
            return {
                ...state, users: action.users
            }   
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            } 
        case UPDATE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }  
        case UPDATE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }           
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsers = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const updateCurrentPage = (page) => ({type: UPDATE_CURRENT_PAGE, page})
export const updateIsFetching = (isFetching) => ({type: UPDATE_IS_FETCHING, isFetching})

export default usersPageReducer;

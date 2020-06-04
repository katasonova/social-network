import {createStore, combineReducers} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
});

const store = createStore(reducers);

export default store;
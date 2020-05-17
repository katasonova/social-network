import * as serviceWorker from './serviceWorker';
import state, {addNewMessage, addNewPost, subscribe, updateNewMessage, updateNewPostMessage} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const rerenderAppTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost} updateNewPostMessage={updateNewPostMessage}
                 addNewMessage={addNewMessage} updateNewMessage={updateNewMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

subscribe(rerenderAppTree);

rerenderAppTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
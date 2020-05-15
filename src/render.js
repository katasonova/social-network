import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addNewMessage, addNewPost, updateNewMessage, updateNewPostMessage} from './redux/state'
import {BrowserRouter} from "react-router-dom";

export const rerenderAppTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost} updateNewPostMessage={updateNewPostMessage} addNewMessage={addNewMessage} updateNewMessage={updateNewMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

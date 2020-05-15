import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addNewPost, updateNewPostMessage} from './redux/state'
import {BrowserRouter} from "react-router-dom";

export const rerenderAppTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost} updateNewPostMessage={updateNewPostMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

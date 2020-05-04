import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const postsData = [
    {id: 1, post: 'Hi, how are you?'},
    {id: 2, post: 'Hello there!'},
    {id: 3, post: 'SUMMER IS HERE :)'},
    {id: 4, post: 'It\'s my first post'}
];

const dialogsData = [
    {id: 1, name: 'Angela'},
    {id: 2, name: 'Chisomo'},
    {id: 3, name: 'Chris'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Tanya'},
    {id: 6, name: 'Josep'},
];

const messagesData = [
    {id: 1, message: 'Hello there!'},
    {id: 2, message: 'YES!!'},
    {id: 3, message: 'Hello there!'},
    {id: 4, message: 'Yo! Come visit us!'},
    {id: 5, message: 'No, i am planning to do staycations'},
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

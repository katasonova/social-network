import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import {addNewPost} from "./redux/state";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <main>
                <Route render={() => <Profile state={props.state.profilePage} addNewPost={props.addNewPost} updateNewPostMessage={props.updateNewPostMessage}/>} path={'/profile'}/>
                <Route render={() => <Dialogs state={props.state.dialogsPage}/>} path={'/dialogs'}/>
                <Route component={News} path={'/news'}/>
                <Route component={Music} path={'/music'}/>
                <Route component={Settings} path={'/settings'}/>
            </main>
        </div>
    );
}

export default App;
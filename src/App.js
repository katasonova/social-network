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
                <Route path={'/profile'}
                       render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </main>
        </div>
    );
}

export default App;
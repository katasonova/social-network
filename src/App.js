import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <main>
                    <Route render={() => <Profile state={props.state.profilePage}/>} path={'/profile'}/>
                    <Route render={() => <Dialogs state={props.state.dialogsPage}/>} path={'/dialogs'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Settings} path={'/settings'}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
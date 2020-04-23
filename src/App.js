import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <main>
                    <Route component={Profile} path={'/profile'}/>
                    <Route component={Messages} path={'/messages'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Settings} path={'/settings'}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
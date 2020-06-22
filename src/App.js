import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <main>
                <Route path={'/profile'}
                       render={() => <Profile store={props.store}/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </main>
        </div>
    );
}

export default App;
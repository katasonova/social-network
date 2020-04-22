import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="main">
          {/*<Dialogs />*/}
          <Profile />
      </main>

    </div>
  );
}

export default App;

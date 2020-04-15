import React from 'react';
import Header from './components/Header'
import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;

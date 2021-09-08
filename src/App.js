import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsContainer from './components/ItemsContainer/ItemsContainer';
import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <ItemsContainer />
    </>
  );
}

export default App;

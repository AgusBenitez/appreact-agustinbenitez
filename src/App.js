
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productos from './components/pages/Productos';
import NotFound from './components/pages/NotFound';
import DetalleProducto from './components/pages/DetalleProducto';
import Cart from './components/pages/Cart';
import HomePage from './components/pages/HomePage';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/itemdetails/:id" component={DetalleProducto} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

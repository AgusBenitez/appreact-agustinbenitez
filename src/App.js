import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productos from './components/pages/Productos';
import NotFound from './components/pages/NotFound';
import DetalleProducto from './components/pages/DetalleProducto';
import Cart from './components/pages/Cart';
import HomePage from './components/pages/HomePage';
import { CartProvider } from './context/CartContext';
import Checkout from './components/pages/Checkout';
import Samsung from './components/pages/Samsung';
import Motorola from './components/pages/Motorola';
import Apple from './components/pages/Apple';



function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/itemdetails/:id" component={DetalleProducto} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/samsung" component={Samsung} />
          <Route exact path="/motorola" component={Motorola} />
          <Route exact path="/apple" component={Apple} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/AppRouter/AppRouter';
import { CartProvider } from './Context/CartContext';


function App() {


  return (
    <CartProvider>

      <AppRouter />

    </CartProvider>
  );
}

export default App;

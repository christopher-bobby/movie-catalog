
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Header from './components/Header';

export const CartContext = React.createContext({});

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={ <Home /> }
          />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;

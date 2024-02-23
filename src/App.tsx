
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Header from './components/Header';

export const CartContext = React.createContext({});

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart, totalPrice, setTotalPrice }}>
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

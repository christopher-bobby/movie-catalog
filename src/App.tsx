
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route path="/detail/:productId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
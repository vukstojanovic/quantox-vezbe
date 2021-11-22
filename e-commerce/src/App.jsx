
import Nav from './components/Nav/index';
import Home from './pages/Home/index';
import Products from './pages/Products/index';
import ProductDetails from './pages/ProductDetails/index';
import Cart from './pages/Cart/index';
import Signup from './pages/Signup/index';
import Login from './pages/Login/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute  from './protectedRoute/index';
import React from 'react';
import Dashboard from './pages/Dashboard/index';

function App() {

  return (
    <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route path="/products" element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route path="/products/:id" element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              } 
            />
            <Route path="/cart" element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } 
            />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
              } 
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;

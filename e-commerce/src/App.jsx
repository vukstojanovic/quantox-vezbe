
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContextProvider} from './GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

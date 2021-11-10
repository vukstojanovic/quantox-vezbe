
import Nav from './components/Nav/index';
import Home from './components/Home/index';
import Products from './components/Products/index';
import ProductDetails from './components/ProductDetails/index';
import Cart from './components/Cart/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContextProvider} from './context/GlobalContext';

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

import logo from './logo.svg';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContextProvider} from './GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

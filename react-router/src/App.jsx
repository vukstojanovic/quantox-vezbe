import List from './components/List/index';
import Nav from './components/Nav/index';
import User from './components/User/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:login" element={<User />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <h1>Home</h1>
  );
}

export default App;

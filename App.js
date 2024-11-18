import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nothome">Not Home</Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nothome" element={<NotHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
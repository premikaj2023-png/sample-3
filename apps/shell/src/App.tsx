import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

// This is where you will eventually import your friends' apps
const CodingChallenge = () => <div>Coding Challenge Loading...</div>;

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
        <Link to="/challenges" style={{ color: '#fff' }}>Challenges</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<CodingChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
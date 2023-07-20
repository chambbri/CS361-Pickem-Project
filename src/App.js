import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MakePicks from './pages/MakePicks';
import Navbar from './components/Navbar';
import Results from './pages/Results';

function App() {
  return (
    <div className = "App">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/makepicks" element={<MakePicks />}/>
          <Route path="/results" element={<Results />}/>
      </Routes>
    </div>
  );
}

export default App;

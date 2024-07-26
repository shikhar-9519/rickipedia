import { Route, Routes } from 'react-router-dom';
import './App.css';
import Location from './components/Location';
import Episodes from './components/Episodes';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
      <div className="App">
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Characters/>} />
          <Route path="/locations" element={<Location />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

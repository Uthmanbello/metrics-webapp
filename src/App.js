import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Homes from './components/Homes';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
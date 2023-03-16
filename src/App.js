import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Homes from './components/Homes';
import About from './components/About';
import CoordinatesPage from './components/pages/CoordinatesPage';
import WeatherPage from './components/pages/WeatherPage';
import TemperaturePage from './components/pages/TemperaturePage';
import WindPage from './components/pages/WindPage';
import SystemPage from './components/pages/SystemPage';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/coordinates" element={<CoordinatesPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/temperature" element={<TemperaturePage />} />
        <Route path="/wind" element={<WindPage />} />
        <Route path="/system" element={<SystemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

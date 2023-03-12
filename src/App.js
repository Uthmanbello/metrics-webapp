import { Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Details from './routes/Details';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="details" element={<Details />} />
    </Route>
  </Routes>
);

export default App;
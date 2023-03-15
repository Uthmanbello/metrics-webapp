import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../redux/home/homeSlice';
import { Link, Route, Routes } from 'react-router-dom';
import './Home.css'

function Homes() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{'Abuja, Nigeria'}</h1>
      <div className="home-items">
      <Link to="/coordinates">
        {data.coord && <p className="home-item">Coordinates: {Object.keys(data.coord).length} items</p>}
      </Link>
      <Link to="/weather">
        {data.weather && data.weather[0] && <p className="home-item">Weather: {Object.keys(data.weather[0]).length}</p>}
      </Link>
      <Link to="/temperature">
        {data.main && <p className="home-item">Temperature: {Object.keys(data.main).length}</p>}
      </Link>
      <Link to="/wind">
        {data.wind && <p className="home-item">Wind: {Object.keys(data.wind).length}</p>}
      </Link>
      <Link to="/system">
        {data.sys && <p className="home-item">System: {Object.keys(data.sys).length}</p>}
      </Link>
      </div>

      <Routes>
        <Route path="/coordinates" element={<CoordinatesPage data={data.coord} />} />
        <Route path="/weather" element={<WeatherPage data={data.weather} />} />
        <Route path="/temperature" element={<TemperaturePage data={data.main} />} />
        <Route path="/wind" element={<WindPage data={data.wind} />} />
        <Route path="/system" element={<SystemPage data={data.sys} />} />
      </Routes>
    </div>
  );
}


function CoordinatesPage({ data }) {
  return (
    <div>
      <h2>Coordinates Page</h2>
      <p>Latitude: {data.lat}</p>
      <p>Longitude: {data.lon}</p>
    </div>
  );
}

function WeatherPage({ data }) {
  return (
    <div>
      <h2>Weather Page</h2>
      <p>Description: {data.description}</p>
      <p>Icon: {data.icon}</p>
    </div>
  );
}

function TemperaturePage({ data }) {
  return (
    <div>
      <h2>Temperature Page</h2>
      <p>Current temperature: {data.temp}</p>
      <p>Feels like: {data.feels_like}</p>
    </div>
  );
}

function WindPage({ data }) {
  return (
    <div>
      <h2>Wind Page</h2>
      <p>Speed: {data.speed}</p>
      <p>Degree: {data.deg}</p>
    </div>
  );
}

function SystemPage({ data }) {
  return (
    <div>
      <h2>System Page</h2>
      <p>Sunrise: {new Date(data.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(data.sunset * 1000).toLocaleTimeString()}</p>
<p>Country: {data.country}</p>
</div>
);
}

export default Homes;

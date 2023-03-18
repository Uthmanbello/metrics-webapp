import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import Navbar1 from '../Navbar1';

import { fetchCities } from '../../redux/home/homeSlice';
import './Pages.css';

function TemperaturePage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Navbar1 />
        <FontAwesomeIcon
          icon={faThermometerHalf}
          style={{
            color: 'rgb(0, 71, 177)',
            fontSize: '80px',
            marginBottom: '-100px',
            paddingTop: '15px',
            paddingLeft: '40px',
          }}
        />
        <h2 className="heading">Temperature</h2>
        <p className="cat">6 stats</p>
      </div>
      <p className="stats">TEMPERATURE STATS</p>
      <ul>
        <li className="even1 list first">
          <span>Max temp</span>
          {' '}
          <span>
            {Math.floor(data.main.temp_max - 273.15)}
            {' '}
            &deg;C
          </span>
        </li>
        <li className="list">
          <span>Min temp</span>
          {' '}
          {Math.floor(data.main.temp_min - 273.15)}
          {' '}
          &deg;C
        </li>
        <li className="even1 list">
          <span>Current temp</span>
          {' '}
          {Math.floor(data.main.temp - 273.15)}
          {' '}
          &deg;C
        </li>
        <li className="list">
          <span>Feels like</span>
          {' '}
          {Math.floor(data.main.feels_like - 273.15)}
          {' '}
          &deg;C
        </li>
        <li className="even1 list">
          <span>Humidity</span>
          {' '}
          <span>
            {data.main.humidity}
            {' '}
            g/m
            <sup>3</sup>
          </span>
        </li>
        <li className="list">
          <span>Pressure</span>
          {' '}
          {data.main.pressure}
          {' '}
          Pa
        </li>
      </ul>
    </div>
  );
}

export default TemperaturePage;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar1 from '../Navbar1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

import { fetchCities } from '../../redux/home/homeSlice';

function WeatherPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <Navbar1 />
      <FontAwesomeIcon
        icon={faCloud}
        style={{
          color: 'rgb(0, 71, 177)', fontSize: '80px', marginBottom: '-100px', paddingTop: '15px',
        paddingLeft: '40px'}}
      />
      <h2 className="heading">Weather</h2>
      <p className="cat">4 stats</p>
      <p className="stats">WEATHER STATS</p>
      <ul>
        <li className="even1 list first">
          <span>Main</span>
          {' '}
          {data?.weather?.[0]?.main}
        </li>
        <li className="list">
          <span>Description</span>
          {' '}
          {data?.weather?.[0]?.description}
        </li>
        <li className="even1 list">
          <span>Cloud</span>
          {' '}
          {data.cod}
          {' '}
          oktas
        </li>
        <li className="list">
          <span>Visibility</span>
          {' '}
          {data.visibility}
          {' '}
          m
        </li>
      </ul>
    </div>
  );
}

export default WeatherPage;

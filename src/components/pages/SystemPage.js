import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import Navbar1 from '../Navbar1';

import { fetchCities } from '../../redux/home/homeSlice';

function SystemPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <Navbar1 />
      <FontAwesomeIcon
        icon={faSun}
        style={{
          color: 'rgb(0, 71, 177)',
          fontSize: '80px',
          marginBottom: '-100px',
          paddingTop: '15px',
          paddingLeft: '40px',
        }}
      />
      <h2 className="heading">System</h2>
      <p className="cat">3 stats</p>
      <p className="stats">SYSTEM STATS</p>
      <ul>
        <li className="even1 list first">
          <span>Sunrise</span>
          {' '}
          {new Date((data.sys.sunrise + 3 * 60 * 60) * 1000).toLocaleTimeString()}
        </li>
        <li className="list">
          <span>Sunset</span>
          {' '}
          {new Date((data.sys.sunset + 3 * 60 * 60) * 1000).toLocaleTimeString()}
        </li>
        <li className="even1 list">
          <span>Last check</span>
          {' '}
          {new Date(data.dt * 1000).toLocaleTimeString()}
        </li>
      </ul>
    </div>
  );
}

export default SystemPage;

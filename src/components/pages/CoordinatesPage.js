import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar1 from '../Navbar1';

import { fetchCities } from '../../redux/home/homeSlice';

function CoordinatesPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <Navbar1 />
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        style={{
          color: 'rgb(0, 71, 177)',
          fontSize: '80px',
          marginBottom: '-100px',
          paddingTop: '15px',
          paddingLeft: '40px',
        }}
      />
      <h2 className="heading">Coordinates</h2>
      <p className="cat">2 stats</p>
      <p className="stats">COORDINATES STATS</p>
      <ul>
        <li className="even1 list first">
          <span>Latitude</span>
          {' '}
          {data.coord && data.coord.lat ? data.coord.lat : ''}
        </li>
        <li className="list">
          <span>Longitude</span>
          {' '}
          {data.coord && data.coord.lon ? data.coord.lon : ''}
        </li>
      </ul>
    </div>
  );
}

export default CoordinatesPage;

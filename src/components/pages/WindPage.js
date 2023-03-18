import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import Navbar1 from '../Navbar1';

import { fetchCities } from '../../redux/home/homeSlice';

function WindPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <Navbar1 />
      <FontAwesomeIcon
        icon={faWind}
        style={{
          color: 'rgb(0, 71, 177)',
          fontSize: '80px',
          marginBottom: '-100px',
          paddingTop: '15px',
          paddingLeft: '40px',
        }}
      />
      <h2 className="heading">Wind</h2>
      <p className="cat">2 stats</p>
      <p className="stats">WIND STATS</p>
      <ul>
        <li className="even1 list first">
          <span>Speed</span>
          {' '}
          {data.wind.speed}
          {' '}
          m/s
        </li>
        <li className="list">
          <span>Degree</span>
          {' '}
          {data.wind.deg}
          &#176;
        </li>
      </ul>
    </div>
  );
}

export default WindPage;

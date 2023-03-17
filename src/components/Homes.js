import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faCloud, faWind, faSun, faThermometerHalf,
} from '@fortawesome/free-solid-svg-icons';
import { fetchCities } from '../redux/home/homeSlice';
import './Homes.css';

function Homes() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { data, status, error } = useSelector((state) => state.home) || {};

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = [
    { link: '/coordinates', dataKey: 'coord', label: 'Coordinates' },
    { link: '/weather', dataKey: 'weather', label: 'Weather' },
    { link: '/temperature', dataKey: 'main', label: 'Temperature' },
    { link: '/wind', dataKey: 'wind', label: 'Wind' },
    { link: '/system', dataKey: 'sys', label: 'System' },
  ].filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <h1 className="heading">Abuja, Nigeria</h1>
        <p className="cat">{`${((Math.floor(data.timezone / 3600)) >= 0 ? '+' : '-')
         + (Math.abs(Math.floor(data.timezone / 3600))).toString().padStart(2, '0')}.
         ${Math.abs(Math.floor(data.timezone % (3600 / 60))).toString().padStart(2, '0')} UTC`}</p>
      </div>
      <p className="stats">STATS BY CATEGORY</p>
      <div className="home-items">
        {filteredItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {data[item.dataKey] && (
              <p className={`home-item link-${index} ${index % 2 === 0 ? '' : 'even'}`}>
                <FontAwesomeIcon
                  icon={
                    index === 0
                      ? faMapMarkerAlt
                      : index === 1
                      ? faCloud
                      : index === 2
                      ? faThermometerHalf
                      : index === 3
                      ? faWind
                      : faSun
                  }
                  style={{
                    color: 'rgb(0, 71, 177)',
                    fontSize: '60px',
                    marginBottom: '-80px',
                    paddingTop: '15px',
                  }}
                />
                <span className="item-wrap">
                  {item.label}
                  <span className="item">
                    {Object.keys(data[item.dataKey]).length} items
                  </span>
                </span>
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Homes;

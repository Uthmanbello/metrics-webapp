import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../redux/home/homeSlice';
import { Link } from 'react-router-dom';
import './Homes.css'

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
      <div>
      <h1 className="heading">{'Abuja, Nigeria'}</h1>
      <p className="cat">5 Categories</p>
      </div>
      <p className='stats'>STATS BY CATEGORY</p>
      <div className="home-items">
      <Link to="/coordinates">
        {data.coord && <p className="home-item"><span className="item-wrap">Coordinates <span className="item">{Object.keys(data.coord).length} items</span></span></p>}
      </Link>
      <Link to="/weather">
        {data.weather && data.weather[0] && <p className="home-item even"><span className="item-wrap">Weather <span className="item">{Object.keys(data.weather[0]).length} items</span></span></p>}
      </Link>
      <Link to="/temperature">
        {data.main && <p className="home-item even"><span className="item-wrap">Temperature <span className="item">{Object.keys(data.main).length} items</span></span></p>}
      </Link>
      <Link to="/wind">
        {data.wind && <p className="home-item"><span className="item-wrap">Wind <span className="item">{Object.keys(data.wind).length} items</span></span></p>}
      </Link>
      <Link to="/system">
        {data.sys && <p className="home-item"><span className="item-wrap">System <span className="item">{Object.keys(data.sys).length} items</span></span></p>}
      </Link>
      </div>
    </div>
  );
}

export default Homes;

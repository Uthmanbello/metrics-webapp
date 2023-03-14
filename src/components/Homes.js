import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../redux/home/homeSlice';

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
      {data.coord && <p>Coordinates: {Object.keys(data.coord).length} items</p>}
      {data.weather && <p>Weather: {Object.keys(data.weather[0]).length} items</p>}
      {data.main && <p>Temperature: {Object.keys(data.main).length} items</p>}
      {data.wind && <p>Wind: {Object.keys(data.wind).length} items</p>}
      {data.sys && <p>System: {Object.keys(data.sys).length} items</p>}
    </div>
  );
  
}

export default Homes;

import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../redux/home/homeSlice';

function CityDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, status, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Coordinates: {data.coord.lat}, {data.coord.lon}</p>
      <p>Weather: {data.weather[0].main}</p>
      <p>Temperature: {data.main.temp} K</p>
      <p>Wind: {data.wind.speed} m/s</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default CityDetails;

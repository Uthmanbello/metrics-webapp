import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from "../../redux/home/homeSlice";

function CoordinatesPage() {
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
          <h2 className="heading">Coordinates</h2>
          <p className="cat">2 stats</p>
          <p className='stats'>COORDINATES STATS</p>
          <ul>
          <li className="even1 list first"><span>Latitude</span> {data.coord.lat}</li>
          <li className="list"><span>Longitude</span> {data.coord.lon}</li>
          </ul>
        </div>
      );
  }

  export default CoordinatesPage
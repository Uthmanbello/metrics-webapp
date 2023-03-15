import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from "../../redux/home/homeSlice";

function WindPage() {
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
      <h2 className="heading">Wind</h2>
      <p className="cat">2 stats</p>
      <p className='stats'>WIND STATS</p>
      <ul>
      <li className="even1 list first"><span>Speed</span> {data.wind.speed} m/s</li>
      <li className="list"><span>Degree</span> {data.wind.deg}&#176;</li>
      </ul>
    </div>
      );
  }

  export default WindPage;
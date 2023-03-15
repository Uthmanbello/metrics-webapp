import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { fetchCities } from "../../redux/home/homeSlice";

function WeatherPage() {
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
              <Link to="/" className="return"><FontAwesomeIcon icon={faArrowLeft} /></Link>
              <FontAwesomeIcon icon={faCloud} style={{ color: 'rgb(53, 53, 165)', fontSize: '80px', marginBottom: '-100px', paddingTop: '15px' }}/>
              <h2 className="heading">Weather</h2>
              <p className="cat">2 stats</p>
              <p className='stats'>WEATHER STATS</p>
              <ul>
              <li className="even1 list first"><span>Main</span> {data?.weather?.[0]?.main}</li>
<li className="list"><span>Description</span> {data?.weather?.[0]?.description}</li>

              </ul>           
            </div>
          );
  }

  export default WeatherPage;
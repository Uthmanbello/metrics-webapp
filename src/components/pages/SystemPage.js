import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { fetchCities } from "../../redux/home/homeSlice";

function SystemPage() {
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
        <FontAwesomeIcon icon={faSun} style={{ color: 'rgb(53, 53, 165)', fontSize: '80px', marginBottom: '-100px', paddingTop: '15px' }}/>
      <h2 className="heading">System</h2>
      <p className="cat">2 stats</p>
      <p className='stats'>SYSTEM STATS</p>
      <ul>
      <li className="even1 list first"><span>Sunrise</span> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</li>
      <li className="list"><span>Sunset</span> {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</li>
      </ul>
</div>
      );
  }

  export default SystemPage;
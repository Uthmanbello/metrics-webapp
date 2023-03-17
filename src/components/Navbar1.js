import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

const Navbar1 = () => { 
  return (
    <nav className="nav">
      <Link to="/"><FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '10px' }}/></Link>
      <p className="top">details</p>
      <div>
      <FontAwesomeIcon icon={faMicrophone} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '10px' }}/>
      <FontAwesomeIcon icon={faGear} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '25px', paddingRight: '10px' }}/>
      </div>
    </nav>
  )
};

export default Navbar1;

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar1 = () => (
  <nav className="nav">
    <Link to="/"><FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '10px' }} data-testid="back-link" /></Link>
    <p className="top">details</p>
    <div>
      <FontAwesomeIcon icon={faMicrophone} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '10px' }} data-testid="microphone-icon" />
      <FontAwesomeIcon
        icon={faGear}
        style={{
          fontSize: '20px', marginTop: '10px', marginLeft: '25px', paddingRight: '10px',
        }}
        data-testid="gear-icon"
      />
    </div>
  </nav>
);

export default Navbar1;

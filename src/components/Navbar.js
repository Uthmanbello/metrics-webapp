import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear, faMicrophone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

const Navbar = () => { 
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faBars} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '10px' }}/>
      <p className="top">categories</p>
      <div>
      <FontAwesomeIcon icon={faMicrophone} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '10px' }}/>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '20px', marginTop: '10px', marginLeft: '25px', paddingRight: '10px' }}/>
      </div>
    </nav>
  )
};

export default Navbar;

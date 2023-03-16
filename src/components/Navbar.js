import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navlinks = [

    { path: '/', text: 'Home' },
    { path: '/details', text: 'Details' },

  ];
  return (
    <nav>
      <div>
        <div>
          <ul>
            {navlinks.map((navlink) => (
              <li key={navlink.text}>
                <NavLink to={navlink.path} style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : '' })}>{navlink.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

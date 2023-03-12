import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;

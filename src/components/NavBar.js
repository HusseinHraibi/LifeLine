import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
<nav className="navbar">   
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/features">Features</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/requests">Blood Requests</Link>
    </nav>
  );
}

export default NavBar;
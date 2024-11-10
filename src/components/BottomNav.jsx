/*Made by Diana Boiko*/
import { NavLink } from 'react-router-dom';
import '../styles/HomePageStyle.css';

function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="nav-icon">🏠</NavLink>
      <NavLink to="/community" className="nav-icon">💬</NavLink>
      <NavLink to="/statistics" className="nav-icon">📊</NavLink>
      <NavLink to="/account" className="nav-icon">👤</NavLink>
    </div>
  );
}

export default BottomNav;

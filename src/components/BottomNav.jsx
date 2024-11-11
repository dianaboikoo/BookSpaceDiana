/*Made by Diana Boiko*/
import { NavLink } from 'react-router-dom';
import '../styles/HomePageStyle.css';

function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="nav-icon">🏠</NavLink> {/* Home */}
      <NavLink to="/community" className="nav-icon">💬</NavLink> {/* Community */}
      <NavLink to="/statistics" className="nav-icon">📊</NavLink> {/* Statistics */}
      <NavLink to="/account" className="nav-icon">👤</NavLink> {/* Account */}
    </div>
  );
}

export default BottomNav;

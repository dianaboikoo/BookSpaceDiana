import React from 'react';
import { NavLink } from 'react-router-dom';

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

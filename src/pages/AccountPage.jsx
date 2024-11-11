/*Made by Diana Boiko*/
import { useNavigate } from 'react-router-dom';
import "../styles/AccountPageStyle.css";
import BottomNav from '../components/BottomNav';

const AccountPage = () => {
    const navigate = useNavigate(); // Enables page navigation

  return (
    <div className="account-page">
      <div className="account-header">
        <i className="icon-left">🔄</i> {/* Share */}
        <h2>Profile</h2>
        <i className="icon-right">⚙️</i> {/* Settings */}
      </div>

      <div className="profile-info">
        <h3>Alice Nielsen</h3> {/* Hardcoded username */}
        <p>@booklover123</p> {/* Hardcoded handle */}
      </div>

      <div className="profile-stats">
        <div><strong>4</strong><span>Reviews</span></div>
        <div><strong>35</strong><span>Followers</span></div>
        <div><strong>35</strong><span>Following</span></div>
      </div>

      <div className="profile-options">
        <div className="option-item">📑 Saved books</div>
        <div className="option-item" onClick={() => navigate('/mynotes')}>📝 My notes and quotes</div>
        <div className="option-item">📚 My books</div>
        <div className="option-item" onClick={() => navigate('/myreviews')}>⭐ My reviews</div>
      </div>

      <button className="logout-button">Log Out</button> {/* Log Out */}

      <BottomNav /> {/* Bottom navigation */}
    </div>
  );
};

export default AccountPage;

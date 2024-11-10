/*Made by Diana Boiko*/
import { useNavigate } from 'react-router-dom';
import "../styles/AccountPageStyle.css";
import BottomNav from '../components/BottomNav';

const AccountPage = () => {
    const navigate = useNavigate();


  return (
    <div className="account-page">
      <div className="account-header">
        <i className="icon-left">🔄</i> {/* Share Icon */}
        <h2>Profile</h2>
        <i className="icon-right">⚙️</i> {/* Settings Icon */}
      </div>

      <div className="profile-info">
        <div className="profile-image">
          <i className="user-icon">👤</i>
        </div>
        <h3>Alice Nielsen</h3>
        <p>@booklover123</p>
      </div>

      <div className="profile-stats">
        <div>
          <strong>4</strong>
          <span>Reviews</span>
        </div>
        <div>
          <strong>35</strong>
          <span>Followers</span>
        </div>
        <div>
          <strong>35</strong>
          <span>Following</span>
        </div>
      </div>

      <div className="profile-options">
        <div className="option-item">
          <span>📑</span> Saved books
        </div>
        <div className="option-item" onClick={() => navigate('/mynotes')}>
          <span>📝</span> My notes and quotes
        </div>
        <div className="option-item">
          <span>📚</span> My books
        </div>
        <div className="option-item" onClick={() => navigate('/myreviews')}>
          <span>⭐</span> My reviews
        </div>
      </div>

      <button className="logout-button">Log Out</button>

      <BottomNav />
    </div>
  );
};

export default AccountPage;

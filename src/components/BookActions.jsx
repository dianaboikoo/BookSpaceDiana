/*Made by Diana Boiko*/
import { useNavigate } from 'react-router-dom';
import '../styles/HomePageStyle.css';

const BookActions = () => {
    const navigate = useNavigate(); // Navigation handler

    return (
        <div className="book-actions">
            <button onClick={() => navigate('/timer')}>Reading mode</button> {/* Navigates to Timer */}
            <button onClick={() => navigate('/community')}>Join the chat</button> {/* Navigates to Community */}
        </div>
    );
};

export default BookActions;

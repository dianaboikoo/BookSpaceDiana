/*Made by Diana Boiko*/

import { useNavigate } from 'react-router-dom';
import '../styles/HomePageStyle.css';

const BookActions = () => {
    const navigate = useNavigate();

    return (
        <div className="book-actions">
            <button onClick={() => navigate('/timer')}>Reading mode</button>
            <button onClick={() => navigate('/community')}>Join the chat</button>
        </div>
    );
};

export default BookActions;

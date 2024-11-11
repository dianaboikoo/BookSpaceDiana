/*Made by Diana Boiko*/
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';
import BookSection from '../components/BookSection';
import BottomNav from '../components/BottomNav';
import '../styles/HomePageStyle.css';

function HomePage() {
  return (
    <div className="home-page">
      <SearchBar /> {/* Diaplays a Search Bar */}
      <Banner /> {/* Displays a banner */}
      <BookSection title="Currently Reading" /> {/* Section for books currently being read */}
      <BookSection title="Recommended" /> {/* Section for recommended books */}
      <BookSection title="Popular" /> {/* Section for popular books */}
      <BottomNav /> {/* Bottom navigation for easy access to other pages */}
    </div>
  );
}

export default HomePage;

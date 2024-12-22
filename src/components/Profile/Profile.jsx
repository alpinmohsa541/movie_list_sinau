// src/components/Profile/Profile.jsx
import { useAuth } from '../Context/Context';
import { Row, Col } from 'react-bootstrap';

const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const Profile = () => {
  const { favorites, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Your Profile</h1>
      <h2>Favorites</h2>
      <Row>
        {favorites.length === 0 ? (
          <p>No favorite movies added.</p>
        ) : (
          favorites.map((movie) => (
            <Col sm={3} key={movie.id}>
              <div className="text-center">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : unavailable}
                  alt={movie.title}
                  style={{ width: '150px', height: '225px' }}
                />
                <p>{movie.title}</p>
              </div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Profile;

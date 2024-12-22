import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import MovieCard from "../MovieCard/MovieCard";
import { Row, Col, Spinner, InputGroup, Form } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=1`);
        const data = await response.json();
        const formattedMovies = data.results.map((movie) => ({
          id: movie.id, // Tambahkan ID untuk navigasi
          title: movie.title,
          imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : unavailable,
          rating: movie.vote_average,
        }));
        setPopularMovies(formattedMovies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  const filteredMovies = popularMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-left mb-4">Popular Movies</h2>
      <InputGroup className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading movies...</p>
        </div>
      ) : filteredMovies.length === 0 ? (
        <div className="text-center">
          <p>No movies found.</p>
        </div>
      ) : (
        <Row className="justify-content-start">
          {filteredMovies.map((movie) => (
            <Col sm={3} key={movie.id}>
              <MovieCard
                title={movie.title}
                imageUrl={movie.imageUrl}
                rating={movie.rating}
                onClick={() => navigate(`/movies/${movie.id}`)} // Navigasi ke detail
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MovieList;

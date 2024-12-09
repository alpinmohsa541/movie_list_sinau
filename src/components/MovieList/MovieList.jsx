import { useState, useEffect } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { Row, Col, Spinner, Button, InputGroup, Form } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const MovieList = () => {
  // State untuk menyimpan data movie
  const [popularMovies, setPopularMovies] = useState([]);
  const [moreMovies, setMoreMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Mengambil data populer saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchPopularMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=1`);
        const data = await response.json();
        const formattedMovies = data.results.map((movie) => ({
          title: movie.title,
          imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : unavailable,
          rating: movie.vote_average,
          trailerUrl: `https://www.youtube.com/watch?v=${movie.id}`,
        }));
        setPopularMovies(formattedMovies);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  // Mengambil lebih banyak movie saat tombol ditekan
  const fetchMoreMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`);
      const data = await response.json();
      const formattedMovies = data.results.map((movie) => ({
        title: movie.title,
        imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : unavailable,
        rating: movie.vote_average,
        trailerUrl: `https://www.youtube.com/watch?v=${movie.id}`,
      }));
      setMoreMovies((prevMovies) => [...prevMovies, ...formattedMovies]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching more movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter film berdasarkan input pencarian
  const filteredPopularMovies = popularMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMoreMovies = moreMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-left mb-4">Popular Movies</h2>
        
        {/* Input pencarian */}
        <InputGroup className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm saat input berubah
          />
        </InputGroup>

        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading movies...</p>
          </div>
        ) : filteredPopularMovies.length === 0 ? (
          <div className="text-center">
            <p>No movies found.</p>
          </div>
        ) : (
          <Row className="justify-content-start">
            {filteredPopularMovies.map((movie, index) => (
              <Col sm={3} key={index}>
                <MovieCard
                  className="text-center"
                  title={movie.title}
                  imageUrl={movie.imageUrl}
                  rating={movie.rating}
                  trailerUrl={movie.trailerUrl}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>

      {/* Bagian More Movies */}
      <div className="container mt-5">
        <h2 className="text-left mb-4">More Movies</h2>
        
        {isLoading && currentPage > 1 ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading more movies...</p>
          </div>
        ) : filteredMoreMovies.length === 0 ? (
          <div className="text-center">
            <p>No more movies available.</p>
          </div>
        ) : (
          <Row className="justify-content-start">
            {filteredMoreMovies.map((movie, index) => (
              <Col sm={3} key={index}>
                <MovieCard
                  className="text-center"
                  title={movie.title}
                  imageUrl={movie.imageUrl}
                  rating={movie.rating}
                  trailerUrl={movie.trailerUrl}
                />
              </Col>
            ))}
          </Row>
        )}

        {/* Tombol untuk mengambil lebih banyak film */}
        <div className="text-center mt-4">
          {currentPage < totalPages && (
            <Button onClick={fetchMoreMovies} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'More Movies'}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;

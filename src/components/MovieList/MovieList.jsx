import { useState, useEffect } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { Row, Col } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const MovieList = () => {
  // State untuk menyimpan data movie
  const [movies, setMovies] = useState([]);
  
  // Mengambil data dari API saat komponen dimuat
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        
        // Menyaring dan memformat data movie yang diterima
        const formattedMovies = data.results.map((movie) => ({
          title: movie.title,
          imageUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : unavailable, // Jika poster tidak ada, gunakan gambar default
          rating: movie.vote_average,
          trailerUrl: `https://www.youtube.com/watch?v=${movie.id}`, // Ini placeholder, karena ID film tidak memberikan ID YouTube trailer
        }));
        
        setMovies(formattedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []); // Menjalankan efek hanya sekali saat komponen pertama kali dimuat

  return (
    <div className="container mt-5">
      <h2 className="text-left mb-4">Popular Movies</h2>
      <Row className="justify-content-start">
        {movies.map((movie, index) => (
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
      <h2 className="text-left mb-4">More Movies</h2>
      <Row className="justify-content-start">
        {movies.map((movie, index) => (
          <Col sm={3} key={index}>
            <MovieCard
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              trailerUrl={movie.trailerUrl}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;

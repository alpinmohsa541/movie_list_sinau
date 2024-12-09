// src/components/MovieDetail/MovieDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const MovieDetail = () => {
  const { id } = useParams(); // Mengambil ID film dari URL
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center mt-5">
        <p>Movie details not found.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{movie.title}</h1>
      <div className="d-flex">
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : unavailable}
          alt={movie.title}
          style={{ width: '300px', height: '450px', marginRight: '20px' }}
        />
        <div>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

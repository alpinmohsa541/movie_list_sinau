import MovieCard from "../MovieCard/MovieCard";
import { Row, Col } from 'react-bootstrap';

const movies = [
  {
    title: 'Thor: Love and Thunder',
    imageUrl: 'https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
    rating: 6.8,
    trailerUrl: 'https://www.youtube.com/watch?v=7pQf7e10fcg',
  },
  {
    title: 'Orphan: First Kill',
    imageUrl: 'https://image.tmdb.org/t/p/original/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg',
    rating: 6.9,
    trailerUrl: 'https://www.youtube.com/watch?v=5F9t9HpxtSg',
  },
  {
    title: 'Prey',
    imageUrl: 'https://image.tmdb.org/t/p/original/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
    rating: 7.9,
    trailerUrl: 'https://www.youtube.com/watch?v=czvFGEbmeIo',
  },
  {
    title: 'Prey',
    imageUrl: 'https://image.tmdb.org/t/p/original/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
    rating: 7.9,
    trailerUrl: 'https://www.youtube.com/watch?v=czvFGEbmeIo',
  },
  {
    title: 'Prey',
    imageUrl: 'https://image.tmdb.org/t/p/original/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
    rating: 7.9,
    trailerUrl: 'https://www.youtube.com/watch?v=czvFGEbmeIo',
  },
  {
    title: 'Prey',
    imageUrl: 'https://image.tmdb.org/t/p/original/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
    rating: 7.9,
    trailerUrl: 'https://www.youtube.com/watch?v=czvFGEbmeIo',
  },
  {
    title: 'Thor: Love and Thunder',
    imageUrl: 'https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
    rating: 6.8,
    trailerUrl: 'https://www.youtube.com/watch?v=7pQf7e10fcg',
  },
  {
    title: 'Orphan: First Kill',
    imageUrl: 'https://image.tmdb.org/t/p/original/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg',
    rating: 6.9,
    trailerUrl: 'https://www.youtube.com/watch?v=5F9t9HpxtSg',
  },
];


const MovieList = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-left mb-4">Movie List</h2>
      <Row className="justify-content-start ">
        {movies.map((movie, index) => (
          <Col sm={3} key={index}>
            <MovieCard
             className="text-center" title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              trailerUrl={movie.trailerUrl}
            />
          </Col>
        ))}
      </Row>
      <h2 className="text-left mb-4">Movie 2</h2>
      <Row className="justify-content-start ">
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

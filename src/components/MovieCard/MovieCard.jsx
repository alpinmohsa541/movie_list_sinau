import { Card, Button } from 'react-bootstrap';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

const MovieCard = ({ title, trailerUrl, imageUrl }) => {
  // Memastikan URL gambar menggunakan path yang benar
  const API_IMAGE_URL = "https://image.tmdb.org/t/p/original"; // URL dasar untuk gambar API

  // Cek apakah imageUrl ada, jika tidak, gunakan gambar placeholder
  const imageSrc = imageUrl ? `${API_IMAGE_URL}${imageUrl}` : "https://www.movienewz.com/img/films/poster-holder.jpg";

  return (
    <Card className="mb-4" style={{ width: '18rem', height: '35rem' }}>
      {/* Menggunakan gambar dari API atau fallback gambar */}
      <Card.Img variant="top" src={imageSrc} alt={title} className="h-100" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center">{title}</Card.Title>
        <div className="mt-auto">
          <a href={trailerUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="danger" className="w-100">
              <AiOutlinePlayCircle className="me-2" size={20} />
              Watch
            </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  trailerUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired, // imageUrl adalah path gambar dari API
};

export default MovieCard;

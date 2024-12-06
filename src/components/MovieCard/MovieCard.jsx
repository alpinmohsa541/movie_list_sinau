import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const MovieCard = ({ title, imageUrl, trailerUrl }) => {
  return (
    <Card className="mb-4" style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <a href={trailerUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="danger" className="w-100">
            <AiOutlinePlayCircle className="me-2" size={20} />
            Watch
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  trailerUrl: PropTypes.string.isRequired,
};

export default MovieCard;

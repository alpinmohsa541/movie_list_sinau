import { Card, Button } from 'react-bootstrap';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

const MovieCard = ({ title, trailerUrl, imageUrl }) => {
  return (
    <Card className="mb-4" style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
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
  imageUrl: PropTypes.string.isRequired,
};

export default MovieCard;

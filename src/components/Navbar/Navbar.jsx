import PropTypes from 'prop-types'; // Import PropTypes
import { AiOutlineSearch } from 'react-icons/ai';

const Nav = ({ handleChangeSearch, onSubmitSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 2 }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="img-fluid"
            src="https://movielist-react-app.netlify.app/static/media/Logo.eeba5c17ddf85f2145e83dd963662921.svg"
            alt="Brand Logo"
            width="150"
            height="auto"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Search Bar */}
        <div className="d-flex justify-content-center w-100 mt-2">
          <div className="d-flex align-items-center border rounded-2 border-2 border-white bg-transparent w-75">
            <input
              className="bg-transparent text-white border-0 w-100 p-2 placeholder-white"
              type="text"
              placeholder="What do you want to watch?"
              onChange={(e) => handleChangeSearch(e)}
            />
            <AiOutlineSearch
              onClick={() => onSubmitSearch()}
              size={25}
              className="text-white hover:text-danger cursor-pointer ms-2"
            />
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active me-3 text-white" aria-current="page" href="#">
              Login
            </a>
            <a className="nav-link me-3 text-white" href="#">
              Log Out
            </a>
            <a className="nav-link me-3 text-white" href="#">
              Favorite
            </a>
            <a className="nav-link me-3 text-white" href="#">
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Validasi PropTypes
Nav.propTypes = {
  handleChangeSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
};

export default Nav;

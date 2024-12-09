  import { useEffect, useState } from "react";
  import axios from "axios";
  import { AiOutlinePlayCircle } from "react-icons/ai";
  import { BsStar } from "react-icons/bs";

  function Slide() {
    const [videos, setVideos] = useState(null);
    const [videoss, setVideoss] = useState(null);
    const [videosss, setVideosss] = useState(null);

    const [movie1, setMovie1] = useState(null);
    const [movie2, setMovie2] = useState(null);
    const [movie3, setMovie3] = useState(null);

    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "ae4dbdc73a2bf042cb271a0b322631d5";

    const getVideos1 = async () => {
      try {
        const res = await axios.get(`${API_URL}/movie/616037/videos`, {
          params: {
            api_key: API_KEY,
          },
        });
        setVideos(res.data.results.find(({ name }) => name === "Official Trailer"));
      } catch (error) {
        console.log(error);
      }
    };

    const getVideos2 = async () => {
      try {
        const res = await axios.get(`${API_URL}/movie/760161/videos`, {
          params: {
            api_key: API_KEY,
          },
        });
        setVideoss(res.data.results.find(({ name }) => name === "Official Trailer"));
      } catch (error) {
        console.log(error);
      }
    };

    const getVideos3 = async () => {
      try {
        const res = await axios.get(`${API_URL}/movie/766507/videos`, {
          params: {
            api_key: API_KEY,
          },
        });
        setVideosss(res.data.results.find(({ name }) => name === "Official Trailer"));
      } catch (error) {
        console.log(error);
      }
    };

    const getMovieData1 = async () => {
      try {
        const res = await axios.get(`${API_URL}/movie/616037`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie1(res.data); // Set the movie details for slide 1
      } catch (error) {
        console.log(error);
      }
    };

    const getMovieData2 = async () => {
      try {
        const res = await axios.get(`${API_URL}/movie/760161`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie2(res.data); // Set the movie details for slide 2
      } catch (error) {
        console.log(error);
      }
    };

    const getMovieData3 = async () => {
      try {
        const res = await axios.get(`${API_URL}/movie/766507`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie3(res.data); // Set the movie details for slide 3
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getVideos1();
      getVideos2();
      getVideos3();
      getMovieData1();
      getMovieData2();
      getMovieData3();
      window.scroll(0, 0);
    }, []);

    const truncateString = (str, num) => {
      if (str?.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    };

    return (
      <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {/* Slide 1 */}
            {movie1 && (
              <div className="carousel-item active position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style={{ zIndex: 1 }}></div>
                <div className="position-absolute top-50 start-0 translate-middle-y p-5 text-white" style={{ zIndex: 2 }}>
                  <h1 className="display-1 fw-bold">{movie1.title}</h1>
                  <p className="lead">{truncateString(movie1.overview, 100)}</p>
                  <div className="d-flex align-items-center">
                    <BsStar className="text-warning" />
                    <p className="ms-3">{Math.round(movie1.vote_average)} / 10</p>
                  </div>
                  <a href={`https://www.youtube.com/watch?v=${videos?.key}`} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-danger btn-lg mt-4">
                      <AiOutlinePlayCircle className="me-2" />
                      Watch Trailer
                    </button>
                  </a>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie1.backdrop_path}`}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt={movie1.title}
                />
              </div>
            )}

            {/* Slide 2 */}
            {movie2 && (
              <div className="carousel-item position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style={{ zIndex: 1 }}></div>
                <div className="position-absolute top-50 start-0 translate-middle-y p-5 text-white" style={{ zIndex: 2 }}>
                  <h1 className="display-1 fw-bold">{movie2.title}</h1>
                  <p className="lead">{truncateString(movie2.overview, 100)}</p>
                  <div className="d-flex align-items-center">
                    <BsStar className="text-warning" />
                    <p className="ms-3">{Math.round(movie2.vote_average)} / 10</p>
                  </div>
                  <a href={`https://www.youtube.com/watch?v=${videoss?.key}`} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-danger btn-lg mt-4">
                      <AiOutlinePlayCircle className="me-2" />
                      Watch Trailer
                    </button>
                  </a>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie2.backdrop_path}`}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt={movie2.title}
                />
              </div>
            )}

            {/* Slide 3 */}
            {movie3 && (
              <div className="carousel-item position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style={{ zIndex: 1 }}></div>
                <div className="position-absolute top-50 start-0 translate-middle-y p-5 text-white" style={{ zIndex: 2 }}>
                  <h1 className="display-1 fw-bold">{movie3.title}</h1>
                  <p className="lead">{truncateString(movie3.overview, 100)}</p>
                  <div className="d-flex align-items-center">
                    <BsStar className="text-warning" />
                    <p className="ms-3">{Math.round(movie3.vote_average)} / 10</p>
                  </div>
                  <a href={`https://www.youtube.com/watch?v=${videosss?.key}`} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-danger btn-lg mt-4">
                      <AiOutlinePlayCircle className="me-2" />
                      Watch Trailer
                    </button>
                  </a>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie3.backdrop_path}`}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt={movie3.title}
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  export default Slide;

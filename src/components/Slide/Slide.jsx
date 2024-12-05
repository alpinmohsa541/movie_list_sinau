import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsStar } from "react-icons/bs";

function Slide() {
  const [videos, setVideos] = useState([]);
  const [videoss, setVideoss] = useState([]);
  const [videosss, setVideosss] = useState([]);

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

  useEffect(() => {
    getVideos1();
    getVideos2();
    getVideos3();
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
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
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
        <div className="carousel-item active position-relative">
            {/* Latar belakang hitam dengan transparansi */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style={{ zIndex: 1 }}></div>
            {/* Teks */}
            <div className="position-absolute top-50 start-0 translate-middle-y p-5 text-white" style={{ zIndex: 2 }}>
            <h1 className="display-1 fw-bold">Thor: Love and Thunder</h1>
            <p className="lead">
                {truncateString(
                "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
                100
                )}
            </p>
            <div className="d-flex align-items-center">
                <BsStar className="text-warning" />
                <p className="ms-3">{Math.round(6.8)} / 10</p>
            </div>
            <a href={`https://www.youtube.com/watch?v=${videos.key}`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-danger btn-lg mt-4">
                <AiOutlinePlayCircle className="me-2" />
                Watch Trailer
                </button>
            </a>
            </div>
            {/* Gambar */}
            <img
            src="https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"
            className="d-block w-100 h-100 object-fit-cover"
            alt="Thor: Love and Thunder"
            />
        </div>

        {/* Slide 2 */}
        <div className="carousel-item position-relative">
            {/* Latar belakang hitam dengan transparansi */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style={{ zIndex: 1 }}></div>
            {/* Teks */}
            <div className="position-absolute top-50 start-0 translate-middle-y p-5 text-white" style={{ zIndex: 2 }}>
            <h1 className="display-1 fw-bold">Orphan: First Kill</h1>
            <p className="lead">
                {truncateString(
                "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous 'child' at any cost.",
                100
                )}
            </p>
            <div className="d-flex align-items-center">
                <BsStar className="text-warning" />
                <p className="ms-3">{Math.round(6.9)} / 10</p>
            </div>
            <a href={`https://www.youtube.com/watch?v=${videoss.key}`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-danger btn-lg mt-4">
                <AiOutlinePlayCircle className="me-2" />
                Watch Trailer
                </button>
            </a>
            </div>
            {/* Gambar */}
            <img
            src="https://image.tmdb.org/t/p/original/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg"
            className="d-block w-100 h-100 object-fit-cover"
            alt="Orphan: First Kill"
            />
        </div>

        {/* Slide 3 */}
        <div className="carousel-item position-relative">
            {/* Latar belakang hitam dengan transparansi */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style={{ zIndex: 1 }}></div>
            {/* Teks */}
            <div className="position-absolute top-50 start-0 translate-middle-y p-5 text-white" style={{ zIndex: 2 }}>
            <h1 className="display-1 fw-bold">Prey</h1>
            <p className="lead">
                {truncateString(
                "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
                100
                )}
            </p>
            <div className="d-flex align-items-center">
                <BsStar className="text-warning" />
                <p className="ms-3">{Math.round(7.9)} / 10</p>
            </div>
            <a href={`https://www.youtube.com/watch?v=${videosss.key}`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-danger btn-lg mt-4">
                <AiOutlinePlayCircle className="me-2" />
                Watch Trailer
                </button>
            </a>
            </div>
            {/* Gambar */}
            <img
            src="https://image.tmdb.org/t/p/original/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg"
            className="d-block w-100 h-100 object-fit-cover"
            alt="Prey"
            />
        </div>
        </div>
      </div>
    </>
  );
}

export default Slide;

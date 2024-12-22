import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router
import { AuthProvider } from "./components/Context/Context";
import Nav from "./components/Navbar/Navbar";
import Slide from "./components/Slide/Slide";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Routes>
        <Route path="/" element={<><Slide /><MovieList /></>} />
          <Route path="/movies/:id" element={<MovieDetail />} /> {/* Route Detail */}
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;

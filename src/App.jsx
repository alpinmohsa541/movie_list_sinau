import Nav from "./components/Navbar/Navbar";
import Slide from "./components/Slide/Slide";
import MovieList from './components/MovieList/MovieList';
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Nav  />
        <Slide />
        <MovieList/> {/* Mengirimkan searchTerm ke MovieList */}
        <Footer />
      </div>
    </>
  );
};

export default App;

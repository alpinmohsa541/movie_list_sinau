import { AuthProvider } from "./components/Context/Context"; // Import AuthProvider dari Context
import Nav from "./components/Navbar/Navbar"; // Pastikan sesuai dengan file Nav.jsx
import Slide from "./components/Slide/Slide";
import MovieList from "./components/MovieList/MovieList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AuthProvider> {/* Membungkus aplikasi dengan AuthProvider */}
      <div>
        <Nav /> {/* Navbar akan memiliki akses ke Context untuk autentikasi */}
        <Slide />
        <MovieList /> {/* MovieList tetap sama */}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;

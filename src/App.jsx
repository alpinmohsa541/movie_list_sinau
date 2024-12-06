import { useState } from 'react';  // Impor useState untuk mengelola state
import Nav from "./components/Navbar/Navbar";
import Slide from "./components/Slide/Slide";
import MovieList from './components/MovieList/MovieList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');  // Menggunakan state untuk menyimpan nilai pencarian

  // Fungsi untuk menangani perubahan di input pencarian
  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fungsi untuk menangani pencarian ketika tombol diklik
  const onSubmitSearch = () => {
    console.log('Searching for:', searchTerm);
    // Logika pencarian bisa ditambahkan di sini
  };

  return (
    <>
      <div>
        {/* Pass handleChangeSearch dan onSubmitSearch sebagai properti ke Nav */}
        <Nav handleChangeSearch={handleChangeSearch} onSubmitSearch={onSubmitSearch} />
        <Slide />
        <MovieList />
      </div>
    </>
  );
};


export default App;

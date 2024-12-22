import { createContext, useContext, useState } from 'react';

// Membuat context untuk autentikasi
const AuthContext = createContext();

// Hook untuk mengakses context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider untuk menyimpan status login, sign-up, dan favorit
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login
  const [isSignedUp, setIsSignedUp] = useState(false); // Status sign-up
  const [favorites, setFavorites] = useState([]); // State untuk film favorit

  // Fungsi untuk login
  const handleLogin = (username, password) => {
    if (username && password) {
      setIsLoggedIn(true);
      setIsSignedUp(false);
      return true;
    }
    return false;
  };

  // Fungsi untuk sign-up
  const handleSignUp = (newUsername, newPassword, confirmPassword) => {
    if (newUsername && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        setIsSignedUp(true);
        setIsLoggedIn(false);
        return true;
      }
    }
    return false;
  };

  // Fungsi untuk logout
  const handleSignOut = () => {
    setIsLoggedIn(false);
    setIsSignedUp(false);
  };

  // Fungsi untuk menambah film ke favorit
  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  // Fungsi untuk menghapus film dari favorit
  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== movieId));
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isSignedUp,
        handleLogin,
        handleSignUp,
        handleSignOut,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

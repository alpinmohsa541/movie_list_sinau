// src/context/Context.jsx
import { createContext, useContext, useState } from 'react';

// Membuat context untuk autentikasi
const AuthContext = createContext();

// Hook untuk mengakses context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider untuk menyimpan status login dan sign-up
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Menyimpan status login
  const [isSignedUp, setIsSignedUp] = useState(false); // Menyimpan status sign-up

  // Fungsi untuk login
  const handleLogin = (username, password) => {
    if (username && password) {
      setIsLoggedIn(true); // Set status login ke true
      setIsSignedUp(false); // Reset status sign up
      return true;
    }
    return false;
  };

  // Fungsi untuk sign-up
  const handleSignUp = (newUsername, newPassword, confirmPassword) => {
    if (newUsername && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        setIsSignedUp(true); // Set status sign-up ke true
        setIsLoggedIn(false); // Reset status login
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

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isSignedUp,
        handleLogin,
        handleSignUp,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

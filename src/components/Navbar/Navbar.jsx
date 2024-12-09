import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useState } from 'react'; // Import useState untuk status login

const Nav = ({ handleChangeSearch, onSubmitSearch }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status untuk melacak login
  const [isSignedUp, setIsSignedUp] = useState(false); // Status untuk melacak sign up

  // Fungsi untuk menampilkan SweetAlert saat login
  const handleLogin = () => {
    Swal.fire({
      title: 'Login',
      html: `
        <input type="text" id="username" class="swal2-input" placeholder="Username" />
        <input type="password" id="password" class="swal2-input" placeholder="Password" />
      `,
      focusConfirm: false,
      preConfirm: () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
          // Menampilkan alert success setelah login berhasil
          Swal.fire('Login Successful', 'You are logged in!', 'success');
          setIsLoggedIn(true); // Menandakan bahwa pengguna telah login
          setIsSignedUp(false); // Reset status sign up setelah login
        } else {
          Swal.fire('Error', 'Please enter valid credentials', 'error');
        }
      }
    });
  };

  // Fungsi untuk menampilkan SweetAlert saat sign-up
  const handleSignUp = () => {
    Swal.fire({
      title: 'Sign Up',
      html: `
        <input type="text" id="new-username" class="swal2-input" placeholder="Username" />
        <input type="password" id="new-password" class="swal2-input" placeholder="Password" />
        <input type="password" id="confirm-password" class="swal2-input" placeholder="Confirm Password" />
      `,
      focusConfirm: false,
      preConfirm: () => {
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newUsername && newPassword && confirmPassword) {
          if (newPassword === confirmPassword) {
            // Menampilkan alert success setelah sign-up berhasil
            Swal.fire('Sign Up Successful', 'You have signed up!', 'success');
            setIsSignedUp(true); // Menandakan bahwa pengguna telah sign up
            setIsLoggedIn(false); // Set status login ke false karena perlu login lagi
          } else {
            Swal.fire('Error', 'Passwords do not match!', 'error');
          }
        } else {
          Swal.fire('Error', 'Please fill in all fields', 'error');
        }
      }
    });
  };

  // Fungsi untuk menampilkan SweetAlert saat sign-out
  const handleSignOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to sign out?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, sign out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Menampilkan alert success setelah sign out
        Swal.fire('Signed Out', 'You have been signed out!', 'success');
        setIsLoggedIn(false); // Menandakan bahwa pengguna telah logout
        setIsSignedUp(false); // Reset status sign up
      }
    });
  };

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
          <div className="navbar-nav d-flex w-100 justify-content-between">
            {/* Kondisi untuk Login, Sign Up, atau Sign Out */}
            {!isLoggedIn && !isSignedUp ? (
              <>
                <a 
                  className="nav-link active me-3 text-white" 
                  aria-current="page" 
                  href="#"
                  onClick={handleLogin} // Menambahkan event untuk Login
                >
                  Login
                </a>
                <a 
                  className="nav-link me-3 text-white" 
                  href="#"
                  onClick={handleSignUp} // Menambahkan event untuk Sign Up
                >
                  Sign Up
                </a>
              </>
            ) : isLoggedIn ? (
              <a 
                className="nav-link me-3 text-white " 
                href="#"
                onClick={handleSignOut} // Menambahkan event untuk Sign Out
              >
                Sign Out
              </a>
            ) : (
              // Jika sudah sign-up tapi belum login, tidak ada tombol sign out
              <a 
                className="nav-link me-3 text-white" 
                href="#"
                onClick={handleLogin} // Arahkan ke login setelah sign-up
              >
                Login
              </a>
            )}
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

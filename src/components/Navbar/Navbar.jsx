import { useAuth } from '../Context/Context'; // Import hook useAuth
import Swal from 'sweetalert2';

const Nav = () => {
  const { isLoggedIn, isSignedUp, handleLogin, handleSignUp, handleSignOut } = useAuth();

  // Fungsi untuk menampilkan SweetAlert saat login
  const triggerLogin = () => {
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
        if (handleLogin(username, password)) {
          Swal.fire('Login Successful', 'You are logged in!', 'success');
        } else {
          Swal.fire('Error', 'Please enter valid credentials', 'error');
        }
      },
    });
  };

  // Fungsi untuk menampilkan SweetAlert saat sign-up
  const triggerSignUp = () => {
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

        if (handleSignUp(newUsername, newPassword, confirmPassword)) {
          Swal.fire('Sign Up Successful', 'You have signed up!', 'success');
        } else {
          Swal.fire('Error', 'Passwords do not match or fields are empty', 'error');
        }
      },
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

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {/* Kondisi untuk Login, Sign Up, atau Sign Out */}
            {!isLoggedIn && !isSignedUp ? (
              <>
                <a className="nav-link active me-3 text-white" aria-current="page" href="#" onClick={triggerLogin}>
                  Login
                </a>
                <a className="nav-link me-3 text-white" href="#" onClick={triggerSignUp}>
                  Sign Up
                </a>
              </>
            ) : isLoggedIn ? (
              <a className="nav-link me-3 text-white" href="#" onClick={handleSignOut}>
                Sign Out
              </a>
            ) : (
              // Jika sudah sign-up tapi belum login, tidak ada tombol sign out
              <a className="nav-link me-3 text-white" href="#" onClick={triggerLogin}>
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

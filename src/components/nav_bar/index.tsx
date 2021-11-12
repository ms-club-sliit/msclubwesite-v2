import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isNavBarScroll, setNavbarScroll] = useState<boolean>(false);

  const changeNavBackgroundColor = () => {
    if (window.screenY > 100) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  window.addEventListener('scroll', changeNavBackgroundColor);

  return (
    <div className="navbar-container navbar-margin">
      <nav className={
        isNavBarScroll
          ? "navbar fixed-top active navbar-expand-lg navbar-light navbar-background"
          : "navbar fixed-top navbar-expand-lg navbar-light navbar-background"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/assets/ms_club_logo.png" alt="ms-club-logo" className="navbar-logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav me-auto mb-lg-0" />
            <ul className="navbar-nav d-flex me-2 navbar-items">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;